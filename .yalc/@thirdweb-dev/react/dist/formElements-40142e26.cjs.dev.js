'use strict';

var react = require('@emotion/react');
var styled = require('@emotion/styled');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactCore = require('@thirdweb-dev/react-core');
var reactIcons = require('@radix-ui/react-icons');
var wallets = require('@thirdweb-dev/wallets');
var detectBrowser = require('detect-browser');
var colors = require('@radix-ui/colors');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const darkColors = {
  base1: "hsl(230deg 11.63% 8.43%)",
  base2: "hsl(230deg 11.63% 12%)",
  base3: "hsl(230deg 11.63% 15%)",
  base4: "hsl(230deg 11.63% 17%)",
  primaryText: colors.mauveDark.mauve12,
  secondaryText: colors.mauveDark.mauve10,
  danger: colors.tomato.tomato9,
  success: colors.green.green7,
  overlay: "rgba(0, 0, 0, 0.7)",
  accentText: "#3385FF",
  accentBg: "hsl(216 100% 50%)",
  textOnAccent: colors.mauveDark.mauve12
};
const lightColors = {
  base1: colors.mauve.mauve1,
  base2: colors.mauve.mauve3,
  base3: colors.mauve.mauve5,
  base4: colors.mauve.mauve6,
  primaryText: colors.mauve.mauve12,
  secondaryText: colors.mauveDark.mauve9,
  accentText: "hsl(216 100% 45%)",
  success: colors.green.green9,
  danger: colors.tomato.tomato9,
  overlay: "rgba(0, 0, 0, 0.7)",
  accentBg: "hsl(216 100% 50%)",
  textOnAccent: colors.mauve.mauve1
};
function createThemeObj(colors) {
  return {
    type: "dark",
    colors: {
      primaryText: colors.primaryText,
      secondaryText: colors.secondaryText,
      accentText: colors.accentText,
      danger: colors.danger,
      success: colors.success,
      modalOverlayBg: colors.overlay,
      accentButtonBg: colors.accentBg,
      accentButtonText: colors.textOnAccent,
      primaryButtonBg: colors.primaryText,
      primaryButtonText: colors.base1,
      secondaryButtonBg: colors.base3,
      secondaryButtonText: colors.primaryText,
      secondaryButtonHoverBg: colors.base4,
      modalBg: colors.base1,
      dropdownBg: colors.base1,
      tooltipBg: colors.primaryText,
      tooltipText: colors.base1,
      inputAutofillBg: colors.base2,
      scrollbarBg: colors.base2,
      walletSelectorButtonHoverBg: colors.base2,
      separatorLine: colors.base3,
      secondaryIconColor: colors.secondaryText,
      secondaryIconHoverBg: colors.base3,
      secondaryIconHoverColor: colors.primaryText,
      borderColor: colors.base3,
      skeletonBg: colors.base3,
      selectedTextColor: colors.base1,
      selectedTextBg: colors.primaryText,
      connectedButtonBg: colors.base1,
      connectedButtonBgHover: colors.base2
    },
    fontFamily: "inherit"
  };
}
const darkThemeObj = /* @__PURE__ */createThemeObj(darkColors);
const lightThemeObj = /* @__PURE__ */createThemeObj(lightColors);
const fontSize = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px"
};
const spacing = {
  xxs: "6px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px"
};
const radius = {
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "20px",
  xxl: "32px"
};
const iconSize = {
  xs: "12",
  sm: "16",
  md: "24",
  lg: "32",
  xl: "48",
  xxl: "64"
};

// desktop first style media query
const media = {
  mobile: `@media (max-width: 640px)`
};

// TODO - move to theme
const shadow = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
};
function lightTheme(overrides) {
  return applyThemeOverrides(lightThemeObj, overrides);
}
function darkTheme(overrides) {
  return applyThemeOverrides(darkThemeObj, overrides);
}
function applyThemeOverrides(baseTheme, themeOverides) {
  const theme = {
    ...baseTheme
  };
  if (themeOverides.colors) {
    theme.colors = {
      ...theme.colors,
      ...themeOverides.colors
    };
  }
  if (themeOverides.fontFamily) {
    theme.fontFamily = themeOverides.fontFamily;
  }
  return theme;
}

const Spacer = _ref => {
  let {
    y
  } = _ref;
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    style: {
      height: spacing[y]
    }
  });
};

