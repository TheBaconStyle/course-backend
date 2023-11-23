"use strict";

/**
 * course controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::course.course", ({ strapi }) => ({
  async getAviableCourses(ctx) {
    const account = ctx.state.user.id;
    const courseService = strapi.service("api::course.course");
    const courses = await courseService.getAviableCourses({ account });
    return courses;
  },
}));
