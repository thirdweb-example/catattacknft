function getRpcUrl(network, clientId) {
  return `https://${network}.rpc.thirdweb.com/${clientId || ""}`;
}

export { getRpcUrl as g };