const Button = styled__default["default"].button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radius.md};
  padding: ${fontSize.sm} ${fontSize.sm};
  font-size: ${fontSize.md};
  font-weight: 500;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  line-height: 1;
  flex-shrink: 0;
  transition: border 200ms ease;

  ${p => p.fullWidth && `width: 100%;`};

  background: ${p => {
  switch (p.variant) {
    case "primary":
      return p.theme.colors.primaryButtonBg;
    case "accent":
      return p.theme.colors.accentButtonBg;
    case "secondary":
      return p.theme.colors.secondaryButtonBg;
    default:
      return "none";
  }
}};

  color: ${p => {
  switch (p.variant) {
    case "primary":
      return p.theme.colors.primaryButtonText;
    case "accent":
      return p.theme.colors.accentButtonText;
    case "secondary":
      return p.theme.colors.secondaryButtonText;
    case "outline":
      return p.theme.colors.secondaryButtonText;
    case "link":
      return p.theme.colors.accentText;
    default:
      return p.theme.colors.primaryButtonText;
  }
}};

  ${p => {
  if (p.variant === "outline") {
    return `
      border: 1.5px solid ${p.theme.colors.borderColor};
      &:hover {
        border-color: ${p.theme.colors.accentText};
      }
    `;
  }
}}

  ${p => {
  if (p.variant === "link") {
    return `
      padding: 0;
      &:hover {
        color: ${p.theme.colors.primaryText};
      }`;
  }
}}

  /* pressed effect */
  &:active {
    transform: translateY(1px);
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;
const IconButton = styled__default["default"].button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radius.sm};
  -webkit-tap-highlight-color: transparent;
  color: ${p => p.theme.colors.secondaryIconColor};
  padding: 2px;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${p => p.theme.colors.secondaryIconHoverBg};
    color: ${p => p.theme.colors.secondaryIconHoverColor};
  }
`;
const InputButton = styled__default["default"].button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radius.sm};
  padding: ${spacing.sm};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: ${p => p.theme.colors.secondaryText};
  &:hover {
    color: ${p => p.theme.colors.primaryText};
  }
  &[disabled] {
    cursor: not-allowed;
  }
`;

const ModalTitle = styled__default["default"].h2`
  margin: 0;
  font-weight: 600;
  font-size: ${fontSize.lg};
  color: ${p => p.theme.colors.primaryText};
  line-height: 1.3;
  text-align: left;
  ${media.mobile} {
    text-align: ${p => p.centerOnMobile ? "center" : "left"};
  }
`;
const ModalDescription = styled__default["default"].p`
  all: unset;
  display: block;
  font-size: ${p => p.sm ? fontSize.sm : fontSize.md};
  color: ${p => p.theme.colors.secondaryText};
  line-height: 1.5;
  ${media.mobile} {
    text-align: ${p => p.centerOnMobile ? "center" : "left"};
  }
`;
const BackButton = props => {
  return /*#__PURE__*/jsxRuntime.jsx(IconButton, {
    onClick: props.onClick,
    style: {
      transform: "translateX(-25%)",
      ...props.style
    },
    type: "button",
    children: /*#__PURE__*/jsxRuntime.jsx(reactIcons.ChevronLeftIcon, {
      style: {
        width: iconSize.md,
        height: iconSize.md
      }
    })
  });
};
const HelperLink = styled__default["default"].a`
  all: unset;
  cursor: pointer;
  color: ${p => p.theme.colors.accentText};
  font-size: ${p => p.md ? fontSize.md : fontSize.sm};
  text-decoration: none;
  display: block;
  line-height: 1.5;
  ${media.mobile} {
    text-align: center;
  }
  &:hover {
    color: ${p => p.theme.colors.primaryText};
    text-decoration: none;
  }
`;

const Img = props => {
  const storage = reactCore.useStorage();
  const getSrc = () => {
    try {
      return storage ? storage.resolveScheme(props.src) : props.src.replace("ipfs://", "https://ipfs.io/ipfs/");
    } catch {
      return props.src;
    }
  };
  return /*#__PURE__*/jsxRuntime.jsx("img", {
    width: props.width,
    height: props.height,
    src: getSrc(),
    alt: props.alt || "",
    loading: props.loading,
    decoding: "async",
    style: {
      height: props.height ? props.height + "px" : undefined,
      width: props.width ? props.width + "px" : undefined,
      userSelect: "none",
      ...props.style
    },
    draggable: false,
    className: props.className
  });
};

const floatUpAnimation = react.keyframes`
  from {
    opacity: 0;
    transform: translateY(20%) scale(0.8) ;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const floatDownAnimation = react.keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%) scale(0.8) ;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const fadeInAnimation = react.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ScreenBottomContainer = styled__default["default"].div`
  border-top: 1px solid ${p => p.theme.colors.separatorLine};
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  padding: ${spacing.lg};
`;
const noScrollBar = `
scrollbar-width: none;
&::-webkit-scrollbar {
  width: 0px;
  display: none;
}
`;
function ModalHeader(props) {
  const {
    onBack,
    title,
    imgSrc
  } = props;
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
    children: [onBack && /*#__PURE__*/jsxRuntime.jsx(BackButton, {
      onClick: onBack,
      style: {
        position: "absolute",
        left: 0,
        top: 0
      }
    }), /*#__PURE__*/jsxRuntime.jsxs(Container, {
      flex: "row",
      gap: "xs",
      center: "both",
      children: [imgSrc && /*#__PURE__*/jsxRuntime.jsx(Img, {
        src: imgSrc,
        width: iconSize.md,
        height: iconSize.md
      }), typeof title === "string" ? /*#__PURE__*/jsxRuntime.jsx(ModalTitle, {
        children: title
      }) : title]
    })]
  });
}
const Line = styled__default["default"].div`
  height: 1px;
  background: ${p => p.theme.colors.separatorLine};
