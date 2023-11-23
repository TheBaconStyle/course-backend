"use strict";

/**
 * course service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::course.course", ({ strapi }) => ({
  async getAviableCourses({ account }) {
    const courseService = strapi.db.query("api::course.course");
    const courses = await courseService.findMany({
      where: {
        $or: [
          {
            groups: {
              students: {
                account: {
                  id: account,
                },
              },
            },
          },
          {
            teacher: { account: { id: account } },
          },
        ],
      },
      populate: ["image"],
    });
    return courses.map((course) => ({
      ...course,
      image: `${course.image.hash}${course.image.ext}`,
    }));
  },
}));
