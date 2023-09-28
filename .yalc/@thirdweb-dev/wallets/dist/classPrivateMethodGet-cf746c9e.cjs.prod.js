'use strict';

var classPrivateFieldSet = require('./classPrivateFieldSet-4a4973f9.cjs.prod.js');

function _classPrivateMethodInitSpec(obj, privateSet) {
  classPrivateFieldSet._checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}

function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return fn;
}

exports._classPrivateMethodGet = _classPrivateMethodGet;
exports._classPrivateMethodInitSpec = _classPrivateMethodInitSpec;
