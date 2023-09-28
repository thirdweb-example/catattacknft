'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-solana-wallets-base.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-solana-wallets-base.cjs.dev.js");
}
