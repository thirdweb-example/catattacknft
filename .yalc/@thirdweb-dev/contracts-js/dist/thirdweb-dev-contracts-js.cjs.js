'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-contracts-js.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-contracts-js.cjs.dev.js");
}
