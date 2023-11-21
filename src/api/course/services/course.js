"use strict";

/**
 * course service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::course.course", ({ strapi }) => ({
  async getByStudent({ student }) {
    const courseService = strapi.db.query("api::course.course");
    const courses = await courseService.findMany({
      where: {
        groups: {
          students: {
            id: student,
          },
        },
      },
      populate: ["image"],
    });
    return courses;
  },
  async getByTeacher() {},
}));
