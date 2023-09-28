'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.cjs.dev.js");
}
