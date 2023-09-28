'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-sdk-evm-zksync.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-sdk-evm-zksync.cjs.dev.js");
}
