"use strict";

const { shuffle } = require("../../../functions/shuffle");

/**
 * attempt service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::attempt.attempt", ({ strapi }) => ({
  qwe() {
    shuffle;
  },
}));
