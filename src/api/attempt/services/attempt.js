"use strict";

const { add } = require("date-fns");
const { shuffle } = require("../../../functions/shuffle");

/**
 * attempt service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::attempt.attempt", ({ strapi }) => ({
  async new({ student, session }) {
    const variantService = strapi.db.query(
      "api::question-variant.question-variant"
    );
    const currentDate = new Date();
    const attemptService = strapi.db.query("api::attempt.attempt");
    const testService = strapi.db.query("api::test.test");

    const test = await testService.findOne({
      where: {
        sessions: {
          id: session,
          start: { $lte: currentDate },
          finish: { $gt: currentDate },
          $or: [
            { students: { id: student } },
            { groups: { students: { id: student } } },
          ],
        },
      },
      populate: ["questions"],
    });

    const attemptQuestions = shuffle(test.questions).slice(
      0,
      test.question_count
    );

    const questionVariants = attemptQuestions.map((question, index) => {
      const hasVariants = question.type !== "fulltext";
      let shuffledVariants = null;
      if (hasVariants) {
        shuffledVariants = JSON.stringify(
          shuffle(JSON.parse(question.variants))
        );
      }
      return {
        question: question.id,
        variants_dump: shuffledVariants,
        sequence_index: index + 1,
      };
    });

    const question_variants = [];

    for (let i = 0; i < questionVariants.length; i++) {
      const sequenced_question = await variantService.create({
        data: questionVariants[i],
        select: ["id"],
      });
      question_variants.push(sequenced_question.id);
    }

    const expires_at = add(currentDate, {
      minutes: test.complete_time,
    });

    const newAttempt = await attemptService.create({
      data: {
        student,
        session,
        expires_at,
        question_variants: question_variants,
      },
      select: ["id"],
    });

    return newAttempt;
  },
}));
