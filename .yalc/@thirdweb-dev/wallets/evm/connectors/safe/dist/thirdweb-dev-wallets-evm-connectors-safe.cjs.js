'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-safe.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-safe.cjs.dev.js");
}
