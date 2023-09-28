'use strict';

var wallets = require('@thirdweb-dev/wallets');
var reactCore = require('@thirdweb-dev/react-core');
var coinbaseWallet = require('./formFields-855780f4.cjs.prod.js');
var React = require('react');
var formElements = require('./formElements-c7791271.cjs.prod.js');
var jsxRuntime = require('react/jsx-runtime');
var styled = require('@emotion/styled');
var reactIcons = require('@radix-ui/react-icons');
var ethers = require('ethers');
require('@emotion/react');
require('qrcode');
require('copy-to-clipboard');
require('detect-browser');
require('@radix-ui/colors');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const SelectpersonalWallet = props => {
  const guestWallet = props.personalWallets.find(w => w.id === wallets.walletIds.localWallet);
  const personalWallets = props.personalWallets.filter(w => w.id !== wallets.walletIds.localWallet);

  // auto select guest wallet if no other wallets
  const {
    selectWallet
  } = props;
  const selected = React.useRef(false);
  React.useEffect(() => {
    if (selected.current) {
      return;
    }
    if (guestWallet && personalWallets.length === 0) {
      selected.current = true;
      selectWallet(guestWallet);
    }
  }, [guestWallet, personalWallets.length, selectWallet]);
  if (guestWallet && personalWallets.length === 0) {
    return /*#__PURE__*/jsxRuntime.jsx("div", {
      style: {
        height: "250px"
      }
    });
  }
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    flex: "column",
    scrollY: true,
    animate: "fadein",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        title: props.safeWallet.meta.name,
        onBack: props.renderBackButton ? props.onBack : undefined,
        imgSrc: props.safeWallet.meta.iconURL
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Line, {}), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "sm"
    }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      px: "lg",
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "md"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        size: "lg",
        color: "primaryText",
        weight: 500,
        children: "Link personal wallet"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
        multiline: true,
        children: ["Connect your personal wallet to use Safe.", " ", /*#__PURE__*/jsxRuntime.jsx(formElements.Link, {
          inline: true,
          target: "_blank",
          href: "https://docs.safe.global/getting-started/readme",
          style: {
            whiteSpace: "nowrap"
          },
          children: "Learn more"
        }), " "]
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      expand: true,
      px: "md",
      scrollY: true,
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.WalletSelection, {
        maxHeight: "300px",
        walletConfigs: personalWallets,
        selectWallet: props.selectWallet
      })
    }), guestWallet && /*#__PURE__*/jsxRuntime.jsx(formElements.ScreenBottomContainer, {
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
        variant: "outline",
        fullWidth: true,
        onClick: () => {
          props.selectWallet(guestWallet);
        },
        "data-test": "continue-as-guest-button",
        children: "Continue as guest"
      })
    })]
  });
};

