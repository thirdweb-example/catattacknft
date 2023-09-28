'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-solana-wallets-private-key.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-solana-wallets-private-key.cjs.dev.js");
}
