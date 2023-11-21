"use strict";

/**
 * test service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::test.test", ({ strapi }) => ({
  async getCurrent({ sutdent, course }) {},
  async getByCourse({ teacher, course }) {},
}));
