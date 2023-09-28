'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-device-wallet.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-device-wallet.cjs.dev.js");
}
