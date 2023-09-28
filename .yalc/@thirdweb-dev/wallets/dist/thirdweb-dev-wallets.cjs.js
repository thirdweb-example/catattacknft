'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets.cjs.dev.js");
}
