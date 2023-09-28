'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-embedded-wallet.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-embedded-wallet.cjs.dev.js");
}
