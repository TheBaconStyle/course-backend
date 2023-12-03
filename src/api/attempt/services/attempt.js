"use strict";

const { add } = require("date-fns");
const { shuffle } = require("../../../functions/shuffle");

/**
 * attempt service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::attempt.attempt", ({ strapi }) => ({
  // async new({ student, test }) {
  //   const currentDate = new Date();
  //   const variantService = strapi.db.query(
  //     "api::question-variant.question-variant"
  //   );
  //   const attemptService = strapi.db.query("api::attempt.attempt");
  //   const sessionService = strapi.db.query("api::session.session");
  //   const session = await sessionService.findOne({
  //     where: {
  //       start: { $lte: currentDate },
  //       finish: { $gt: currentDate },
  //       test: { id: test },
  //       $or: [
  //         { students: { account: { id: student } } },
  //         { groups: { students: { account: { id: student } } } },
  //       ],
  //     },
  //     populate: ["test", "test.questions"],
  //   });
  //   if (
  //     !session ||
  //     session.test.questions.length < session.test.question_count
  //   ) {
  //     return null;
  //   }
  //   const sessionAttempts = attemptService.findWithCount({
  //     where: {
  //       student: { account: { id: student } },
  //     },
  //   });
  //   if (sessionAttempts >= session.attempt_count) {
  //     return null;
  //   }
  //   const currentTest = session.test;
  //   const attemptQuestions = shuffle(currentTest.questions).slice(
  //     0,
  //     currentTest.question_count
  //   );
  //   const question_variants = [];
  //   for (let i = 0; i < attemptQuestions.length; i++) {
  //     const question = attemptQuestions[i];
  //     const hasVariants = question.type !== "fulltext";
  //     let shuffledVariants = null;
  //     if (hasVariants) {
  //       shuffledVariants = JSON.stringify(
  //         shuffle(JSON.parse(question.variants))
  //       );
  //     }
  //     const data = {
  //       question: question.id,
  //       variants_dump: shuffledVariants,
  //       sequence_index: i + 1,
  //     };
  //     const sequenced_question = await variantService.create({
  //       data,
  //       select: ["id"],
  //     });
  //     question_variants.push(sequenced_question.id);
  //   }
  //   const expires_at = add(currentDate, {
  //     minutes: test.complete_time,
  //   });
  //   const newAttempt = await attemptService.create({
  //     data: {
  //       student,
  //       session,
  //       expires_at,
  //       question_variants: question_variants,
  //     },
  //     select: ["id"],
  //   });
  //   return newAttempt;
  // },
}));