`;
function Container(props) {
  const styles = {};
  if (props.relative) {
    styles.position = "relative";
  }
  if (props.fullHeight) {
    styles.height = "100%";
  }
  if (props.expand) {
    styles.flex = "1 1 0%";
  }
  if (props.flex) {
    styles.display = "flex";
    styles.flexDirection = props.flex;
    if (props.flex === "row") {
      styles.flexWrap = "wrap";
    }
    if (props.gap) {
      styles.gap = spacing[props.gap];
    }
    if (props.center) {
      if (props.center === "both") {
        styles.justifyContent = "center";
        styles.alignItems = "center";
      }
      if (props.center === "x" && props.flex === "row" || props.center === "y" && props.flex === "column") {
        styles.justifyContent = "center";
      }
      if (props.center === "x" && props.flex === "column" || props.center === "y" && props.flex === "row") {
        styles.alignItems = "center";
      }
    }
  }
  if (props.p) {
    styles.padding = spacing[props.p];
  }
  if (props.px) {
    styles.paddingLeft = spacing[props.px];
    styles.paddingRight = spacing[props.px];
  }
  if (props.debug) {
    styles.outline = "1px solid red";
    styles.outlineOffset = "-1px";
  }
  return /*#__PURE__*/jsxRuntime.jsx(Box, {
    "data-scrolly": props.scrollY,
    "data-animate": props.animate,
    color: props.color,
    style: {
      ...styles,
      ...props.style
    },
    children: props.children
  });
}
const Box = styled__default["default"].div`
  color: ${p => p.color ? p.theme.colors[p.color] : "inherit"};

  &[data-animate="fadein"] {
    opacity: 0;
    animation: ${fadeInAnimation} 350ms ease forwards;
  }

  &[data-animate="floatup"] {
    opacity: 0;
    animation: ${floatUpAnimation} 350ms ease forwards;
  }

  &[data-animate="floatdown"] {
    opacity: 0;
    animation: ${floatDownAnimation} 350ms ease forwards;
  }

  &[data-scrolly="true"] {
    overflow-y: auto;
    ${noScrollBar}
  }
`;

function detectEnv(userAgent) {
  return detectBrowser.detect(userAgent);
}

/**
 * @internal
 */
function isAndroid() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("android") : false;
}

/**
 * @internal
 */
function isIOS() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}

/**
 * @internal
 */
function detectOS() {
  const env = detectEnv();
  return env?.os ? env.os : undefined;
}

/**
 * @internal
 */
function isMobile() {
  const os = detectOS();
  return os ? isAndroid() || isIOS() : false;
}

const Text = styled__default["default"].span`
  font-size: ${p => fontSize[p.size || "md"]};
  color: ${p => p.theme.colors[p.color || "secondaryText"]};
  margin: 0;
  display: ${p => p.inline ? "inline" : "block"};
  font-weight: ${p => p.weight || 500};
  line-height: ${p => p.multiline ? 1.5 : 1};
  ${p => p.center ? `text-align: center;` : ""};
  text-wrap: ${p => p.balance ? "balance" : "inherit"};
`;
const Link = styled__default["default"].a`
  all: unset;
  cursor: pointer;
  color: ${p => p.theme.colors[p.color || "accentText"]};
  font-size: ${p => fontSize[p.size || "md"]};
  text-decoration: none;
  text-align: ${p => p.center ? "center" : "left"};
  display: ${p => p.inline ? "inline" : "block"};
  font-weight: ${p => p.weight || 500};
  line-height: 1;
  transition: color 0.2s ease;

  &:hover {
    color: ${p => p.theme.colors[p.hoverColor || "primaryText"]};
    text-decoration: none;
  }
