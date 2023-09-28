'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-contracts-js-factories-TWRegistryLegacy__factory.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-contracts-js-factories-TWRegistryLegacy__factory.cjs.dev.js");
}
