'use strict';

function getRpcUrl(network, clientId) {
  return `https://${network}.rpc.thirdweb.com/${clientId || ""}`;
}

exports.getRpcUrl = getRpcUrl;
