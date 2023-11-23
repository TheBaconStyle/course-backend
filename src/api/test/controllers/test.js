"use strict";

/**
 * test controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::test.test", ({ strapi }) => ({
  async getAviableCourseTests(ctx) {
    const account = ctx.state.user.id;
    const testService = strapi.service("api::test.test");
    const course = ctx.params.course;
    const tests = await testService.getTestsByAccountCourse({
      account,
      course,
    });
    return tests;
  },
}));
