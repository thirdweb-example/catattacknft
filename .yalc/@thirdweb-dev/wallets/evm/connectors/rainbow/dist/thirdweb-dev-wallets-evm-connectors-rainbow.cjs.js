'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-rainbow.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-rainbow.cjs.dev.js");
}
