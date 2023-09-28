'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js");
}
