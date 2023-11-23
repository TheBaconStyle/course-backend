"use strict";

/**
 * test service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::test.test", ({ strapi }) => ({
  async getTestsByAccountCourse({ account, course }) {
    const testService = strapi.db.query("api::test.test");
    const tests = await testService.findMany({
      where: {
        course: {
          id: course,
        },
        $or: [
          {
            course: {
              teacher: account,
            },
          },
          {
            course: {
              groups: {
                students: {
                  id: account,
                },
              },
            },
          },
        ],
      },
    });
    return tests;
  },
}));
