'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-blocto.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-blocto.cjs.dev.js");
}
