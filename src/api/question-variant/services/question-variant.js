"use strict";

/**
 * question-variant service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::question-variant.question-variant",
  ({ strapi }) => ({})
);
