'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-paper-wallet.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-paper-wallet.cjs.dev.js");
}