const gnosisAddressPrefixToChainId = {
  eth: 1,
  matic: 137,
  avax: 43114,
  bnb: 56,
  oeth: 10,
  gor: 5,
  "base-gor": 84531
};
const SelectAccount = props => {
  const activeWallet = reactCore.useWallet();
  const connect = reactCore.useConnect();
  const activeChain = reactCore.useChain();
  const connectedChainId = reactCore.useChainId();
  const [safeAddress, setSafeAddress] = React.useState("");
  const [safeChainId, setSafeChainId] = React.useState(-1);
  const [safeConnectError, setSafeConnectError] = React.useState(false);
  const [switchError, setSwitchError] = React.useState(false);
  const [switchingNetwork, setSwitchingNetwork] = React.useState(false);
  const connectionStatus = reactCore.useConnectionStatus();
  const chains = reactCore.useSupportedChains();

  // put supported chains first
  const supportedChains = chains.filter(c => wallets.SafeSupportedChainsSet.has(c.chainId));
  const selectedSafeChain = supportedChains.find(c => c.chainId === safeChainId);
  const testnets = supportedChains.filter(c => c.testnet);
  const mainnets = supportedChains.filter(c => !c.testnet);

  // if there are more than one mainnet and testnet, group them
  const useOptGroup = mainnets.length > 0 && testnets.length > 0;
  const handleSubmit = async () => {
    if (!selectedSafeChain || !activeWallet || !activeChain) {
      return;
    }
    setSafeConnectError(false);
    try {
      await connect(props.safeWalletConfig, {
        chain: selectedSafeChain,
        personalWallet: activeWallet,
        safeAddress
      });
      props.onConnect();
    } catch (e) {
      console.error(e);
      setSafeConnectError(true);
    }
  };
  const mismatch = safeChainId !== -1 && connectedChainId !== safeChainId;
  const isValidAddress = ethers.utils.isAddress(safeAddress);
  const disableNetworkSelection = supportedChains.length === 1;
  const switchChain = reactCore.useSwitchChain();
  const modalConfig = React.useContext(formElements.ModalConfigCtx);
  return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
    fullHeight: true,
    flex: "column",
    scrollY: true,
    children: /*#__PURE__*/jsxRuntime.jsxs("form", {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
      },
      onSubmit: e => {
        e.preventDefault();
        handleSubmit();
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
        p: "lg",
        children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
          title: props.safeWalletConfig.meta.name,
          onBack: props.renderBackButton ? props.onBack : undefined,
          imgSrc: props.safeWalletConfig.meta.iconURL
        })
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        expand: true,
        flex: "column",
        p: "lg",
        scrollY: true,
        style: {
          paddingTop: 0
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "md"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
          color: "primaryText",
          size: "lg",
          weight: 500,
          children: "Enter your safe details"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "sm"
        }), /*#__PURE__*/jsxRuntime.jsxs(formElements.ModalDescription, {
          children: ["You can find your safe address in", " ", /*#__PURE__*/jsxRuntime.jsx(formElements.Link, {
            inline: true,
            target: "_blank",
            href: "https://app.safe.global/home",
            style: {
              display: "inline",
              whiteSpace: "nowrap"
            },
            children: "Safe Dashboard"
          })]
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.FormField, {
          name: "safeAddress",
          id: "safeAddress",
          errorMessage: safeAddress && !isValidAddress ? "Invalid Safe Address" : undefined,
          autocomplete: "on",
          onChange: value => {
            setSafeConnectError(false);
            if (value.length > 4) {
              const prefix = value.split(":")[0];
              if (prefix && prefix in gnosisAddressPrefixToChainId) {
                setSafeChainId(gnosisAddressPrefixToChainId[prefix]);
                setSafeAddress(value.slice(prefix.length + 1));
              } else {
                setSafeAddress(value);
              }
            } else {
              setSafeAddress(value);
            }
          },
          label: "Safe Address",
          type: "text",
          value: safeAddress,
          required: true,
          placeholder: "0x123..."
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Label, {
          htmlFor: "safeNetwork",
          children: "Safe Network"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "sm"
        }), /*#__PURE__*/jsxRuntime.jsxs("div", {
          style: {
            position: "relative"
          },
          children: [/*#__PURE__*/jsxRuntime.jsxs(NetworkSelect, {
            "data-error": supportedChains.length === 0 || safeConnectError,
            required: true,
            name: "safeNetwork",
            id: "safeNetwork",
            value: safeChainId,
            disabled: disableNetworkSelection,
            placeholder: "Network your safe is deployed to",
            onChange: e => {
              setSafeConnectError(false);
              setSwitchError(false);
              setSafeChainId(Number(e.target.value));
            },
            children: [!disableNetworkSelection && /*#__PURE__*/jsxRuntime.jsx("option", {
              value: "",
              hidden: true,
              children: "Network your safe is deployed to"
            }), useOptGroup ? /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [/*#__PURE__*/jsxRuntime.jsx("optgroup", {
                label: "Mainnets",
                children: mainnets.map(chain => {
                  return /*#__PURE__*/jsxRuntime.jsx("option", {
                    value: chain.chainId,
                    children: chain.name
                  }, chain.chainId);
                })
              }), /*#__PURE__*/jsxRuntime.jsx("optgroup", {
                label: "Testnets",
                children: testnets.map(chain => {
                  return /*#__PURE__*/jsxRuntime.jsx("option", {
                    value: chain.chainId,
                    children: chain.name
                  }, chain.chainId);
                })
              })]
            }) : supportedChains.map(chain => {
              return /*#__PURE__*/jsxRuntime.jsx("option", {
                value: chain.chainId,
                children: chain.name
              }, chain.chainId);
            })]
          }), !disableNetworkSelection && /*#__PURE__*/jsxRuntime.jsx(StyledChevronDownIcon, {
            width: formElements.iconSize.sm,
            height: formElements.iconSize.sm,
            style: {
              position: "absolute",
              top: "50%",
              right: formElements.spacing.sm,
              transform: "translateY(-50%)",
              pointerEvents: "none"
            }
          })]
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "sm"
        }), supportedChains.length === 0 && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
            color: "danger",
            multiline: true,
            size: "xs",
            children: [" ", "Can not use Safe: No Safe supported chains are configured in App"]
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "sm"
          })]
        }), safeConnectError && /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
          size: "xs",
          multiline: true,
          color: "danger",
          style: {
            display: "flex",
            gap: formElements.spacing.sm,
            alignItems: "center"
          },
          children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.ExclamationTriangleIcon, {
            width: formElements.iconSize.sm,
            height: formElements.iconSize.sm
          }), /*#__PURE__*/jsxRuntime.jsxs("span", {
            children: ["Could not connect to Safe. ", /*#__PURE__*/jsxRuntime.jsx("br", {}), "Make sure safe address and network are correct."]
          })]
        }), switchError && /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
          color: "danger",
          size: "sm",
          children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
            flex: "row",
            gap: "sm",
            center: "y",
            children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.ExclamationTriangleIcon, {
              width: formElements.iconSize.sm,
              height: formElements.iconSize.sm
            }), "Failed to switch network"]
          })
        })]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.ScreenBottomContainer, {
        style: {
          borderTop: modalConfig.modalSize === "wide" ? "none" : undefined
        },
        children: /*#__PURE__*/jsxRuntime.jsx("div", {
          children: /*#__PURE__*/jsxRuntime.jsx("div", {
            style: {
              display: "flex",
              justifyContent: "flex-end"
            },
            children: mismatch ? /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
              type: "button",
              variant: "primary",
              style: {
                display: "flex",
                alignItems: "center",
                gap: formElements.spacing.sm,
                width: modalConfig.modalSize === "compact" ? "100%" : undefined
              },
              onClick: async () => {
                if (!activeWallet) {
                  throw new Error("No active wallet");
                }
                setSafeConnectError(false);
                setSwitchError(false);
                setSwitchingNetwork(true);
                try {
                  await switchChain(safeChainId);
                } catch (e) {
                  setSwitchError(true);
                } finally {
                  setSwitchingNetwork(false);
                }
              },
              children: [" ", switchingNetwork ? "Switching" : "Switch Network", switchingNetwork && /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
                size: "sm",
                color: "primaryButtonText"
              })]
            }) : /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
              variant: "accent",
              type: "submit",
              style: {
                display: "flex",
                alignItems: "center",
                gap: formElements.spacing.sm,
                width: modalConfig.modalSize === "compact" ? "100%" : undefined
              },
              children: [connectionStatus === "connecting" ? "Connecting" : "Connect to Safe", connectionStatus === "connecting" && /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
                size: "sm",
                color: "accentButtonText"
              })]
            })
          })
        })
      })]
    })
  });
};
const NetworkSelect = styled__default["default"].select`
  width: 100%;
  padding: ${formElements.spacing.sm};
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 6px;
  color: ${p => p.theme.colors.primaryText};
  background: none;
  font-size: ${formElements.fontSize.md};
  box-shadow: 0 0 0 1.5px ${p => p.theme.colors.secondaryButtonBg};
  appearance: none;

  &:focus {
    box-shadow: 0 0 0 2px ${p => p.theme.colors.accentText};
  }

  &:invalid {
    color: ${p => p.theme.colors.secondaryText};
  }
  &[data-error="true"] {
    box-shadow: 0 0 0 1.5px ${p => p.theme.colors.danger};
  }

  &[disabled] {
    opacity: 1;
    cursor: not-allowed;
  }
`;
const StyledChevronDownIcon = styled__default["default"](reactIcons.ChevronDownIcon)`
  color: ${p => p.theme.colors.secondaryText};
`;

