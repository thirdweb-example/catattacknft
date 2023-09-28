'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-local-wallet-node.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-local-wallet-node.cjs.dev.js");
}
