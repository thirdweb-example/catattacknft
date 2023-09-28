'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-sdk-solana-server.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-sdk-solana-server.cjs.dev.js");
}
