'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-coinbase-wallet-mobile.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-coinbase-wallet-mobile.cjs.dev.js");
}
