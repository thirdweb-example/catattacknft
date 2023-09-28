'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-gcp-kms.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-wallets-gcp-kms.cjs.dev.js");
}
