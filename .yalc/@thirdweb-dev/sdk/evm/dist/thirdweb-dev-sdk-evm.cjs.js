'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-sdk-evm.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-sdk-evm.cjs.dev.js");
}
