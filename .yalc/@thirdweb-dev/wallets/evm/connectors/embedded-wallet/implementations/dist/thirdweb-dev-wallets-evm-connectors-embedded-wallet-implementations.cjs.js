'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-embedded-wallet-implementations.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-embedded-wallet-implementations.cjs.dev.js");
}