const safeWallet = config => {
  const personalWallets = config?.personalWallets || coinbaseWallet.defaultWallets;
  return {
    id: wallets.SafeWallet.id,
    recommended: config?.recommended,
    meta: {
      ...wallets.SafeWallet.meta,
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IiMxMkZGODAiLz4KPG1hc2sgaWQ9Im1hc2swXzFfNDgiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIxMiIgeT0iMTIiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiI+CjxwYXRoIGQ9Ik00MCA2OEM1NS40NjQgNjggNjggNTUuNDY0IDY4IDQwQzY4IDI0LjUzNiA1NS40NjQgMTIgNDAgMTJDMjQuNTM2IDEyIDEyIDI0LjUzNiAxMiA0MEMxMiA1NS40NjQgMjQuNTM2IDY4IDQwIDY4WiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzFfNDgpIj4KPHBhdGggZD0iTTY4LjEzNzUgNy40MjY3Nkg5LjMzNzUyVjcxLjk5NDhINjguMTM3NVY3LjQyNjc2WiIgZmlsbD0iIzEyRkY4MCIvPgo8L2c+CjxwYXRoIGQ9Ik01NS42NjgzIDQwLjAwNDZINTEuODQyOUM1MC43MDA1IDQwLjAwNDYgNDkuNzc0OCA0MC45MzA5IDQ5Ljc3NDggNDIuMDcyN1Y0Ny42MjQ2QzQ5Ljc3NDggNDguNzY3IDQ4Ljg0ODYgNDkuNjkyNyA0Ny43MDY4IDQ5LjY5MjdIMzIuNDg3NkMzMS4zNDUyIDQ5LjY5MjcgMzAuNDE5NiA1MC42MTg5IDMwLjQxOTYgNTEuNzYwN1Y1NS41ODYxQzMwLjQxOTYgNTYuNzI4NSAzMS4zNDU4IDU3LjY1NDIgMzIuNDg3NiA1Ny42NTQySDQ4LjU4NzZDNDkuNzMgNTcuNjU0MiA1MC42NDM0IDU2LjcyNzkgNTAuNjQzNCA1NS41ODYxVjUyLjUxNzNDNTAuNjQzNCA1MS4zNzQ5IDUxLjU2OTYgNTAuNTY0IDUyLjcxMTUgNTAuNTY0SDU1LjY2ODNDNTYuODEwNyA1MC41NjQgNTcuNzM2NCA0OS42Mzc4IDU3LjczNjQgNDguNDk1OVY0Mi4wNDgxQzU3LjczNjQgNDAuOTA1NyA1Ni44MTAxIDQwLjAwNDEgNTUuNjY4MyA0MC4wMDQxVjQwLjAwNDZaIiBmaWxsPSIjMTIxMzEyIi8+CjxwYXRoIGQ9Ik0zMC40MjQgMzIuMzk5N0MzMC40MjQgMzEuMjU3MyAzMS4zNTAzIDMwLjMzMTYgMzIuNDkyMSAzMC4zMzE2SDQ3LjcwMTdDNDguODQ0MSAzMC4zMzE2IDQ5Ljc2OTggMjkuNDA1NCA0OS43Njk4IDI4LjI2MzZWMjQuNDM4MkM0OS43Njk4IDIzLjI5NTggNDguODQzNiAyMi4zNzAxIDQ3LjcwMTcgMjIuMzcwMUgzMS42MTA3QzMwLjQ2ODMgMjIuMzcwMSAyOS41NDI2IDIzLjI5NjQgMjkuNTQyNiAyNC40MzgyVjI3LjM4NTVDMjkuNTQyNiAyOC41Mjc5IDI4LjYxNjQgMjkuNDUzNiAyNy40NzQ1IDI5LjQ1MzZIMjQuNTMwNkMyMy4zODgyIDI5LjQ1MzYgMjIuNDYyNSAzMC4zNzk4IDIyLjQ2MjUgMzEuNTIxNlYzNy45NzYyQzIyLjQ2MjUgMzkuMTE4NiAyMy4zOTIxIDM5Ljk5NzggMjQuNTM0NSAzOS45OTc4SDI4LjM1OTlDMjkuNTAyMyAzOS45OTc4IDMwLjQyOCAzOS4wNzE2IDMwLjQyOCAzNy45Mjk3TDMwLjQyNDYgMzIuNDAwM0wzMC40MjQgMzIuMzk5N1oiIGZpbGw9IiMxMjEzMTIiLz4KPHBhdGggZD0iTTM4LjI5MjkgMzUuOTc1SDQxLjk2NzZDNDMuMTY0OSAzNS45NzUgNDQuMTM3MSAzNi45NDcxIDQ0LjEzNzEgMzguMTQ0NFY0MS44MTkxQzQ0LjEzNzEgNDMuMDE2NCA0My4xNjQ5IDQzLjk4ODYgNDEuOTY3NiA0My45ODg2SDM4LjI5MjlDMzcuMDk1NiA0My45ODg2IDM2LjEyMzUgNDMuMDE2NCAzNi4xMjM1IDQxLjgxOTFWMzguMTQ0NEMzNi4xMjM1IDM2Ljk0NzEgMzcuMDk1NiAzNS45NzUgMzguMjkyOSAzNS45NzVaIiBmaWxsPSIjMTIxMzEyIi8+Cjwvc3ZnPgo="
    },
    create: options => new wallets.SafeWallet({
      ...options
    }),
    connectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(SafeConnectUI, {
        ...props,
        personalWallets: personalWallets
      });
    },
    isInstalled() {
      return false;
    },
    personalWallets: personalWallets
  };
};
const SafeConnectUI = props => {
  const activeWallet = reactCore.useWallet();
  const [personalWalletConfig, setPersonalWalletConfig] = React.useState();
  const disconnect = reactCore.useDisconnect();
  if (personalWalletConfig) {
    const _props = {
      close: () => {
        setPersonalWalletConfig(undefined);
        props.close(false); // do not reset
      },

      goBack: () => {
        setPersonalWalletConfig(undefined);
      },
      isOpen: props.isOpen,
      open: props.open,
      theme: props.theme,
      walletConfig: personalWalletConfig,
      supportedWallets: props.personalWallets,
      selectionData: props.selectionData,
      setSelectionData: props.setSelectionData,
      modalSize: props.modalSize
    };
    if (personalWalletConfig.connectUI) {
      return /*#__PURE__*/jsxRuntime.jsx(personalWalletConfig.connectUI, {
        ..._props
      });
    }
    return /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.HeadlessConnectUI, {
      ..._props
    });
  }
  if (!activeWallet) {
    return /*#__PURE__*/jsxRuntime.jsx(SelectpersonalWallet, {
      personalWallets: props.personalWallets,
      onBack: props.goBack,
      safeWallet: props.walletConfig,
      selectWallet: setPersonalWalletConfig,
      renderBackButton: props.supportedWallets.length > 1
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(SelectAccount, {
    renderBackButton: props.supportedWallets.length > 1,
    onBack: () => {
      disconnect();
      props.goBack();
    },
    onConnect: props.close,
    safeWalletConfig: props.walletConfig
  });
};

exports.SafeConnectUI = SafeConnectUI;
exports.safeWallet = safeWallet;
