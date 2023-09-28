'use strict';

function getInjectedPhantomProvider() {
  if (typeof window === "undefined") {
    return;
  }
  const provider = window.phantom?.ethereum;
  if (provider?.isPhantom) {
    return provider;
  }
}

exports.getInjectedPhantomProvider = getInjectedPhantomProvider;
