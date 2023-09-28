function assertWindowEthereum(w) {
  return typeof w !== "undefined" && !!w && "ethereum" in w;
}

export { assertWindowEthereum as a };
