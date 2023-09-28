'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-paper.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-paper.cjs.dev.js");
}
