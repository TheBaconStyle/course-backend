// @ts-nocheck
"use strict";

/**
 * attempt controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::attempt.attempt", ({ strapi }) => ({
  async new(ctx) {
    const { body } = ctx.request;
    const {
      data: { student, session },
    } = body;
    const attemptService = strapi.service("api::attempt.attempt");
    const newAttempt = await attemptService.new({ session, student });
    return newAttempt;
  },
}));