`;

const reservedScreens = {
  main: "main",
  getStarted: "getStarted"
};
const modalMaxWidthCompact = "360px";
const modalMaxWidthWide = "730px";
const defaultModalTitle = "Connect";
const widemodalMaxHeight = "550px";
const compactmodalMaxHeight = "600px";
const defaultTheme = "dark";

const WalletModalOpen = /* @__PURE__ */React.createContext(false);
const SetWalletModalOpen = /* @__PURE__ */React.createContext(undefined);
const ModalConfigCtx = /* @__PURE__ */React.createContext({
  title: "",
  theme: "dark",
  data: undefined,
  modalSize: "wide"
});
const SetModalConfigCtx = /* @__PURE__ */React.createContext(() => {});
const WalletUIStatesProvider = props => {
  const [isWalletModalOpen, setIsWalletModalOpen] = React.useState(false);
  const _isMobile = isMobile();
  const [modalConfig, setModalConfig] = React.useState({
    title: props.title || defaultModalTitle,
    theme: props.theme || "dark",
    data: undefined,
    modalSize: (_isMobile ? "compact" : props.modalSize) || "wide",
    termsOfServiceUrl: props.termsOfServiceUrl,
    privacyPolicyUrl: props.privacyPolicyUrl,
    welcomeScreen: props.welcomeScreen,
    titleIconUrl: props.titleIconUrl
  });
  return /*#__PURE__*/jsxRuntime.jsx(WalletModalOpen.Provider, {
    value: isWalletModalOpen,
    children: /*#__PURE__*/jsxRuntime.jsx(SetWalletModalOpen.Provider, {
      value: setIsWalletModalOpen,
      children: /*#__PURE__*/jsxRuntime.jsx(ModalConfigCtx.Provider, {
        value: modalConfig,
        children: /*#__PURE__*/jsxRuntime.jsx(SetModalConfigCtx.Provider, {
          value: setModalConfig,
          children: props.children
        })
      })
    })
  });
};
const useIsWalletModalOpen = () => {
  return React.useContext(WalletModalOpen);
};
const useSetIsWalletModalOpen = () => {
  const context = React.useContext(SetWalletModalOpen);
  if (context === undefined) {
    throw new Error("useSetWalletModalOpen must be used within a ThirdwebProvider");
  }
  return context;
};

const Spinner = props => {
  const theme = react.useTheme();
  return /*#__PURE__*/jsxRuntime.jsx(Svg, {
    style: {
      width: iconSize[props.size],
      height: iconSize[props.size]
    },
    viewBox: "0 0 50 50",
    children: /*#__PURE__*/jsxRuntime.jsx(Circle, {
      cx: "25",
      cy: "25",
      r: "20",
      fill: "none",
      stroke: theme.colors[props.color],
      strokeWidth: "4"
    })
  });
};

// animations
const dashAnimation = react.keyframes`
 0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;
const rotateAnimation = react.keyframes`
100% {
    transform: rotate(360deg);
  }
`;

// styles
const Svg = styled__default["default"].svg`
  animation: ${rotateAnimation} 2s linear infinite;
  width: 1em;
  height: 1em;
`;
const Circle = styled__default["default"].circle`
  stroke-linecap: round;
  animation: ${dashAnimation} 1.5s ease-in-out infinite;
`;

