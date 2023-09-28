'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-solana-wallets-signer.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-solana-wallets-signer.cjs.dev.js");
}
