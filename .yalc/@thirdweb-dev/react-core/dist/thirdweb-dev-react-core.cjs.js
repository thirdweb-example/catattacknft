'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-react-core.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-react-core.cjs.dev.js");
}