const TWIcon = props => {
  return /*#__PURE__*/jsxRuntime.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size,
    viewBox: "0 0 27 16",
    fill: "none",
    children: [/*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M13.6891 0C13.8482 0.0317795 13.9983 0.0957213 14.1292 0.1875C14.2768 0.297724 14.39 0.444328 14.4563 0.611413C14.8718 1.60272 15.2885 2.59348 15.7064 3.5837L17.0986 6.89022C17.3418 7.46902 17.5832 8.0462 17.8298 8.62337C17.8823 8.74121 17.9094 8.86791 17.9094 8.99592C17.9094 9.12393 17.8823 9.25064 17.8298 9.36848C17.1243 11.0446 16.4182 12.7217 15.7115 14.4C15.654 14.5572 15.5516 14.696 15.4157 14.8009C15.2799 14.9057 15.1161 14.9724 14.9426 14.9935C14.7283 15.0315 14.5068 14.9982 14.3153 14.899C14.1238 14.7998 13.9741 14.6409 13.8912 14.4489C13.4939 13.5196 13.1052 12.587 12.713 11.6543C12.0463 10.075 11.3813 8.49456 10.718 6.91304C10.1255 5.50543 9.5336 4.09891 8.94223 2.69348C8.7453 2.22717 8.55522 1.75761 8.34973 1.29293C8.29321 1.16705 8.26644 1.03087 8.27132 0.894047C8.27619 0.757221 8.31259 0.623087 8.37794 0.501137C8.44329 0.379187 8.53599 0.272402 8.64948 0.188339C8.76297 0.104275 8.89448 0.0449885 9.03471 0.0146733C9.05183 0.0146733 9.06724 0.0048913 9.08437 0H13.6891Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M5.42129 0C5.47438 0.0146739 5.52575 0.0260873 5.57712 0.0423917C5.71022 0.0819151 5.83236 0.14928 5.93458 0.239555C6.0368 0.329829 6.11653 0.440727 6.16791 0.56413C6.62457 1.63913 7.07779 2.71413 7.52759 3.78913C7.97739 4.86413 8.43404 5.95109 8.89755 7.05L9.57053 8.64456C9.62093 8.75806 9.6469 8.88004 9.6469 9.00326C9.6469 9.12648 9.62093 9.24846 9.57053 9.36196C9.32052 9.9587 9.06936 10.5565 8.81706 11.1554L7.43512 14.431C7.36255 14.6012 7.23853 14.7471 7.07879 14.8501C6.91904 14.9532 6.73075 15.0087 6.5378 15.0098C6.33426 15.0125 6.13478 14.9554 5.96654 14.8463C5.7983 14.7372 5.6695 14.5814 5.59767 14.4C5.16956 13.3712 4.74145 12.344 4.30307 11.3168L2.54781 7.14946L0.763448 2.91033C0.539118 2.37554 0.314789 1.83913 0.0784718 1.30435C-0.0212674 1.08161 -0.026107 0.830668 0.0649731 0.604591C0.156053 0.378515 0.335913 0.195028 0.566519 0.0929347C0.650596 0.0604572 0.73701 0.0337587 0.825096 0.0130438L5.42129 0Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M26.0098 9.14348C25.8865 9.54782 25.7067 9.92935 25.5355 10.3239C25.0708 11.4315 24.6033 12.5397 24.133 13.6484C24.0251 13.9109 23.9155 14.1554 23.811 14.4114C23.7364 14.591 23.605 14.744 23.4351 14.8495C23.2651 14.9549 23.065 15.0075 22.8623 15C22.6689 14.995 22.4813 14.9353 22.3237 14.8284C22.166 14.7216 22.0453 14.5724 21.977 14.4C21.2989 12.7848 20.6196 11.1696 19.9392 9.55435C19.3524 8.16522 18.7633 6.77283 18.172 5.37717C17.6011 4.01087 17.0303 2.64456 16.4595 1.27826C16.4042 1.15338 16.3784 1.01844 16.3839 0.882999C16.3895 0.747561 16.4262 0.614939 16.4916 0.494528C16.5569 0.374117 16.6493 0.268861 16.7621 0.186219C16.875 0.103577 17.0055 0.0455688 17.1445 0.0163041L17.201 0H21.8023L21.8451 0.0130438C22.0073 0.0455066 22.158 0.116718 22.2833 0.219974C22.4085 0.32323 22.504 0.455132 22.5609 0.60326C22.8281 1.23913 23.0964 1.87554 23.3658 2.5125C24.0679 4.18206 24.77 5.85163 25.4721 7.52119C25.657 7.96141 25.8625 8.39348 26.0132 8.84511L26.0098 9.14348Z",
      fill: "currentColor"
    })]
  });
};

const TextDivider = styled__default["default"].div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${fontSize.sm};
  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid ${p => p.theme.colors.separatorLine};
  }

  span {
    margin: 0 1rem;
  }
`;

function TOS(props) {
  const {
    termsOfServiceUrl,
    privacyPolicyUrl
  } = props;
  if (!termsOfServiceUrl && !privacyPolicyUrl) {
    return null;
  }
  const bothGiven = termsOfServiceUrl && privacyPolicyUrl;
  return /*#__PURE__*/jsxRuntime.jsx(Container, {
    flex: "row",
    center: "x",
    children: /*#__PURE__*/jsxRuntime.jsxs(Text, {
      size: "xs",
      multiline: true,
      balance: true,
      inline: true,
      center: true,
      style: {
        maxWidth: "250px"
      },
      children: ["By connecting, you agree to the", " ", termsOfServiceUrl && /*#__PURE__*/jsxRuntime.jsxs(Link, {
        inline: true,
        size: "xs",
        href: termsOfServiceUrl,
        target: "_blank",
        style: {
          whiteSpace: "nowrap"
        },
        children: [" ", "Terms of Service", " "]
      }), bothGiven && "& ", privacyPolicyUrl && /*#__PURE__*/jsxRuntime.jsx(Link, {
        inline: true,
        size: "xs",
        href: privacyPolicyUrl,
        target: "_blank",
        children: "Privacy Policy"
      })]
    })
  });
}

const WalletSelector = props => {
  const modalConfig = React.useContext(ModalConfigCtx);
  const isCompact = modalConfig.modalSize === "compact";
  const {
    termsOfServiceUrl,
    privacyPolicyUrl
  } = modalConfig;
  const [isWalletGroupExpanded, setIsWalletGroupExpanded] = React.useState(false);
  const disconnect = reactCore.useDisconnect();
  const connectionStatus = reactCore.useConnectionStatus();
  const localWalletConfig = props.walletConfigs.find(w => w.id === wallets.walletIds.localWallet);
  const nonLocalWalletConfigs = props.walletConfigs.filter(w => w.id !== wallets.walletIds.localWallet);
  const socialWallets = nonLocalWalletConfigs.filter(w => w.category === "socialLogin");
  const eoaWallets = sortWalletConfigs(nonLocalWalletConfigs.filter(w => w.category !== "socialLogin"));
  const showNewToWallets = isCompact && (socialWallets.length === 0 || isWalletGroupExpanded);

  // groups UI is showing a social login + grouping all eoa wallets together in a group
  // do this if there is social login and more than 2 eoa wallets
  const showGroupsUI = isCompact && socialWallets.length >= 1 && eoaWallets.length >= 2;
  const showTOS = isCompact && (termsOfServiceUrl || privacyPolicyUrl);
  const showFooter = Boolean(!showGroupsUI && localWalletConfig || showNewToWallets);
  const continueAsGuest = localWalletConfig && /*#__PURE__*/jsxRuntime.jsx(Button, {
    fullWidth: true,
    variant: isCompact ? "outline" : "link",
    style: !isCompact ? {
      textAlign: "left",
      justifyContent: "flex-start"
    } : undefined,
    onClick: () => {
      props.selectWallet(localWalletConfig);
    },
    "data-test": "continue-as-guest-button",
    children: "Continue as Guest"
  });
  const twTitle = /*#__PURE__*/jsxRuntime.jsxs(Container, {
    gap: "xxs",
    center: "y",
    flex: "row",
    children: [modalConfig.titleIconUrl === undefined ? /*#__PURE__*/jsxRuntime.jsx(Link, {
      color: "primaryText",
      hoverColor: "accentText",
      target: "_blank",
      href: "https://thirdweb.com/dashboard/wallets/connect",
      style: {
        display: "flex",
        alignItems: "center"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(TWIcon, {
        size: iconSize.md
      })
    }) : modalConfig.titleIconUrl === "" ? null : /*#__PURE__*/jsxRuntime.jsx(Img, {
      src: modalConfig.titleIconUrl,
      width: iconSize.md,
      height: iconSize.md
    }), /*#__PURE__*/jsxRuntime.jsxs(ModalTitle, {
      children: [" ", props.title, " "]
    })]
  });
  const handleSelect = async wallet => {
    if (connectionStatus !== "disconnected") {
      await disconnect();
    }
    props.selectWallet(wallet);
  };
  const showSeperatorLine = showNewToWallets && !continueAsGuest && showTOS;
  return /*#__PURE__*/jsxRuntime.jsxs(Container, {
    scrollY: true,
    flex: "column",
    animate: "fadein",
    fullHeight: true,
    children: [/*#__PURE__*/jsxRuntime.jsx(Container, {
      p: "lg",
      children: isWalletGroupExpanded ? /*#__PURE__*/jsxRuntime.jsx(ModalHeader, {
        title: twTitle,
        onBack: () => {
          setIsWalletGroupExpanded(false);
        }
      }) : twTitle
    }), /*#__PURE__*/jsxRuntime.jsx(Container, {
      expand: true,
      scrollY: true,
      px: nonLocalWalletConfigs.length === 1 ? "lg" : "md",
      style: {
        paddingTop: "2px"
      },
      children: showGroupsUI ? /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: isWalletGroupExpanded ? /*#__PURE__*/jsxRuntime.jsx(WalletSelection, {
          walletConfigs: eoaWallets,
          selectWallet: handleSelect
        }) : /*#__PURE__*/jsxRuntime.jsxs(Container, {
          px: "xs",
          children: [/*#__PURE__*/jsxRuntime.jsx(WalletSelection, {
            walletConfigs: socialWallets,
            selectWallet: handleSelect
          }), /*#__PURE__*/jsxRuntime.jsx(TextDivider, {
            children: /*#__PURE__*/jsxRuntime.jsx("span", {
              children: " OR "
            })
          }), /*#__PURE__*/jsxRuntime.jsx(Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsxRuntime.jsxs(Button, {
            fullWidth: true,
            variant: "outline",
            style: {
              display: "flex",
              justifyContent: "center",
              gap: spacing.sm,
              padding: spacing.md
            },
            onClick: () => {
              setIsWalletGroupExpanded(true);
            },
            children: [/*#__PURE__*/jsxRuntime.jsx(Container, {
              flex: "row",
              gap: "xxs",
              children: eoaWallets.slice(0, 2).map(w => /*#__PURE__*/jsxRuntime.jsx(Img, {
                width: iconSize.sm,
                height: iconSize.sm,
                src: w.meta.iconURL
              }, w.id))
            }), "Connect a wallet"]
          }), continueAsGuest ? /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
            children: [/*#__PURE__*/jsxRuntime.jsx(Spacer, {
              y: "md"
            }), continueAsGuest, /*#__PURE__*/jsxRuntime.jsx(Spacer, {
              y: "xl"
            })]
          }) : /*#__PURE__*/jsxRuntime.jsx(Spacer, {
            y: "xl"
          })]
        })
      }) : /*#__PURE__*/jsxRuntime.jsx(WalletSelection, {
        walletConfigs: nonLocalWalletConfigs,
        selectWallet: handleSelect
      })
    }), showFooter && /*#__PURE__*/jsxRuntime.jsxs(ScreenBottomContainer, {
      children: [showNewToWallets && /*#__PURE__*/jsxRuntime.jsxs(Container, {
        flex: "row",
        style: {
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(Text, {
          color: "secondaryText",
          size: "sm",
          weight: 500,
          children: "New to wallets?"
        }), /*#__PURE__*/jsxRuntime.jsx(Link, {
          weight: 500,
          size: "sm",
          target: "_blank",
          href: "https://blog.thirdweb.com/web3-wallet/",
          children: "Get started"
        })]
      }), !showGroupsUI && continueAsGuest]
    }), showTOS && !isWalletGroupExpanded && /*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [showSeperatorLine && /*#__PURE__*/jsxRuntime.jsx(Line, {}), /*#__PURE__*/jsxRuntime.jsx(Container, {
        p: "md",
        style: !showSeperatorLine ? {
          paddingTop: 0
        } : undefined,
        children: isCompact && /*#__PURE__*/jsxRuntime.jsx(TOS, {
          termsOfServiceUrl: termsOfServiceUrl,
          privacyPolicyUrl: privacyPolicyUrl
        })
      })]
    })]
  });
};
const WalletSelection = props => {
  const modalConfig = React.useContext(ModalConfigCtx);
  const setModalConfig = React.useContext(SetModalConfigCtx);
  const walletConfigs = sortWalletConfigs(props.walletConfigs);
  return /*#__PURE__*/jsxRuntime.jsx(WalletList, {
    children: walletConfigs.map(walletConfig => {
      return /*#__PURE__*/jsxRuntime.jsx("li", {
        "data-full-width": !!walletConfig.selectUI,
        children: walletConfig.selectUI ? /*#__PURE__*/jsxRuntime.jsx(walletConfig.selectUI, {
          modalSize: modalConfig.modalSize,
          theme: typeof modalConfig.theme === "string" ? modalConfig.theme : modalConfig.theme.type,
          supportedWallets: props.walletConfigs,
          onSelect: data => {
            props.selectWallet(walletConfig);
            setModalConfig(config => ({
              ...config,
              data
            }));
          },
          walletConfig: walletConfig
        }) : /*#__PURE__*/jsxRuntime.jsx(WalletEntryButton, {
          walletConfig: walletConfig,
          selectWallet: () => {
            props.selectWallet(walletConfig);
          }
        })
      }, walletConfig.id);
    })
  });
};
function WalletEntryButton(props) {
  const {
    walletConfig,
    selectWallet
  } = props;
  const isRecommended = walletConfig.recommended;
  return /*#__PURE__*/jsxRuntime.jsxs(WalletButton, {
    type: "button",
    onClick: () => {
      selectWallet();
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(Img, {
      src: walletConfig.meta.iconURL,
      width: iconSize.xl,
      height: iconSize.xl,
      loading: "eager"
    }), /*#__PURE__*/jsxRuntime.jsxs(Container, {
      flex: "column",
      gap: "xxs",
      expand: true,
      children: [/*#__PURE__*/jsxRuntime.jsx(Text, {
        color: "primaryText",
        weight: 600,
        children: walletConfig.meta.name
      }), isRecommended && /*#__PURE__*/jsxRuntime.jsx(Text, {
        size: "sm",
        children: "Recommended"
      }), !isRecommended && walletConfig.isInstalled && walletConfig.isInstalled() && /*#__PURE__*/jsxRuntime.jsx(Text, {
        size: "sm",
        children: "Installed"
      })]
    })]
  });
}
const WalletList = styled__default["default"].ul`
  all: unset;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
  box-sizing: border-box;
  overflow-y: auto;
  flex: 1;
  ${noScrollBar}

  /* to show the box-shadow of inputs that overflows  */
  padding: 2px;
  margin: -2px;
  padding-bottom: 0;
  margin-bottom: 0;
  padding-bottom: ${spacing.xl};
`;
const WalletButton = styled__default["default"].button`
  all: unset;
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  color: ${p => p.theme.colors.secondaryText};
  position: relative;
  border-radius: ${radius.md};
  padding: ${spacing.xs} ${spacing.xs};

  &:hover {
    background-color: ${p => p.theme.colors.walletSelectorButtonHoverBg};
  }

  transition:
    background-color 200ms ease,
    transform 200ms ease;

  &:hover {
    transform: scale(1.01);
  }
`;
function sortWalletConfigs(walletConfigs) {
  return walletConfigs
  // show the installed wallets first
  .sort((a, b) => {
    const aInstalled = a.isInstalled ? a.isInstalled() : false;
    const bInstalled = b.isInstalled ? b.isInstalled() : false;
    if (aInstalled && !bInstalled) {
      return -1;
    }
    if (!aInstalled && bInstalled) {
      return 1;
    }
    return 0;
  })
  // show the reccomended wallets even before that
  .sort((a, b) => {
    if (a.recommended && !b.recommended) {
      return -1;
    }
    if (!a.recommended && b.recommended) {
      return 1;
    }
    return 0;
  })
  // show the wallets with selectUI first before others
  .sort((a, b) => {
    if (a.selectUI && !b.selectUI) {
      return -1;
    }
    if (!a.selectUI && b.selectUI) {
      return 1;
    }
    return 0;
  });
}

