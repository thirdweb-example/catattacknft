'use strict';

function assertWindowEthereum(w) {
  return typeof w !== "undefined" && !!w && "ethereum" in w;
}

exports.assertWindowEthereum = assertWindowEthereum;
