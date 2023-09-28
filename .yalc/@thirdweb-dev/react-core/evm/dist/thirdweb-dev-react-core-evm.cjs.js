'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-react-core-evm.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-react-core-evm.cjs.dev.js");
}