const Label = styled__default["default"].label`
  font-size: ${fontSize.sm};
  color: ${p => p.theme.colors[p.color || "primaryText"]};
  display: block;
`;
const Input = styled__default["default"].input`
  font-size: ${fontSize.md};
  display: block;
  padding: ${p => p.sm ? spacing.sm : fontSize.sm};
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 6px;
  color: ${p => p.theme.colors.primaryText};
  -webkit-appearance: none;
  appearance: none;
  background: transparent;

  &::placeholder {
    color: ${p => p.theme.colors.secondaryText};
  }

  box-shadow: 0 0 0 1.5px
    ${p => {
  switch (p.variant) {
    case "outline":
      return p.theme.colors.borderColor;
    default:
      return "transparent";
  }
}};

  /* when browser auto-fills the input  */
  &:-webkit-autofill {
    -webkit-text-fill-color: ${p => p.theme.colors.primaryText};
    -webkit-box-shadow: 0 0 0px 1000px ${p => p.theme.colors.inputAutofillBg}
      inset !important;
    box-shadow: 0 0 0px 1000px ${p => p.theme.colors.inputAutofillBg} inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow:
      0 0 0px 1000px ${p => p.theme.colors.inputAutofillBg} inset,
      0 0 0 2px ${p => p.theme.colors.accentText} !important;
    box-shadow:
      0 0 0px 1000px ${p => p.theme.colors.inputAutofillBg} inset,
      0 0 0 2px ${p => p.theme.colors.accentText} !important;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${p => p.theme.colors.accentText};
  }

  /* show overflow ellipsis for long text - but not if it's a type="password"  */
  &:not([type="password"]) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &[data-error="true"] {
    box-shadow: 0 0 0 2px ${p => p.theme.colors.danger} !important;
  }

  &[disabled] {
    cursor: not-allowed;
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    appearance: none;
    -moz-appearance: textfield;
  }
`;

