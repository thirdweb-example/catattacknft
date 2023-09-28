'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-react-evm.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-react-evm.cjs.dev.js");
}
