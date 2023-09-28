'use strict';

var reactCore = require('@thirdweb-dev/react-core');
var React = require('react');

function useSafe() {
  const connect = reactCore.useConnect();
  return React.useCallback(async connectProps => {
    const {
      safeWallet
    } = await Promise.resolve().then(function () { return require('./safeWallet-6e0c4489.cjs.dev.js'); });
    return connect(safeWallet(), connectProps);
  }, [connect]);
}

// backwards compatibility
const useGnosis = useSafe;

exports.useGnosis = useGnosis;
exports.useSafe = useSafe;
