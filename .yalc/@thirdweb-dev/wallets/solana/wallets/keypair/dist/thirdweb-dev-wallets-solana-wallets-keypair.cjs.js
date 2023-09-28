'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-solana-wallets-keypair.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-solana-wallets-keypair.cjs.dev.js");
}
