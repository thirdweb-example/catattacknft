import { c as _checkPrivateRedeclaration } from './classPrivateFieldSet-a5db7c83.browser.esm.js';

function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}

function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return fn;
}

export { _classPrivateMethodInitSpec as _, _classPrivateMethodGet as a };
