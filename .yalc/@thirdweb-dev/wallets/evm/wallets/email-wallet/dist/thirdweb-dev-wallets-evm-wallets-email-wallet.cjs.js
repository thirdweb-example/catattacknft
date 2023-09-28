'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-email-wallet.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-email-wallet.cjs.dev.js");
}
