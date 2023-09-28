'use strict';

var React = require('react');
var reactCore = require('@thirdweb-dev/react-core');

function useMagic() {
  const connect = reactCore.useConnect();
  return React.useCallback(async options => {
    const {
      magicLink
    } = await Promise.resolve().then(function () { return require('./magicLink-e9e6eb1c.cjs.prod.js'); });
    return connect(magicLink(options), options);
  }, [connect]);
}

exports.useMagic = useMagic;