// for rendering a input and a button side by side
const InputContainer = styled__default["default"].div`
  display: flex;
  border-radius: ${radius.sm};
  box-shadow: 0 0 0px 1.5px ${p => p.theme.colors.borderColor};

  /* show focus ring on container instead of input  */
  &:focus-within {
    box-shadow: 0 0 0px 2px ${p => p.theme.colors.accentText};
  }

  input:focus {
    box-shadow: none;
  }

  /* show error ring on container instead of input  */
  &[data-error="true"] {
    box-shadow: 0 0 0px 2px ${p => p.theme.colors.danger};
  }
`;

exports.Button = Button;
exports.Container = Container;
exports.HelperLink = HelperLink;
exports.IconButton = IconButton;
exports.Img = Img;
exports.Input = Input;
exports.InputButton = InputButton;
exports.InputContainer = InputContainer;
exports.Label = Label;
exports.Line = Line;
exports.Link = Link;
exports.ModalConfigCtx = ModalConfigCtx;
exports.ModalDescription = ModalDescription;
exports.ModalHeader = ModalHeader;
exports.ModalTitle = ModalTitle;
exports.ScreenBottomContainer = ScreenBottomContainer;
exports.SetModalConfigCtx = SetModalConfigCtx;
exports.Spacer = Spacer;
exports.Spinner = Spinner;
exports.TOS = TOS;
exports.Text = Text;
exports.TextDivider = TextDivider;
exports.WalletEntryButton = WalletEntryButton;
exports.WalletSelection = WalletSelection;
exports.WalletSelector = WalletSelector;
exports.WalletUIStatesProvider = WalletUIStatesProvider;
exports.compactmodalMaxHeight = compactmodalMaxHeight;
exports.darkTheme = darkTheme;
exports.darkThemeObj = darkThemeObj;
exports.defaultModalTitle = defaultModalTitle;
exports.defaultTheme = defaultTheme;
exports.fadeInAnimation = fadeInAnimation;
exports.fontSize = fontSize;
exports.iconSize = iconSize;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;
exports.isMobile = isMobile;
exports.lightTheme = lightTheme;
exports.lightThemeObj = lightThemeObj;
exports.media = media;
exports.modalMaxWidthCompact = modalMaxWidthCompact;
exports.modalMaxWidthWide = modalMaxWidthWide;
exports.noScrollBar = noScrollBar;
exports.radius = radius;
exports.reservedScreens = reservedScreens;
exports.shadow = shadow;
exports.spacing = spacing;
exports.useIsWalletModalOpen = useIsWalletModalOpen;
exports.useSetIsWalletModalOpen = useSetIsWalletModalOpen;
exports.widemodalMaxHeight = widemodalMaxHeight;
