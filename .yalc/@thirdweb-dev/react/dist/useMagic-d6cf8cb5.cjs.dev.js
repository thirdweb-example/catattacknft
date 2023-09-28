'use strict';

var React = require('react');
var reactCore = require('@thirdweb-dev/react-core');

function useMagic() {
  const connect = reactCore.useConnect();
  return React.useCallback(async options => {
    const {
      magicLink
    } = await Promise.resolve().then(function () { return require('./magicLink-4ab7352a.cjs.dev.js'); });
    return connect(magicLink(options), options);
  }, [connect]);
}

exports.useMagic = useMagic;
