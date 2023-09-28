import EventEmitter from 'eventemitter3';

class Connector extends EventEmitter {}

// eslint-disable-next-line @typescript-eslint/ban-types

class WagmiAdapter extends Connector {
  constructor(wagmiConnector) {
    super();
    this.wagmiConnector = wagmiConnector;
  }
  async connect(args) {
    this.setupConnectorListeners();
    const result = await this.wagmiConnector.connect(args);
    return result.account;
  }
  disconnect() {
    this.wagmiConnector.removeAllListeners("connect");
    this.wagmiConnector.removeAllListeners("change");
    return this.wagmiConnector.disconnect();
  }
  isConnected() {
    return this.wagmiConnector.isAuthorized();
  }
  getAddress() {
    return this.wagmiConnector.getAccount();
  }
  getSigner() {
    return this.wagmiConnector.getSigner();
  }
  getProvider() {
    return this.wagmiConnector.getProvider();
  }
  async switchChain(chainId) {
    if (!this.wagmiConnector.switchChain) {
      throw new Error("Switch chain not supported");
    }
    await this.wagmiConnector.switchChain(chainId);
  }
  setupConnectorListeners() {
    this.wagmiConnector.addListener("connect", data => {
      this.emit("connect", data);
    });
    this.wagmiConnector.addListener("change", data => {
      this.emit("change", data);
    });
    this.wagmiConnector.addListener("disconnect", () => {
      this.emit("disconnect");
    });
  }
  async setupListeners() {
    this.setupConnectorListeners();
    await this.wagmiConnector.setupListeners();
  }
  updateChains(chains) {
    this.wagmiConnector.updateChains(chains);
  }
}

export { Connector as C, WagmiAdapter as W };
