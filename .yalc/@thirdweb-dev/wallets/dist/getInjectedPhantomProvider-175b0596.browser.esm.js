function getInjectedPhantomProvider() {
  const provider = window.phantom?.ethereum;
  if (provider?.isPhantom) {
    return provider;
  }
}

export { getInjectedPhantomProvider as g };
