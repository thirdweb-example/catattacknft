'use strict';

var styled = require('@emotion/styled');
var reactIcons = require('@radix-ui/react-icons');
var formElements = require('./formElements-40142e26.cjs.dev.js');
var reactCore = require('@thirdweb-dev/react-core');
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');
var reactQuery = require('@tanstack/react-query');
var react = require('@emotion/react');
var RXPopover = require('@radix-ui/react-popover');
var copy = require('copy-to-clipboard');
var Tooltip = require('./Tooltip-34586138.cjs.dev.js');
var ethers = require('ethers');
var Tabs = require('@radix-ui/react-tabs');
var Fuse = require('fuse.js');
var DropdownMenu = require('@radix-ui/react-dropdown-menu');
var chains = require('@thirdweb-dev/chains');
var wallets = require('@thirdweb-dev/wallets');
var coinbaseWallet = require('./formFields-823274b5.cjs.dev.js');
var sdk = require('@thirdweb-dev/sdk');
var evm = require('@thirdweb-dev/sdk/evm');
var invariant = require('tiny-invariant');
var Dialog = require('@radix-ui/react-dialog');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var styled__default = /*#__PURE__*/_interopDefault(styled);
var React__default = /*#__PURE__*/_interopDefault(React);
var RXPopover__namespace = /*#__PURE__*/_interopNamespace(RXPopover);
var copy__default = /*#__PURE__*/_interopDefault(copy);
var Tabs__namespace = /*#__PURE__*/_interopNamespace(Tabs);
var Fuse__default = /*#__PURE__*/_interopDefault(Fuse);
var DropdownMenu__namespace = /*#__PURE__*/_interopNamespace(DropdownMenu);
var invariant__default = /*#__PURE__*/_interopDefault(invariant);
var Dialog__namespace = /*#__PURE__*/_interopNamespace(Dialog);

const wrappedEthIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzYyN0VFQSIvPjxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDR2OC44N2w3LjQ5NyAzLjM1eiIvPjxwYXRoIGQ9Ik0xNi40OTggNEw5IDE2LjIybDcuNDk4LTMuMzV6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDIxLjk2OHY2LjAyN0wyNCAxNy42MTZ6Ii8+PHBhdGggZD0iTTE2LjQ5OCAyNy45OTV2LTYuMDI4TDkgMTcuNjE2eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Ik0xNi40OTggMjAuNTczbDcuNDk3LTQuMzUzLTcuNDk3LTMuMzQ4eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjYwMiIgZD0iTTkgMTYuMjJsNy40OTggNC4zNTN2LTcuNzAxeiIvPjwvZz48L2c+PC9zdmc+";
const tetherUsdIcon = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzkuNDMgMjk1LjI3Ij48dGl0bGU+dGV0aGVyLXVzZHQtbG9nbzwvdGl0bGU+PHBhdGggZD0iTTYyLjE1LDEuNDVsLTYxLjg5LDEzMGEyLjUyLDIuNTIsMCwwLDAsLjU0LDIuOTRMMTY3Ljk1LDI5NC41NmEyLjU1LDIuNTUsMCwwLDAsMy41MywwTDMzOC42MywxMzQuNGEyLjUyLDIuNTIsMCwwLDAsLjU0LTIuOTRsLTYxLjg5LTEzMEEyLjUsMi41LDAsMCwwLDI3NSwwSDY0LjQ1YTIuNSwyLjUsMCwwLDAtMi4zLDEuNDVoMFoiIHN0eWxlPSJmaWxsOiM1MGFmOTU7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48cGF0aCBkPSJNMTkxLjE5LDE0NC44djBjLTEuMi4wOS03LjQsMC40Ni0yMS4yMywwLjQ2LTExLDAtMTguODEtLjMzLTIxLjU1LTAuNDZ2MGMtNDIuNTEtMS44Ny03NC4yNC05LjI3LTc0LjI0LTE4LjEzczMxLjczLTE2LjI1LDc0LjI0LTE4LjE1djI4LjkxYzIuNzgsMC4yLDEwLjc0LjY3LDIxLjc0LDAuNjcsMTMuMiwwLDE5LjgxLS41NSwyMS0wLjY2di0yOC45YzQyLjQyLDEuODksNzQuMDgsOS4yOSw3NC4wOCwxOC4xM3MtMzEuNjUsMTYuMjQtNzQuMDgsMTguMTJoMFptMC0zOS4yNVY3OS42OGg1OS4yVjQwLjIzSDg5LjIxVjc5LjY4SDE0OC40djI1Ljg2Yy00OC4xMSwyLjIxLTg0LjI5LDExLjc0LTg0LjI5LDIzLjE2czM2LjE4LDIwLjk0LDg0LjI5LDIzLjE2djgyLjloNDIuNzhWMTUxLjgzYzQ4LTIuMjEsODQuMTItMTEuNzMsODQuMTItMjMuMTRzLTM2LjA5LTIwLjkzLTg0LjEyLTIzLjE1aDBabTAsMGgwWiIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLXJ1bGU6ZXZlbm9kZCIvPjwvc3ZnPg==";
const usdcIcon = "data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9Ijg2OTc3Njg0LTEyZGItNDg1MC04ZjMwLTIzM2E3YzI2N2QxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAwMCAyMDAwIj4KICA8cGF0aCBkPSJNMTAwMCAyMDAwYzU1NC4xNyAwIDEwMDAtNDQ1LjgzIDEwMDAtMTAwMFMxNTU0LjE3IDAgMTAwMCAwIDAgNDQ1LjgzIDAgMTAwMHM0NDUuODMgMTAwMCAxMDAwIDEwMDB6IiBmaWxsPSIjMjc3NWNhIi8+CiAgPHBhdGggZD0iTTEyNzUgMTE1OC4zM2MwLTE0NS44My04Ny41LTE5NS44My0yNjIuNS0yMTYuNjYtMTI1LTE2LjY3LTE1MC01MC0xNTAtMTA4LjM0czQxLjY3LTk1LjgzIDEyNS05NS44M2M3NSAwIDExNi42NyAyNSAxMzcuNSA4Ny41IDQuMTcgMTIuNSAxNi42NyAyMC44MyAyOS4xNyAyMC44M2g2Ni42NmMxNi42NyAwIDI5LjE3LTEyLjUgMjkuMTctMjkuMTZ2LTQuMTdjLTE2LjY3LTkxLjY3LTkxLjY3LTE2Mi41LTE4Ny41LTE3MC44M3YtMTAwYzAtMTYuNjctMTIuNS0yOS4xNy0zMy4zMy0zMy4zNGgtNjIuNWMtMTYuNjcgMC0yOS4xNyAxMi41LTMzLjM0IDMzLjM0djk1LjgzYy0xMjUgMTYuNjctMjA0LjE2IDEwMC0yMDQuMTYgMjA0LjE3IDAgMTM3LjUgODMuMzMgMTkxLjY2IDI1OC4zMyAyMTIuNSAxMTYuNjcgMjAuODMgMTU0LjE3IDQ1LjgzIDE1NC4xNyAxMTIuNXMtNTguMzQgMTEyLjUtMTM3LjUgMTEyLjVjLTEwOC4zNCAwLTE0NS44NC00NS44NC0xNTguMzQtMTA4LjM0LTQuMTYtMTYuNjYtMTYuNjYtMjUtMjkuMTYtMjVoLTcwLjg0Yy0xNi42NiAwLTI5LjE2IDEyLjUtMjkuMTYgMjkuMTd2NC4xN2MxNi42NiAxMDQuMTYgODMuMzMgMTc5LjE2IDIyMC44MyAyMDB2MTAwYzAgMTYuNjYgMTIuNSAyOS4xNiAzMy4zMyAzMy4zM2g2Mi41YzE2LjY3IDAgMjkuMTctMTIuNSAzMy4zNC0zMy4zM3YtMTAwYzEyNS0yMC44NCAyMDguMzMtMTA4LjM0IDIwOC4zMy0yMjAuODR6IiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0iTTc4Ny41IDE1OTUuODNjLTMyNS0xMTYuNjYtNDkxLjY3LTQ3OS4xNi0zNzAuODMtODAwIDYyLjUtMTc1IDIwMC0zMDguMzMgMzcwLjgzLTM3MC44MyAxNi42Ny04LjMzIDI1LTIwLjgzIDI1LTQxLjY3VjMyNWMwLTE2LjY3LTguMzMtMjkuMTctMjUtMzMuMzMtNC4xNyAwLTEyLjUgMC0xNi42NyA0LjE2LTM5NS44MyAxMjUtNjEyLjUgNTQ1Ljg0LTQ4Ny41IDk0MS42NyA3NSAyMzMuMzMgMjU0LjE3IDQxMi41IDQ4Ny41IDQ4Ny41IDE2LjY3IDguMzMgMzMuMzQgMCAzNy41LTE2LjY3IDQuMTctNC4xNiA0LjE3LTguMzMgNC4xNy0xNi42NnYtNTguMzRjMC0xMi41LTEyLjUtMjkuMTYtMjUtMzcuNXpNMTIyOS4xNyAyOTUuODNjLTE2LjY3LTguMzMtMzMuMzQgMC0zNy41IDE2LjY3LTQuMTcgNC4xNy00LjE3IDguMzMtNC4xNyAxNi42N3Y1OC4zM2MwIDE2LjY3IDEyLjUgMzMuMzMgMjUgNDEuNjcgMzI1IDExNi42NiA0OTEuNjcgNDc5LjE2IDM3MC44MyA4MDAtNjIuNSAxNzUtMjAwIDMwOC4zMy0zNzAuODMgMzcwLjgzLTE2LjY3IDguMzMtMjUgMjAuODMtMjUgNDEuNjdWMTcwMGMwIDE2LjY3IDguMzMgMjkuMTcgMjUgMzMuMzMgNC4xNyAwIDEyLjUgMCAxNi42Ny00LjE2IDM5NS44My0xMjUgNjEyLjUtNTQ1Ljg0IDQ4Ny41LTk0MS42Ny03NS0yMzcuNS0yNTguMzQtNDE2LjY3LTQ4Ny41LTQ5MS42N3oiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==";
const wrappedBtcIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkuMjYgMTA5LjI2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzVhNTU2NDt9LmNscy0ye2ZpbGw6I2YwOTI0Mjt9LmNscy0ze2ZpbGw6IzI4MjEzODt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPndyYXBwZWQtYml0Y29pbi13YnRjPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxnIGlkPSJQYWdlLTEiPjxnIGlkPSJ3YnRjX2NvbG91ciIgZGF0YS1uYW1lPSJ3YnRjIGNvbG91ciI+PHBhdGggaWQ9IlNoYXBlIiBjbGFzcz0iY2xzLTEiIGQ9Ik04OS4wOSwyMi45M2wtMywzYTQyLjQ3LDQyLjQ3LDAsMCwxLDAsNTcuMzJsMywzYTQ2Ljc2LDQ2Ljc2LDAsMCwwLDAtNjMuMzlaIi8+PHBhdGggaWQ9IlNoYXBlLTIiIGRhdGEtbmFtZT0iU2hhcGUiIGNsYXNzPSJjbHMtMSIgZD0iTTI2LDIzLjE5YTQyLjQ3LDQyLjQ3LDAsMCwxLDU3LjMyLDBsMy0zYTQ2Ljc2LDQ2Ljc2LDAsMCwwLTYzLjM5LDBaIi8+PHBhdGggaWQ9IlNoYXBlLTMiIGRhdGEtbmFtZT0iU2hhcGUiIGNsYXNzPSJjbHMtMSIgZD0iTTIzLjE5LDgzLjI4YTQyLjQ3LDQyLjQ3LDAsMCwxLDAtNTcuMjlsLTMtM2E0Ni43Niw0Ni43NiwwLDAsMCwwLDYzLjM5WiIvPjxwYXRoIGlkPSJTaGFwZS00IiBkYXRhLW5hbWU9IlNoYXBlIiBjbGFzcz0iY2xzLTEiIGQ9Ik04My4yOCw4Ni4wNWE0Mi40Nyw0Mi40NywwLDAsMS01Ny4zMiwwbC0zLDNhNDYuNzYsNDYuNzYsMCwwLDAsNjMuMzksMFoiLz48cGF0aCBpZD0iU2hhcGUtNSIgZGF0YS1uYW1lPSJTaGFwZSIgY2xhc3M9ImNscy0yIiBkPSJNNzMuNTcsNDQuNjJjLS42LTYuMjYtNi04LjM2LTEyLjgzLTlWMjdINTUuNDZ2OC40NmMtMS4zOSwwLTIuODEsMC00LjIyLDBWMjdINDZ2OC42OEgzNS4yOXY1LjY1czMuOS0uMDcsMy44NCwwYTIuNzMsMi43MywwLDAsMSwzLDIuMzJWNjcuNDFhMS44NSwxLjg1LDAsMCwxLS42NCwxLjI5LDEuODMsMS44MywwLDAsMS0xLjM2LjQ2Yy4wNy4wNi0zLjg0LDAtMy44NCwwbC0xLDYuMzFINDUuOXY4LjgyaDUuMjhWNzUuNkg1NS40djguNjVoNS4yOVY3NS41M2M4LjkyLS41NCwxNS4xNC0yLjc0LDE1LjkyLTExLjA5LjYzLTYuNzItMi41My05LjcyLTcuNTgtMTAuOTNDNzIuMSw1Miw3NCw0OS4yLDczLjU3LDQ0LjYyWk02Ni4xNyw2My40YzAsNi41Ni0xMS4yNCw1LjgxLTE0LjgyLDUuODFWNTcuNTdDNTQuOTMsNTcuNTgsNjYuMTcsNTYuNTUsNjYuMTcsNjMuNFpNNjMuNzIsNDdjMCw2LTkuMzgsNS4yNy0xMi4zNiw1LjI3VjQxLjY5QzU0LjM0LDQxLjY5LDYzLjcyLDQwLjc1LDYzLjcyLDQ3WiIvPjxwYXRoIGlkPSJTaGFwZS02IiBkYXRhLW5hbWU9IlNoYXBlIiBjbGFzcz0iY2xzLTMiIGQ9Ik01NC42MiwxMDkuMjZhNTQuNjMsNTQuNjMsMCwxLDEsNTQuNjQtNTQuNjRBNTQuNjMsNTQuNjMsMCwwLDEsNTQuNjIsMTA5LjI2Wm0wLTEwNUE1MC4zNCw1MC4zNCwwLDEsMCwxMDUsNTQuNjIsNTAuMzQsNTAuMzQsMCwwLDAsNTQuNjIsNC4yNloiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+";
const maticIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzgyNDdFNSIvPgo8cGF0aCBkPSJNNjgxLjQ2OSA0MDIuNDU2QzY2OS4xODkgMzk1LjMxMiA2NTMuMjI0IDM5NS4zMTIgNjM5LjcxNiA0MDIuNDU2TDU0My45MjggNDU3LjIyOEw0NzguODQyIDQ5Mi45NDlMMzgzLjA1NSA1NDcuNzIxQzM3MC43NzQgNTU0Ljg2NSAzNTQuODEgNTU0Ljg2NSAzNDEuMzAxIDU0Ny43MjFMMjY1LjE2MiA1MDQuODU2QzI1Mi44ODIgNDk3LjcxMiAyNDQuMjg2IDQ4NC42MTQgMjQ0LjI4NiA0NzAuMzI1VjM4NS43ODZDMjQ0LjI4NiAzNzEuNDk4IDI1MS42NTQgMzU4LjQgMjY1LjE2MiAzNTEuMjU2TDM0MC4wNzMgMzA5LjU4MUMzNTIuMzUzIDMwMi40MzcgMzY4LjMxOCAzMDIuNDM3IDM4MS44MjcgMzA5LjU4MUw0NTYuNzM3IDM1MS4yNTZDNDY5LjAxOCAzNTguNCA0NzcuNjE0IDM3MS40OTggNDc3LjYxNCAzODUuNzg2VjQ0MC41NThMNTQyLjcgNDAzLjY0NlYzNDguODc0QzU0Mi43IDMzNC41ODYgNTM1LjMzMiAzMjEuNDg4IDUyMS44MjQgMzE0LjM0NEwzODMuMDU1IDIzNS43NThDMzcwLjc3NCAyMjguNjE0IDM1NC44MSAyMjguNjE0IDM0MS4zMDEgMjM1Ljc1OEwyMDAuMDc2IDMxNC4zNDRDMTg2LjU2NyAzMjEuNDg4IDE3OS4xOTkgMzM0LjU4NiAxNzkuMTk5IDM0OC44NzRWNTA3LjIzN0MxNzkuMTk5IDUyMS41MjUgMTg2LjU2NyA1MzQuNjIzIDIwMC4wNzYgNTQxLjc2N0wzNDEuMzAxIDYyMC4zNTNDMzUzLjU4MiA2MjcuNDk4IDM2OS41NDYgNjI3LjQ5OCAzODMuMDU1IDYyMC4zNTNMNDc4Ljg0MiA1NjYuNzcyTDU0My45MjggNTI5Ljg2TDYzOS43MTYgNDc2LjI3OUM2NTEuOTk2IDQ2OS4xMzUgNjY3Ljk2MSA0NjkuMTM1IDY4MS40NjkgNDc2LjI3OUw3NTYuMzggNTE3Ljk1M0M3NjguNjYgNTI1LjA5OCA3NzcuMjU3IDUzOC4xOTUgNzc3LjI1NyA1NTIuNDg0VjYzNy4wMjNDNzc3LjI1NyA2NTEuMzEyIDc2OS44ODggNjY0LjQwOSA3NTYuMzggNjcxLjU1M0w2ODEuNDY5IDcxNC40MTlDNjY5LjE4OSA3MjEuNTYzIDY1My4yMjQgNzIxLjU2MyA2MzkuNzE2IDcxNC40MTlMNTY0LjgwNSA2NzIuNzQ0QzU1Mi41MjUgNjY1LjYgNTQzLjkyOCA2NTIuNTAyIDU0My45MjggNjM4LjIxNFY1ODMuNDQyTDQ3OC44NDIgNjIwLjM1M1Y2NzUuMTI1QzQ3OC44NDIgNjg5LjQxNCA0ODYuMjEgNzAyLjUxMiA0OTkuNzE5IDcwOS42NTZMNjQwLjk0NCA3ODguMjQyQzY1My4yMjQgNzk1LjM4NiA2NjkuMTg5IDc5NS4zODYgNjgyLjY5NyA3ODguMjQyTDgyMy45MjIgNzA5LjY1NkM4MzYuMjAzIDcwMi41MTIgODQ0Ljc5OSA2ODkuNDE0IDg0NC43OTkgNjc1LjEyNVY1MTYuNzYzQzg0NC43OTkgNTAyLjQ3NCA4MzcuNDMxIDQ4OS4zNzcgODIzLjkyMiA0ODIuMjMyTDY4MS40NjkgNDAyLjQ1NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
const binanceCoinIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNGM0JBMkYiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTIuMTE2IDE0LjQwNEwxNiAxMC41MmwzLjg4NiAzLjg4NiAyLjI2LTIuMjZMMTYgNmwtNi4xNDQgNi4xNDQgMi4yNiAyLjI2ek02IDE2bDIuMjYtMi4yNkwxMC41MiAxNmwtMi4yNiAyLjI2TDYgMTZ6bTYuMTE2IDEuNTk2TDE2IDIxLjQ4bDMuODg2LTMuODg2IDIuMjYgMi4yNTlMMTYgMjZsLTYuMTQ0LTYuMTQ0LS4wMDMtLjAwMyAyLjI2My0yLjI1N3pNMjEuNDggMTZsMi4yNi0yLjI2TDI2IDE2bC0yLjI2IDIuMjZMMjEuNDggMTZ6bS0zLjE4OC0uMDAyaC4wMDJ2LjAwMkwxNiAxOC4yOTRsLTIuMjkxLTIuMjktLjAwNC0uMDA0LjAwNC0uMDAzLjQwMS0uNDAyLjE5NS0uMTk1TDE2IDEzLjcwNmwyLjI5MyAyLjI5M3oiLz48L2c+PC9zdmc+";
const BUSDIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzYuNDEgMzM3LjQyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YwYjkwYjtzdHJva2U6I2YwYjkwYjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTY4LjIuNzFsNDEuNSw0Mi41TDEwNS4yLDE0Ny43MWwtNDEuNS00MS41WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzMS4yLDYzLjcxbDQxLjUsNDIuNUwxMDUuMiwyNzMuNzFsLTQxLjUtNDEuNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00Mi4yLDEyNi43MWw0MS41LDQyLjUtNDEuNSw0MS41TC43LDE2OS4yMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yOTQuMiwxMjYuNzFsNDEuNSw0Mi41TDE2OC4yLDMzNi43MWwtNDEuNS00MS41WiIvPjwvZz48L2c+PC9zdmc+";
const fantomIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7ZmlsbDojMTNiNWVjO30uY2xzLTN7bWFzazp1cmwoI21hc2spO308L3N0eWxlPjxtYXNrIGlkPSJtYXNrIiB4PSIxMCIgeT0iNiIgd2lkdGg9IjkzLjEiIGhlaWdodD0iMjAiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPjxnIGlkPSJhIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMCw2aDkzLjFWMjZIMTBaIi8+PC9nPjwvbWFzaz48L2RlZnM+PHRpdGxlPmZhPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiLz48ZyBjbGFzcz0iY2xzLTMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE3LjIsMTIuOWwzLjYtMi4xVjE1Wm0zLjYsOUwxNiwyNC43bC00LjgtMi44VjE3TDE2LDE5LjgsMjAuOCwxN1pNMTEuMiwxMC44bDMuNiwyLjFMMTEuMiwxNVptNS40LDMuMUwyMC4yLDE2bC0zLjYsMi4xWm0tMS4yLDQuMkwxMS44LDE2bDMuNi0yLjFabTQuOC04LjNMMTYsMTIuMiwxMS44LDkuOCwxNiw3LjNaTTEwLDkuNFYyMi41bDYsMy40LDYtMy40VjkuNEwxNiw2WiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
const defaultTokens = {
  "1": [{
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    name: "Wrapped Ether",
    symbol: "WETH",
    icon: wrappedEthIcon
  }, {
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    name: "Tether USD",
    symbol: "USDT",
    icon: tetherUsdIcon
  }, {
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    name: "USD Coin",
    symbol: "USDC",
    icon: usdcIcon
  }, {
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    icon: wrappedBtcIcon
  }, {
    address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    name: "Polygon",
    symbol: "WMATIC",
    icon: maticIcon
  }],
  "5": [{
    address: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
    name: "Wrapped Ether",
    symbol: "WETH",
    icon: wrappedEthIcon
  }, {
    address: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
    name: "USD Coin",
    symbol: "USDC",
    icon: usdcIcon
  }],
  "10": [{
    address: "0x4200000000000000000000000000000000000006",
    name: "Wrapped Ether",
    symbol: "WETH",
    icon: wrappedEthIcon
  }],
  "56": [{
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    name: "Wrapped Binance Chain Token",
    symbol: "WBNB",
    icon: binanceCoinIcon
  }, {
    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    name: "Binance USD",
    symbol: "BUSD",
    icon: BUSDIcon
  }],
  "97": [{
    address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    name: "Wrapped Binance Chain Testnet Token",
    symbol: "WBNB",
    icon: binanceCoinIcon
  }, {
    address: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
    name: "Binance USD",
    symbol: "BUSD",
    icon: BUSDIcon
  }],
  "137": [{
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    name: "Wrapped Matic",
    symbol: "WMATIC",
    icon: maticIcon
  }, {
    address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    name: "Wrapped Ether",
    symbol: "WETH",
    icon: wrappedEthIcon
  }, {
    address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    name: "USD Coin",
    symbol: "USDC",
    icon: usdcIcon
  }, {
    address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    name: "Tether USD",
    symbol: "USDT",
    icon: tetherUsdIcon
  }, {
    address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    name: "Wrapped BTC",
    symbol: "WBTC",
    icon: wrappedBtcIcon
  }],
  "250": [{
    address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    name: "Wrapped Fantom",
    symbol: "WFTM",
    icon: fantomIcon
  }, {
    name: "Wrapped Ether",
    address: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
    symbol: "WETH",
    icon: wrappedEthIcon
  }, {
    name: "USD Coin",
    address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
    symbol: "USDC",
    icon: usdcIcon
  }, {
    name: "Wrapped Bitcoin",
    address: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
    symbol: "WBTC",
    icon: wrappedBtcIcon
  }],
  "420": [{
    address: "0x4200000000000000000000000000000000000006",
    name: "Wrapped Ether",
    symbol: "WETH",
    icon: wrappedEthIcon
  }],
  "4002": [{
    address: "0xf1277d1Ed8AD466beddF92ef448A132661956621",
    name: "Wrapped Fantom",
    symbol: "WFTM",
    icon: fantomIcon
  }],
  "42161": [{
    address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    name: "Wrapped Ether",
    symbol: "WETH",
    icon: wrappedEthIcon
  }, {
    address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    name: "USD Coin",
    symbol: "USDC",
    icon: usdcIcon
  }],
  "43113": [{
    address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo="
  }, {
    address: "0x5425890298aed601595a70AB815c96711a31Bc65",
    name: "USD Coin",
    symbol: "USDC",
    icon: usdcIcon
  }],
  "43114": [{
    address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    name: "Wrapped AVAX",
    symbol: "WAVAX",
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMyIgaGVpZ2h0PSIxNTA0IiB2aWV3Qm94PSIwIDAgMTUwMyAxNTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB4PSIyODciIHk9IjI1OCIgd2lkdGg9IjkyOCIgaGVpZ2h0PSI4NDQiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUwMi41IDc1MkMxNTAyLjUgMTE2Ni43NyAxMTY2LjI3IDE1MDMgNzUxLjUgMTUwM0MzMzYuNzM0IDE1MDMgMC41IDExNjYuNzcgMC41IDc1MkMwLjUgMzM3LjIzNCAzMzYuNzM0IDEgNzUxLjUgMUMxMTY2LjI3IDEgMTUwMi41IDMzNy4yMzQgMTUwMi41IDc1MlpNNTM4LjY4OCAxMDUwLjg2SDM5Mi45NEMzNjIuMzE0IDEwNTAuODYgMzQ3LjE4NiAxMDUwLjg2IDMzNy45NjIgMTA0NC45NkMzMjcuOTk5IDEwMzguNSAzMjEuOTExIDEwMjcuOCAzMjEuMTczIDEwMTUuOTlDMzIwLjYxOSAxMDA1LjExIDMyOC4xODQgOTkxLjgyMiAzNDMuMzEyIDk2NS4yNTVMNzAzLjE4MiAzMzAuOTM1QzcxOC40OTUgMzAzLjk5OSA3MjYuMjQzIDI5MC41MzEgNzM2LjAyMSAyODUuNTVDNzQ2LjUzNyAyODAuMiA3NTkuMDgzIDI4MC4yIDc2OS41OTkgMjg1LjU1Qzc3OS4zNzcgMjkwLjUzMSA3ODcuMTI2IDMwMy45OTkgODAyLjQzOCAzMzAuOTM1TDg3Ni40MiA0NjAuMDc5TDg3Ni43OTcgNDYwLjczOEM4OTMuMzM2IDQ4OS42MzUgOTAxLjcyMyA1MDQuMjg5IDkwNS4zODUgNTE5LjY2OUM5MDkuNDQzIDUzNi40NTggOTA5LjQ0MyA1NTQuMTY5IDkwNS4zODUgNTcwLjk1OEM5MDEuNjk1IDU4Ni40NTUgODkzLjM5MyA2MDEuMjE1IDg3Ni42MDQgNjMwLjU0OUw2ODcuNTczIDk2NC43MDJMNjg3LjA4NCA5NjUuNTU4QzY3MC40MzYgOTk0LjY5MyA2NjEuOTk5IDEwMDkuNDYgNjUwLjMwNiAxMDIwLjZDNjM3LjU3NiAxMDMyLjc4IDYyMi4yNjMgMTA0MS42MyA2MDUuNDc0IDEwNDYuNjJDNTkwLjE2MSAxMDUwLjg2IDU3My4wMDQgMTA1MC44NiA1MzguNjg4IDEwNTAuODZaTTkwNi43NSAxMDUwLjg2SDExMTUuNTlDMTE0Ni40IDEwNTAuODYgMTE2MS45IDEwNTAuODYgMTE3MS4xMyAxMDQ0Ljc4QzExODEuMDkgMTAzOC4zMiAxMTg3LjM2IDEwMjcuNDMgMTE4Ny45MiAxMDE1LjYzQzExODguNDUgMTAwNS4xIDExODEuMDUgOTkyLjMzIDExNjYuNTUgOTY3LjMwN0MxMTY2LjA1IDk2Ni40NTUgMTE2NS41NSA5NjUuNTg4IDExNjUuMDQgOTY0LjcwNkwxMDYwLjQzIDc4NS43NUwxMDU5LjI0IDc4My43MzVDMTA0NC41NCA3NTguODc3IDEwMzcuMTIgNzQ2LjMyNCAxMDI3LjU5IDc0MS40NzJDMTAxNy4wOCA3MzYuMTIxIDEwMDQuNzEgNzM2LjEyMSA5OTQuMTk5IDc0MS40NzJDOTg0LjYwNSA3NDYuNDUzIDk3Ni44NTcgNzU5LjU1MiA5NjEuNTQ0IDc4NS45MzRMODU3LjMwNiA5NjQuODkxTDg1Ni45NDkgOTY1LjUwN0M4NDEuNjkgOTkxLjg0NyA4MzQuMDY0IDEwMDUuMDEgODM0LjYxNCAxMDE1LjgxQzgzNS4zNTIgMTAyNy42MiA4NDEuNDQgMTAzOC41IDg1MS40MDIgMTA0NC45NkM4NjAuNDQzIDEwNTAuODYgODc1Ljk0IDEwNTAuODYgOTA2Ljc1IDEwNTAuODZaIiBmaWxsPSIjRTg0MTQyIi8+Cjwvc3ZnPgo="
  }, {
    address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    name: "Wrapped Ether",
    symbol: "WETH",
    icon: wrappedEthIcon
  }, {
    address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    name: "Tether USD",
    symbol: "USDT",
    icon: tetherUsdIcon
  }, {
    address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    name: "USD Coin",
    symbol: "USDC",
    icon: usdcIcon
  }, {
    address: "0x50b7545627a5162F82A992c33b87aDc75187B218",
    name: "Wrapped BTC",
    symbol: "WBTC",
    icon: wrappedBtcIcon
  }],
  "80001": [{
    address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    name: "Wrapped Matic",
    symbol: "WMATIC",
    icon: maticIcon
  }, {
    name: "Wrapped Ether",
    address: "0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa",
    symbol: "WETH",
    icon: wrappedEthIcon
  }, {
    address: "0x0FA8781a83E46826621b3BC094Ea2A0212e71B23",
    name: "USD Coin",
    symbol: "USDC",
    icon: usdcIcon
  }, {
    name: "Tether USD",
    address: "0x3813e82e6f7098b9583FC0F33a962D02018B6803",
    symbol: "USDT",
    icon: tetherUsdIcon
  }],
  "421613": [{
    address: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
    name: "Wrapped Ether",
    symbol: "WETH",
    icon: wrappedEthIcon
  }, {
    address: "0xfd064A18f3BF249cf1f87FC203E90D8f650f2d63",
    name: "USD Coin",
    symbol: "USDC",
    icon: usdcIcon
  }]
};

// extracted from chakra-ui
/**
 * React hook to copy content to clipboard
 *
 */
function useClipboard(text) {
  let optionsOrTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const [hasCopied, setHasCopied] = React.useState(false);
  const {
    timeout = 1500,
    ...copyOptions
  } = typeof optionsOrTimeout === "number" ? {
    timeout: optionsOrTimeout
  } : optionsOrTimeout;
  const onCopy = React.useCallback(() => {
    const didCopy = copy__default["default"](text, copyOptions);
    setHasCopied(didCopy);
  }, [text, copyOptions]);
  React.useEffect(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: text,
    onCopy,
    hasCopied
  };
}

const ScreenContext = /* @__PURE__ */React.createContext(undefined);
function useScreen() {
  const walletConfigs = reactCore.useWallets();
  const initialScreen = walletConfigs.length === 1 && !walletConfigs[0].selectUI ? walletConfigs[0] : formElements.reservedScreens.main;
  const [screen, setScreen] = React.useState(initialScreen);
  const prevInitialScreen = React.useRef(initialScreen);

  // when the initial screen changes, reset the screen to the initial screen ( if the modal is closed )
  React.useEffect(() => {
    if (initialScreen !== prevInitialScreen.current) {
      prevInitialScreen.current = initialScreen;
      setScreen(initialScreen);
    }
  }, [initialScreen]);
  return {
    screen,
    setScreen,
    initialScreen
  };
}
function useScreenContext() {
  const screen = React.useContext(ScreenContext);
  if (!screen) {
    throw new Error("useScreenContext must be used within a <ScreenProvider />");
  }
  return screen;
}

function shortenString(str, extraShort) {
  return `${str.substring(0, extraShort ? 4 : 6)}...${str.substring(str.length - (extraShort ? 3 : 4))}`;
}
function shortenAddress(address, extraShort) {
  try {
    const formattedAddress = ethers.utils.getAddress(address);
    return shortenString(formattedAddress, extraShort);
  } catch {
    return address;
  }
}

const ExportLocalWallet = props => {
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isWrongPassword, setIsWrongPassword] = React.useState(false);
  const [passwordIsRequired, setPasswordIsRequired] = React.useState(false);
  const wallet = reactCore.useWallet();
  const address = reactCore.useAddress();
  const [savedAddress, setSavedAddress] = React.useState("");
  const createWalletInstance = reactCore.useCreateWalletInstance();

  // set savedAddress and passwordIsRequired on mount
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) {
      return;
    }
    mounted.current = true;
    (async () => {
      // if local wallet is connected - show the address of the connected wallet
      if (wallet && wallet instanceof wallets.LocalWallet) {
        if (address) {
          setSavedAddress(address);
        }

        // if walletData of it is not already saved - password is required
        const savedData = await wallet.getSavedData();
        if (savedData?.address !== address) {
          setPasswordIsRequired(true);
        }
      }

      // if localWallet is not connected - get address from storage, password is not required
      else {
        const localWallet = createWalletInstance(props.localWalletConfig);
        const data = await localWallet.getSavedData();
        if (data) {
          setSavedAddress(data.address);
        }
      }
    })();
  }, [wallet, props.localWalletConfig, createWalletInstance, password, address]);
  const exportFromLocalStorage = async () => {
    // if a local wallet is connected - export it
    if (wallet && wallet instanceof wallets.LocalWallet) {
      const savedData = await wallet.getSavedData();

      // if already saved - no password required
      if (savedData && savedData.address === address) {
        downloadJsonWalletFile(savedData.data);
        props.onExport();
      }

      // if not already saved - password is required
      else {
        try {
          const dataStr = await wallet.export({
            password,
            strategy: "encryptedJson"
          });
          downloadJsonWalletFile(dataStr);
          props.onExport();
        } catch (e) {
          console.error(e);
          setIsWrongPassword(true);
        }
      }
    }

    // if local wallet is not connected - get data from storage
    else {
      const localWallet = createWalletInstance(props.localWalletConfig);
      const savedData = await localWallet.getSavedData();
      downloadJsonWalletFile(savedData.data);
      props.onExport();
    }
  };
  if (!savedAddress) {
    return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      flex: "row",
      center: "both",
      style: {
        height: "300px"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
        size: "md",
        color: "accentText"
      })
    });
  }
  const exportDisabled = isWrongPassword;
  return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
    fullHeight: true,
    children: /*#__PURE__*/jsxRuntime.jsxs("form", {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
      },
      onSubmit: e => {
        e.preventDefault();
        exportFromLocalStorage();
      },
      children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        expand: true,
        p: "lg",
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
          onBack: props.onBack,
          title: "Backup Wallet"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.ModalDescription, {
          sm: true,
          children: "This will download a JSON file containing the wallet information onto your device encrypted with the password"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "sm"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.ModalDescription, {
          sm: true,
          children: "You can use this JSON file to import the account in MetaMask using the same password"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Label, {
          children: "Wallet Address"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "sm"
        }), /*#__PURE__*/jsxRuntime.jsx(SavedWalletAddress, {
          children: shortenAddress(savedAddress)
        }), passwordIsRequired && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsxRuntime.jsx("input", {
            type: "text",
            name: "username",
            autoComplete: "off",
            value: address,
            disabled: true,
            style: {
              display: "none"
            }
          }), /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.FormFieldWithIconButton, {
            noSave: true,
            required: true,
            name: "current-password",
            autocomplete: "current-password",
            id: "current-password",
            onChange: value => {
              setPassword(value);
              setIsWrongPassword(false);
            },
            right: {
              onClick: () => setShowPassword(!showPassword),
              icon: showPassword ? /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeClosedIcon, {}) : /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeOpenIcon, {})
            },
            label: "Password",
            type: showPassword ? "text" : "password",
            value: password,
            error: isWrongPassword ? "Wrong Password" : "",
            dataTest: "current-password"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "md"
          })]
        })]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.ScreenBottomContainer, {
        style: {
          borderTop: props.modalSize === "wide" ? "none" : undefined
        },
        children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
          disabled: exportDisabled,
          variant: "accent",
          fullWidth: true,
          style: {
            opacity: exportDisabled ? 0.5 : 1,
            display: "flex",
            gap: formElements.spacing.sm
          },
          type: "submit",
          children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.PinBottomIcon, {
            width: formElements.iconSize.sm,
            height: formElements.iconSize.sm
          }), "Download"]
        })
      })]
    })
  });
};
function downloadJsonWalletFile(data) {
  const dataObj = JSON.parse(data);
  const blob = new Blob([JSON.stringify(dataObj, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "wallet.json";
  document.body.appendChild(a);
  a.style.display = "none";
  a.click();
  URL.revokeObjectURL(a.href);
}
const SavedWalletAddress = styled__default["default"].p`
  font-size: ${formElements.fontSize.md};
  color: ${props => props.theme.colors.secondaryText};
  margin: 0;
`;

const defaultChainIcon = "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
const ChainIcon = props => {
  const url = props.chain?.icon?.url || defaultChainIcon;
  const storage = reactCore.useStorage();
  const src = storage ? storage.resolveScheme(url) : url.replace("ipfs://", "https://ipfs.io/ipfs/");
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      position: "relative",
      display: "flex",
      flexShrink: 0,
      alignItems: "center"
    },
    children: [/*#__PURE__*/jsxRuntime.jsx("img", {
      src: src || defaultChainIcon,
      onError: e => {
        if (e.currentTarget.src !== defaultChainIcon) {
          e.currentTarget.src = defaultChainIcon;
        }
      },
      alt: "",
      width: props.size,
      height: props.size,
      className: props.className,
      loading: props.loading,
      style: {
        objectFit: "contain",
        width: props.size + "px",
        height: props.size + "px"
      }
    }), props.active && /*#__PURE__*/jsxRuntime.jsx(ActiveDot$1, {})]
  });
};
const ActiveDot$1 = styled__default["default"].div`
  width: 28%;
  height: 28%;
  border-radius: 50%;
  position: absolute;
  top: 60%;
  right: 0px;
  background-color: #00d395;
  box-shadow: 0 0 0 2px var(--bg);
`;

const CopyIcon = props => {
  const {
    hasCopied,
    onCopy
  } = useClipboard(props.text);
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    onClick: onCopy,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: /*#__PURE__*/jsxRuntime.jsx(Tooltip.ToolTip, {
      tip: props.tip,
      side: props.side,
      align: props.align,
      children: props.hasCopied || hasCopied ? /*#__PURE__*/jsxRuntime.jsx(CheckIconStyled, {}) : /*#__PURE__*/jsxRuntime.jsx(reactIcons.CopyIcon, {})
    })
  });
};
const CheckIconStyled = styled__default["default"](reactIcons.CheckIcon)`
  color: ${p => p.theme.colors.success};
`;

const overlayEnter = react.keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Overlay = styled__default["default"].div`
  background-color: ${p => p.theme.colors.modalOverlayBg};
  z-index: 9999;
  position: fixed;
  inset: 0;
  animation: ${overlayEnter} 400ms cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(10px);
`;

function DynamicHeight(props) {
  const {
    height,
    elementRef
  } = useHeightObserver();
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    style: {
      height: height ? `${height}px` : "auto",
      transition: "height 210ms cubic-bezier(0.175, 0.885, 0.32, 1.1)",
      overflow: "hidden",
      boxSizing: "border-box"
    },
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      ref: elementRef,
      style: {
        maxHeight: props.maxHeight
      },
      children: props.children
    })
  });
}
function useHeightObserver() {
  const elementRef = React.useRef(null);
  const [height, setHeight] = React.useState();
  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      setHeight(element.scrollHeight);
    });
    resizeObserver.observe(element);
    return () => {
      resizeObserver.disconnect();
    };
  }, [elementRef]);
  return {
    height,
    elementRef: elementRef
  };
}

const Modal = props => {
  return /*#__PURE__*/jsxRuntime.jsxs(Dialog__namespace.Root, {
    open: props.open,
    onOpenChange: props.setOpen,
    children: [props.trigger && /*#__PURE__*/jsxRuntime.jsx(Dialog__namespace.Trigger, {
      asChild: true,
      children: props.trigger
    }), /*#__PURE__*/jsxRuntime.jsxs(Dialog__namespace.Portal, {
      children: [/*#__PURE__*/jsxRuntime.jsx(Dialog__namespace.Overlay, {
        asChild: true,
        children: /*#__PURE__*/jsxRuntime.jsx(Overlay, {})
      }), /*#__PURE__*/jsxRuntime.jsx(Dialog__namespace.Content, {
        asChild: true,
        children: /*#__PURE__*/jsxRuntime.jsxs(DialogContent, {
          style: {
            height: props.size === "compact" ? "auto" : formElements.widemodalMaxHeight,
            maxWidth: props.size === "compact" ? formElements.modalMaxWidthCompact : formElements.modalMaxWidthWide
          },
          children: [props.size === "compact" ? /*#__PURE__*/jsxRuntime.jsxs(DynamicHeight, {
            maxHeight: formElements.compactmodalMaxHeight,
            children: [props.children, " "]
          }) : props.children, !props.hideCloseIcon && /*#__PURE__*/jsxRuntime.jsx(CrossContainer, {
            children: /*#__PURE__*/jsxRuntime.jsx(Dialog__namespace.Close, {
              asChild: true,
              children: /*#__PURE__*/jsxRuntime.jsx(formElements.IconButton, {
                type: "button",
                "aria-label": "Close",
                children: /*#__PURE__*/jsxRuntime.jsx(reactIcons.Cross2Icon, {
                  style: {
                    width: formElements.iconSize.md,
                    height: formElements.iconSize.md,
                    color: "inherit"
                  }
                })
              })
            })
          })]
        })
      })]
    })]
  });
};
const CrossContainer = styled__default["default"].div`
  position: absolute;
  top: ${formElements.spacing.lg};
  right: ${formElements.spacing.lg};

  ${formElements.media.mobile} {
    right: ${formElements.spacing.md};
  }
`;
const modalAnimationDesktop = react.keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
const modalAnimationMobile = react.keyframes`
  from {
    opacity: 0;
    transform: translate(0, 50%);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
const DialogContent = styled__default["default"].div`
  z-index: 10000;
  background: ${p => p.theme.colors.modalBg};
  --bg: ${p => p.theme.colors.modalBg};
  color: ${p => p.theme.colors.primaryText};
  border-radius: ${formElements.radius.xl};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 40px);
  box-sizing: border-box;
  animation: ${modalAnimationDesktop} 300ms ease;
  box-shadow: ${formElements.shadow.lg};
  line-height: 1;
  border: 1px solid ${p => p.theme.colors.borderColor};
  outline: none;
  overflow: hidden;
  font-family: ${p => p.theme.fontFamily};

  ${formElements.noScrollBar}

  /* open from bottom on mobile */
  ${formElements.media.mobile} {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100vw;
    transform: none;
    width: 100vw;
    animation: ${modalAnimationMobile} 0.35s cubic-bezier(0.15, 1.15, 0.6, 1);
    border-radius: ${formElements.radius.xxl};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    max-width: none !important;
  }

  & *::selection {
    background-color: ${p => p.theme.colors.selectedTextBg};
    color: ${p => p.theme.colors.selectedTextColor};
  }
`;

const Skeleton = props => {
  return /*#__PURE__*/jsxRuntime.jsx(SkeletonDiv, {
    style: {
      height: props.height,
      width: props.width || "auto"
    }
  });
};
const skeletonAnimation = react.keyframes`
0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;
const SkeletonDiv = styled__default["default"].div`
  background-size: 200% 200%;
  background-color: ${p => p.theme.colors.skeletonBg};
  animation: ${skeletonAnimation} 500ms ease-in-out infinite alternate;
  border-radius: ${formElements.radius.sm};
`;

function CustomThemeProvider(props) {
  const {
    theme,
    children
  } = props;
  let themeObj;
  if (typeof theme === "string") {
    themeObj = theme === "light" ? formElements.lightThemeObj : formElements.darkThemeObj;
  } else {
    themeObj = theme;
  }
  return /*#__PURE__*/jsxRuntime.jsx(react.ThemeProvider, {
    theme: themeObj,
    children: children
  });
}

const fuseConfig = {
  threshold: 0.4,
  keys: [{
    name: "name",
    weight: 1
  }, {
    name: "chainId",
    weight: 1
  }]
};
const NetworkSelector = props => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const deferredSearchTerm = React.useDeferredValue(searchTerm);
  const themeFromContext = react.useTheme();
  const theme = props.theme || themeFromContext || "dark";
  const supportedChains = reactCore.useSupportedChains();
  const chains = props.chains || supportedChains;
  const _recentChains = props.recentChains;

  // remove recent chains from popular chains
  const cleanedPopularChains = !_recentChains ? props.popularChains : props.popularChains?.filter(chain => {
    return !_recentChains.some(recentChain => recentChain.chainId === chain.chainId);
  });

  // fuse instances
  const fuseAllChains = React.useMemo(() => {
    return new Fuse__default["default"](chains, fuseConfig);
  }, [chains]);
  const fusePopularChains = React.useMemo(() => {
    return new Fuse__default["default"](cleanedPopularChains || [], fuseConfig);
  }, [cleanedPopularChains]);
  const fuseRecentChains = React.useMemo(() => {
    return new Fuse__default["default"](props.recentChains || [], fuseConfig);
  }, [props.recentChains]);

  // chains filtered by search term
  const allChains = React.useMemo(() => {
    if (deferredSearchTerm === "") {
      return chains;
    }
    return fuseAllChains.search(deferredSearchTerm).map(r => r.item);
  }, [fuseAllChains, deferredSearchTerm, chains]);
  const popularChains = React.useMemo(() => {
    if (deferredSearchTerm === "") {
      return cleanedPopularChains || [];
    }
    return fusePopularChains.search(deferredSearchTerm).map(r => r.item);
  }, [fusePopularChains, deferredSearchTerm, cleanedPopularChains]);
  const recentChains = React.useMemo(() => {
    if (deferredSearchTerm === "") {
      return props.recentChains || [];
    }
    return fuseRecentChains.search(deferredSearchTerm).map(r => r.item);
  }, [fuseRecentChains, deferredSearchTerm, props.recentChains]);
  const {
    onClose,
    onSwitch,
    onCustomClick
  } = props;
  const handleSwitch = React.useCallback(chain => {
    if (onSwitch) {
      onSwitch(chain);
    }
    if (onClose) {
      onClose();
    }
  }, [onSwitch, onClose]);
  return /*#__PURE__*/jsxRuntime.jsx(CustomThemeProvider, {
    theme: theme,
    children: /*#__PURE__*/jsxRuntime.jsx(Modal, {
      size: "compact",
      open: true,
      setOpen: value => {
        if (!value && onClose) {
          onClose();
        }
      },
      style: {
        paddingBottom: props.onCustomClick ? formElements.spacing.md : "0px"
      },
      children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          p: "lg",
          children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalTitle, {
            children: "Select Network"
          })
        }), /*#__PURE__*/jsxRuntime.jsxs(Tabs__namespace.Root, {
          className: "TabsRoot",
          defaultValue: "all",
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
            px: "lg",
            children: /*#__PURE__*/jsxRuntime.jsxs(Tabs__namespace.List, {
              className: "TabsList",
              "aria-label": "Manage your account",
              style: {
                display: "flex",
                gap: formElements.spacing.xxs
              },
              children: [/*#__PURE__*/jsxRuntime.jsx(TabButton, {
                className: "TabsTrigger",
                value: "all",
                children: "All"
              }), /*#__PURE__*/jsxRuntime.jsx(TabButton, {
                className: "TabsTrigger",
                value: "mainnet",
                children: "Mainnets"
              }), /*#__PURE__*/jsxRuntime.jsx(TabButton, {
                className: "TabsTrigger",
                value: "testnet",
                children: "Testnets"
              })]
            })
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "lg"
          }), chains.length > 10 && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
            children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
              px: "lg",
              children: /*#__PURE__*/jsxRuntime.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  position: "relative"
                },
                children: [/*#__PURE__*/jsxRuntime.jsx(StyledMagnifyingGlassIcon, {
                  width: formElements.iconSize.md,
                  height: formElements.iconSize.md
                }), /*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
                  style: {
                    padding: `${formElements.spacing.sm} ${formElements.spacing.md} ${formElements.spacing.sm} ${formElements.spacing.xxl}`
                  },
                  tabIndex: -1,
                  variant: "outline",
                  placeholder: "Search Network or Chain ID",
                  value: searchTerm,
                  onChange: e => {
                    setSearchTerm(e.target.value);
                  }
                }), deferredSearchTerm !== searchTerm && /*#__PURE__*/jsxRuntime.jsx("div", {
                  style: {
                    position: "absolute",
                    right: formElements.spacing.md
                  },
                  children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
                    size: "md",
                    color: "accentText"
                  })
                })]
              })
            }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
              y: "lg"
            })]
          }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
            px: "md",
            children: [/*#__PURE__*/jsxRuntime.jsx(Tabs__namespace.Content, {
              className: "TabsContent",
              value: "all",
              children: /*#__PURE__*/jsxRuntime.jsx(NetworkTab, {
                allChains: allChains,
                type: "all",
                popularChains: popularChains,
                recentChains: recentChains,
                onSwitch: handleSwitch,
                renderChain: props.renderChain,
                close: props.onClose
              })
            }), /*#__PURE__*/jsxRuntime.jsx(Tabs__namespace.Content, {
              className: "TabsContent",
              value: "mainnet",
              children: /*#__PURE__*/jsxRuntime.jsx(NetworkTab, {
                allChains: allChains,
                type: "mainnet",
                popularChains: popularChains,
                recentChains: recentChains,
                onSwitch: handleSwitch,
                renderChain: props.renderChain,
                close: props.onClose
              })
            }), /*#__PURE__*/jsxRuntime.jsx(Tabs__namespace.Content, {
              className: "TabsContent",
              value: "testnet",
              children: /*#__PURE__*/jsxRuntime.jsx(NetworkTab, {
                allChains: allChains,
                type: "testnet",
                popularChains: popularChains,
                recentChains: recentChains,
                onSwitch: handleSwitch,
                renderChain: props.renderChain,
                close: props.onClose
              })
            })]
          }), onCustomClick && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
            children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Line, {}), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
              p: "lg",
              children: /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
                fullWidth: true,
                variant: "link",
                onClick: () => {
                  onCustomClick();
                  if (onClose) {
                    onClose();
                  }
                },
                style: {
                  display: "flex",
                  fontSize: formElements.fontSize.sm,
                  boxShadow: "none"
                },
                children: "Add Custom Network"
              })
            })]
          })]
        })]
      })
    })
  });
};
const filterChainByType = (chains, type) => {
  if (type === "all") {
    return chains;
  }
  if (type === "testnet") {
    return chains.filter(c => c.testnet);
  }
  return chains.filter(c => !c.testnet);
};
const NetworkTab = props => {
  const allChains = React.useMemo(() => filterChainByType(props.allChains, props.type), [props.type, props.allChains]);
  const recentChains = React.useMemo(() => filterChainByType(props.recentChains || [], props.type), [props.type, props.recentChains]);
  const popularChains = React.useMemo(() => filterChainByType(props.popularChains || [], props.type), [props.type, props.popularChains]);
  return /*#__PURE__*/jsxRuntime.jsxs(ScrollContainer, {
    style: {
      height: "330px"
    },
    children: [recentChains.length > 0 && /*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntime.jsx(SectionLabel, {
        children: "Recently Used"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsxRuntime.jsx(NetworkList, {
        chains: recentChains,
        onSwitch: props.onSwitch,
        renderChain: props.renderChain,
        close: props.close
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      })]
    }), popularChains.length > 0 && /*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntime.jsx(SectionLabel, {
        children: "Popular"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsxRuntime.jsx(NetworkList, {
        chains: popularChains,
        onSwitch: props.onSwitch,
        renderChain: props.renderChain,
        close: props.close
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      })]
    }), (popularChains.length > 0 || recentChains.length > 0) && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(SectionLabel, {
        children: "All Networks"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "sm"
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(NetworkList, {
      chains: allChains,
      onSwitch: props.onSwitch,
      renderChain: props.renderChain,
      close: props.close
    })]
  });
};
const NetworkList = /* @__PURE__ */React.memo(function NetworkList(props) {
  const switchChain = reactCore.useSwitchChain();
  const activeChainId = reactCore.useChainId();
  const [switchingChainId, setSwitchingChainId] = React.useState(-1);
  const [errorSwitchingChainId, setErrorSwitchingChainId] = React.useState(-1);
  const close = props.close;
  React.useEffect(() => {
    // if switching and switched successfully - close modal
    if (switchingChainId !== -1 && activeChainId === switchingChainId) {
      if (close) {
        close();
      }
    }
  }, [switchingChainId, close, activeChainId]);
  const handleSwitch = async chain => {
    setErrorSwitchingChainId(-1);
    setSwitchingChainId(chain.chainId);
    try {
      await switchChain(chain.chainId);
      props.onSwitch(chain);
    } catch (e) {
      setErrorSwitchingChainId(chain.chainId);
      console.error(e);
    } finally {
      setSwitchingChainId(-1);
    }
  };
  const RenderChain = props.renderChain;
  const [isLoading, setIsLoading] = React.useState(props.chains.length > 100);
  React.useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [isLoading]);
  if (isLoading) {
    return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      flex: "row",
      center: "both",
      style: {
        height: "250px"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        children: "Loading"
      })
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(NetworkListUl, {
    children: props.chains.map(chain => {
      const confirming = switchingChainId === chain.chainId;
      const switchingFailed = errorSwitchingChainId === chain.chainId;
      const chainName = /*#__PURE__*/jsxRuntime.jsxs("span", {
        children: [chain.name, " "]
      });
      if (RenderChain) {
        return /*#__PURE__*/jsxRuntime.jsx("li", {
          children: /*#__PURE__*/jsxRuntime.jsx(RenderChain, {
            switchChain: () => {
              handleSwitch(chain);
            },
            chain: chain,
            switching: switchingChainId === chain.chainId,
            switchFailed: errorSwitchingChainId === chain.chainId,
            close: props.close
          })
        }, chain.chainId);
      }
      return /*#__PURE__*/jsxRuntime.jsx("li", {
        children: /*#__PURE__*/jsxRuntime.jsxs(NetworkButton, {
          "data-active": activeChainId === chain.chainId,
          onClick: () => {
            handleSwitch(chain);
          },
          children: [/*#__PURE__*/jsxRuntime.jsx(ChainIcon, {
            chain: chain,
            size: formElements.iconSize.lg,
            active: activeChainId === chain.chainId,
            loading: "lazy"
          }), confirming || switchingFailed ? /*#__PURE__*/jsxRuntime.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: formElements.spacing.xs
            },
            children: [chainName, /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
              animate: "fadein",
              flex: "row",
              gap: "xs",
              children: [confirming && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
                children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
                  size: "xs",
                  color: "accentText",
                  children: "Confirm in Wallet"
                }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
                  size: "xs",
                  color: "accentText"
                })]
              }), switchingFailed && /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
                size: "xs",
                color: "danger",
                children: "Failed to Switch Network"
              })]
            })]
          }) : chainName]
        })
      }, chain.chainId);
    })
  });
});
const TabButton = styled__default["default"]( Tabs__namespace.Trigger)`
  all: unset;
  font-size: ${formElements.fontSize.sm};
  font-weight: 500;
  color: ${p => p.theme.colors.secondaryText};
  cursor: pointer;
  padding: ${formElements.spacing.sm} ${formElements.spacing.sm};
  -webkit-tap-highlight-color: transparent;
  border-radius: ${formElements.radius.lg};
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &[data-state="active"] {
    background: ${p => p.theme.colors.secondaryButtonBg};
    color: ${p => p.theme.colors.primaryText};
  }
`;
const SectionLabel = styled__default["default"].p`
  font-size: ${formElements.fontSize.sm};
  color: ${p => p.theme.colors.secondaryText};
  margin: 0;
  display: block;
  padding: 0 ${formElements.spacing.xs};
`;
const ScrollContainer = styled__default["default"].div`
  box-sizing: border-box;
  overflow: auto;
  padding-bottom: ${formElements.spacing.lg};
  ${formElements.noScrollBar};
`;
const NetworkListUl = styled__default["default"].ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${formElements.spacing.xs};
  box-sizing: border-box;
`;
const NetworkButton = styled__default["default"].button`
  all: unset;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  gap: ${formElements.spacing.md};
  padding: ${formElements.spacing.xs} ${formElements.spacing.sm};
  border-radius: ${formElements.radius.md};
  cursor: pointer;
  transition: background 0.2s ease;
  color: ${p => p.theme.colors.primaryText};
  font-weight: 500;
  font-size: ${formElements.fontSize.md};
  &:hover {
    background: ${p => p.theme.colors.secondaryButtonBg};
  }

  ${formElements.media.mobile} {
    font-size: ${formElements.fontSize.sm};
  }
`;
const StyledMagnifyingGlassIcon = styled__default["default"](reactIcons.MagnifyingGlassIcon)`
  color: ${p => p.theme.colors.secondaryText};
  position: absolute;
  left: ${formElements.spacing.sm};
`;

const ExitIcon = _ref => {
  let {
    size
  } = _ref;
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M10.79 16.29C11.18 16.68 11.81 16.68 12.2 16.29L15.79 12.7C15.8827 12.6075 15.9563 12.4976 16.0064 12.3766C16.0566 12.2557 16.0824 12.126 16.0824 11.995C16.0824 11.864 16.0566 11.7343 16.0064 11.6134C15.9563 11.4924 15.8827 11.3825 15.79 11.29L12.2 7.7C12.013 7.51302 11.7594 7.40798 11.495 7.40798C11.2306 7.40798 10.977 7.51302 10.79 7.7C10.603 7.88698 10.498 8.14057 10.498 8.405C10.498 8.66943 10.603 8.92302 10.79 9.11L12.67 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H12.67L10.79 14.88C10.4 15.27 10.41 15.91 10.79 16.29ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8C3 8.55 3.45 9 4 9C4.55 9 5 8.55 5 8V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V18C19 18.55 18.55 19 18 19H6C5.45 19 5 18.55 5 18V16C5 15.45 4.55 15 4 15C3.45 15 3 15.45 3 16V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
    })
  });
};

const FundsIcon = _ref => {
  let {
    size
  } = _ref;
  return /*#__PURE__*/jsxRuntime.jsxs("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M14.001 8.00048C14.001 9.18726 13.649 10.3474 12.9897 11.3342C12.3304 12.3209 11.3932 13.09 10.2968 13.5442C9.20032 13.9984 7.99382 14.1172 6.82984 13.8857C5.66587 13.6541 4.59668 13.0826 3.7575 12.2435C2.91832 11.4043 2.34683 10.3351 2.1153 9.17111C1.88377 8.00713 2.0026 6.80064 2.45676 5.70419C2.91092 4.60775 3.68002 3.6706 4.66679 3.01126C5.65357 2.35192 6.8137 2 8.00048 2",
      stroke: "currentColor",
      strokeWidth: "1.2001",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M14.0005 2L8 8.00048",
      stroke: "currentColor",
      strokeWidth: "1.2001",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M10.3984 2H13.9987V5.60029",
      stroke: "currentColor",
      strokeWidth: "1.2001",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
};

function SendFunds(props) {
  const [screen, setScreen] = React.useState("base");
  const chainId = reactCore.useChainId();
  let defaultToken = undefined;
  if (
  // if we know chainId
  chainId &&
  // if there is a list of tokens for this chain
  props.supportedTokens[chainId] &&
  // if the list of tokens is not the default list
  props.supportedTokens[chainId] !== defaultTokens[chainId]) {
    // use the first token in the list as default selected
    defaultToken = props.supportedTokens[chainId][0];
  }
  const [token, setToken] = React.useState(defaultToken);
  const [receieverAddress, setReceieverAddress] = React.useState("");
  const [amount, setAmount] = React.useState("0");
  if (screen === "tokenSelector") {
    return /*#__PURE__*/jsxRuntime.jsx(TokenSelector, {
      supportedTokens: props.supportedTokens,
      onBack: () => {
        setScreen("base");
      },
      onTokenSelect: _token => {
        setToken(_token);
        setScreen("base");
      }
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(SendFundsForm, {
    token: token,
    onTokenSelect: () => {
      setScreen("tokenSelector");
    },
    receieverAddress: receieverAddress,
    setReceieverAddress: setReceieverAddress,
    amount: amount,
    setAmount: setAmount
  });
}
function SendFundsForm(props) {
  const tokenAddress = props.token?.address;
  const balanceQuery = reactCore.useBalance(tokenAddress);
  const {
    receieverAddress: receiverAddress,
    setReceieverAddress,
    amount,
    setAmount
  } = props;
  const chain = reactCore.useChain();
  const chainId = reactCore.useChainId();
  const wallet = reactCore.useWallet();

  // Ethereum or Rinkeby or Goerli
  const isENSSupprted = chainId === 1 || chainId === 5 || chainId === 4;
  const isValidReceiverAddress = React.useMemo(() => {
    const isENS = receiverAddress.endsWith(".eth");
    if (!isENSSupprted && isENS) {
      return false;
    }
    return isENS || ethers.utils.isAddress(receiverAddress);
  }, [receiverAddress, isENSSupprted]);
  const showInvalidAddressError = receiverAddress && !isValidReceiverAddress;
  const sendTokenMutation = reactQuery.useMutation(async () => {
    if (!wallet) {
      return;
    }
    return wallet.transfer(receiverAddress, amount, tokenAddress);
  });
  if (sendTokenMutation.isError) {
    return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      p: "lg",
      animate: "fadein",
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        title: "Send Funds",
        onBack: () => {
          sendTokenMutation.reset();
        }
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        flex: "column",
        gap: "lg",
        animate: "fadein",
        center: "both",
        style: {
          minHeight: "200px"
        },
        color: "danger",
        children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.CrossCircledIcon, {
          width: formElements.iconSize.xl,
          height: formElements.iconSize.xl
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
          color: "danger",
          children: getErrorMessage(sendTokenMutation.error)
        })]
      })]
    });
  }
  if (sendTokenMutation.isSuccess) {
    return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      p: "lg",
      animate: "fadein",
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        title: "Send Funds",
        onBack: () => {
          sendTokenMutation.reset();
        }
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        flex: "column",
        gap: "lg",
        animate: "fadein",
        center: "both",
        style: {
          minHeight: "250px"
        },
        color: "success",
        children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.CheckCircledIcon, {
          width: formElements.iconSize.xl,
          height: formElements.iconSize.xl
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
          color: "success",
          children: " Transaction Successful "
        })]
      })]
    });
  }
  const tokenName = props.token?.name || balanceQuery?.data?.name;
  const tokenSymbol = props.token?.symbol || balanceQuery.data?.symbol;
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    p: "lg",
    animate: "fadein",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalTitle, {
      children: "Send Funds"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "xl"
    }), /*#__PURE__*/jsxRuntime.jsxs("form", {
      onSubmit: e => {
        e.preventDefault();
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Label, {
        htmlFor: "token",
        color: "secondaryText",
        children: "Token"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
        id: "token",
        variant: "outline",
        fullWidth: true,
        style: {
          justifyContent: "flex-start",
          gap: formElements.spacing.sm,
          padding: formElements.spacing.sm
        },
        onClick: props.onTokenSelect,
        children: [props.token ? /*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
          src: props.token.icon,
          width: formElements.iconSize.lg,
          height: formElements.iconSize.lg
        }) : /*#__PURE__*/jsxRuntime.jsx(ChainIcon, {
          chain: chain,
          size: formElements.iconSize.lg
        }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          flex: "column",
          gap: "xs",
          children: [tokenName ? /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            size: "sm",
            color: "primaryText",
            children: tokenName
          }) : /*#__PURE__*/jsxRuntime.jsx(Skeleton, {
            height: formElements.fontSize.xs,
            width: "150px"
          }), balanceQuery.data ? /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            size: "xs",
            children: formatBalance(balanceQuery.data)
          }) : /*#__PURE__*/jsxRuntime.jsx(Skeleton, {
            height: formElements.fontSize.xs,
            width: "100px"
          })]
        })]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Label, {
        htmlFor: "receiever",
        color: "secondaryText",
        children: "Send to"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
        "data-error": showInvalidAddressError,
        required: true,
        id: "receiever",
        placeholder: isENSSupprted ? `0x... / ENS name` : "0x...",
        variant: "outline",
        value: receiverAddress,
        onChange: e => {
          setReceieverAddress(e.target.value);
        }
      }), showInvalidAddressError && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xs"
        }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
          color: "danger",
          size: "sm",
          children: [" ", "Invalid Address", " "]
        })]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Label, {
        htmlFor: "amount",
        color: "secondaryText",
        children: "Amount"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        relative: true,
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
          required: true,
          type: "number",
          id: "amount",
          variant: "outline",
          value: amount,
          onChange: e => {
            setAmount(e.target.value);
          }
        }), /*#__PURE__*/jsxRuntime.jsx(CurrencyBadge, {
          children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
            size: "xs",
            children: [" ", tokenSymbol, " "]
          })
        })]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
        fullWidth: true,
        variant: "accent",
        type: "submit",
        onClick: async () => {
          if (!receiverAddress || !wallet || !amount) {
            return;
          }
          await sendTokenMutation.mutateAsync();
        },
        style: {
          alignItems: "center",
          gap: formElements.spacing.sm
        },
        children: [sendTokenMutation.isLoading ? "Sending" : "Send", sendTokenMutation.isLoading && /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
          size: "sm",
          color: "accentButtonText"
        })]
      })]
    })]
  });
}
function getErrorMessage(error) {
  const message = error?.data?.message || error?.message;
  if (!message) {
    return "Transaction Failed";
  }
  if (message.includes("user rejected")) {
    return "Transaction Rejected";
  }
  if (message.includes("insufficient funds")) {
    return "Insufficient funds";
  }
  return "Transaction Failed";
}
function useNativeToken() {
  const balanceQuery = reactCore.useBalance();
  const chain = reactCore.useChain();
  if (balanceQuery.data) {
    return {
      name: balanceQuery.data.name,
      symbol: balanceQuery.data.symbol,
      address: sdk.NATIVE_TOKEN_ADDRESS,
      icon: chain?.icon?.url || ""
    };
  }
}
function useToken(tokenAddress) {
  const balanceQuery = reactCore.useBalance(tokenAddress);
  const chain = reactCore.useChain();
  if (!ethers.utils.isAddress(tokenAddress)) {
    return {
      isLoading: false,
      data: undefined
    };
  }
  if (balanceQuery.isLoading) {
    return {
      isLoading: true,
      data: undefined
    };
  }
  if (balanceQuery.data) {
    return {
      isLoading: false,
      data: {
        name: balanceQuery.data.name,
        symbol: balanceQuery.data.symbol,
        address: tokenAddress,
        icon: chain?.icon?.url || ""
      }
    };
  }
  return {
    isLoading: false,
    data: undefined
  };
}
function TokenSelector(props) {
  const [input, setInput] = React.useState("");
  const chainId = reactCore.useChainId();
  const nativeTokenInfo = useNativeToken();
  const {
    data: foundToken,
    isLoading: findingToken
  } = useToken(input);
  let tokenList = (chainId ? props.supportedTokens[chainId] : undefined) || [];
  if (nativeTokenInfo) {
    tokenList = [nativeTokenInfo, ...tokenList];
  }
  if (foundToken) {
    tokenList = [foundToken, ...tokenList];
  }
  const filteredList = input ? tokenList.filter(t => {
    const inputStr = input.toLowerCase();
    return t.name.toLowerCase().includes(inputStr) || t.symbol.toLowerCase().includes(inputStr) || t.address.includes(input);
  }) : tokenList;
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    animate: "fadein",
    children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      p: "lg",
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        onBack: props.onBack,
        title: "Select a Token"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
        placeholder: "Search or paste token address",
        variant: "outline",
        value: input,
        onChange: e => {
          setInput(e.target.value);
        }
      })]
    }), filteredList.length > 0 && /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      flex: "column",
      gap: "xs",
      p: "md",
      scrollY: true,
      style: {
        paddingTop: 0,
        paddingBottom: formElements.spacing.lg,
        maxHeight: "400px"
      },
      children: filteredList.map(token => {
        return /*#__PURE__*/jsxRuntime.jsx(SelectTokenButton, {
          onClick: () => props.onTokenSelect(token),
          token: token
        }, token.address);
      })
    }), findingToken && /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      animate: "fadein",
      p: "lg",
      flex: "column",
      gap: "md",
      center: "both",
      style: {
        minHeight: "150px",
        paddingTop: 0
      },
      color: "secondaryText",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
        size: "lg",
        color: "accentText"
      })
    }), filteredList.length === 0 && !findingToken && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      animate: "fadein",
      p: "lg",
      flex: "column",
      gap: "md",
      center: "both",
      style: {
        minHeight: "150px",
        paddingTop: 0
      },
      color: "secondaryText",
      children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.CrossCircledIcon, {
        width: formElements.iconSize.lg,
        height: formElements.iconSize.lg
      }), "No Tokens found"]
    })]
  });
}
function SelectTokenButton(props) {
  const balanceQuery = reactCore.useBalance(props.token?.address);
  const chain = reactCore.useChain();
  const tokenName = props.token?.name || balanceQuery.data?.name;
  return /*#__PURE__*/jsxRuntime.jsxs(SelectTokenBtn, {
    fullWidth: true,
    variant: "secondary",
    onClick: props.onClick,
    children: [props.token?.icon ? /*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
      width: formElements.iconSize.lg,
      height: formElements.iconSize.lg,
      src: props.token.icon
    }) : /*#__PURE__*/jsxRuntime.jsx(ChainIcon, {
      chain: chain,
      size: formElements.iconSize.lg
    }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      flex: "column",
      gap: "xs",
      children: [tokenName ? /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        size: "sm",
        color: "primaryText",
        children: tokenName
      }) : /*#__PURE__*/jsxRuntime.jsx(Skeleton, {
        height: formElements.fontSize.md,
        width: "150px"
      }), balanceQuery.data ? /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
        size: "xs",
        children: [" ", formatBalance(balanceQuery.data)]
      }) : /*#__PURE__*/jsxRuntime.jsx(Skeleton, {
        height: formElements.fontSize.xs,
        width: "100px"
      })]
    })]
  });
}
const SelectTokenBtn = styled__default["default"](formElements.Button)`
  background: transparent;
  justify-content: flex-start;
  gap: ${formElements.spacing.sm};
  padding: ${formElements.fontSize.xs};
  &:hover {
    background: ${p => p.theme.colors.secondaryButtonBg};
    transform: scale(1.01);
  }
  transition:
    background 200ms ease,
    transform 150ms ease;
`;
function formatBalance(balanceData) {
  return Number(balanceData.displayValue).toFixed(3) + " " + balanceData.symbol;
}
const CurrencyBadge = styled__default["default"].div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${formElements.spacing.sm};
`;

function ReceiveFunds(props) {
  const address = reactCore.useAddress();
  const isMob = formElements.isMobile();
  const {
    hasCopied,
    onCopy
  } = useClipboard(address || "");
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    p: "lg",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
      title: "Receive Funds"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "xl"
    }), !isMob && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
        flex: "row",
        center: "x",
        children: /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.QRCode, {
          qrCodeUri: address,
          size: 310,
          QRIcon: /*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
            src: props.iconUrl,
            width: formElements.iconSize.xxl,
            height: formElements.iconSize.xxl
          })
        })
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      })]
    }), /*#__PURE__*/jsxRuntime.jsxs(WalletAddressContianer, {
      onClick: onCopy,
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "primaryText",
        size: "md",
        children: shortenString(address || "")
      }), /*#__PURE__*/jsxRuntime.jsx(CopyIcon, {
        text: address || "",
        tip: "Copy address",
        hasCopied: hasCopied
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), !isMob ? /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
      multiline: true,
      center: true,
      children: ["Copy the wallet address or scan the ", /*#__PURE__*/jsxRuntime.jsx("br", {}), " QR code to send funds to this wallet."]
    }) : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
        multiline: true,
        center: true,
        children: ["Copy the wallet address to ", /*#__PURE__*/jsxRuntime.jsx("br", {}), "send funds to this wallet"]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      })]
    })]
  });
}
const WalletAddressContianer = styled__default["default"].button`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  padding: ${formElements.spacing.md};
  display: flex;
  justify-content: space-between;
  border: 1px solid ${p => p.theme.colors.borderColor};
  border-radius: ${formElements.radius.md};
  transition: border-color 200ms ease;
  &:hover {
    border-color: ${p => p.theme.colors.accentText};
  }
`;

function useENS() {
  const address = reactCore.useAddress();
  const supportedChains = reactCore.useSupportedChains();
  const {
    clientId
  } = reactCore.useWalletContext();
  const ethereum = supportedChains.find(chain => chain.chainId === 1);
  return reactQuery.useQuery({
    queryKey: ["ens", address, ethereum?.rpc],
    cacheTime: 60 * 60 * 24 * 1000,
    // 24h
    staleTime: 60 * 60 * 1000,
    // 1h
    retry: false,
    enabled: !!address,
    queryFn: async () => {
      if (!address) {
        return null;
      }
      const provider = evm.getChainProvider(1, {
        clientId,
        supportedChains: ethereum ? [{
          chainId: 1,
          rpc: [...ethereum.rpc],
          nativeCurrency: ethereum.nativeCurrency,
          slug: ethereum.slug
        }] : undefined
      });
      if (provider instanceof ethers.providers.JsonRpcProvider) {
        const [ens, avatarUrl] = await Promise.all([provider.lookupAddress(address), provider.getAvatar(address)]);
        return {
          ens,
          avatarUrl
        };
      }
      return {
        ens: await provider.lookupAddress(address),
        avatarUrl: null
      };
    }
  });
}

const TW_CONNECTED_WALLET = "tw-connected-wallet";
const ConnectedWalletDetails = props => {
  const chain = reactCore.useChain();
  const walletChainId = reactCore.useChainId();
  const disconnect = reactCore.useDisconnect();
  const chains$1 = reactCore.useSupportedChains();
  const address = reactCore.useAddress();
  const token = walletChainId && props.displayBalanceToken ? props.displayBalanceToken[walletChainId] : undefined;
  const balanceQuery = reactCore.useBalance(token);
  const activeWallet = reactCore.useWallet();
  const activeWalletConfig = reactCore.useWalletConfig();
  const ensQuery = useENS();
  const [wrapperWallet, setWrapperWallet] = React.useState();
  const walletContext = reactCore.useWalletContext();
  let activeWalletIconURL = activeWalletConfig?.meta.iconURL || "";

  // modals
  const [showNetworkSelector, setShowNetworkSelector] = React.useState(false);
  const [showExportModal, setShowExportModal] = React.useState(false);
  const [showSendModal, setShowSendModal] = React.useState(false);
  const [showReceiveModal, setShowReceiveModal] = React.useState(false);

  // dropdown
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const sdk = reactCore.useSDK();
  const personalWallet = activeWallet?.getPersonalWallet();
  const personalWalletConfig = personalWallet && walletContext.getWalletConfig(personalWallet);
  const wrapperWalletConfig = wrapperWallet && walletContext.getWalletConfig(wrapperWallet);
  const disableSwitchChain = !!personalWallet;
  const isActuallyMetaMask = activeWallet && activeWallet instanceof wallets.MetaMaskWallet;
  const shortAddress = address ? shortenString(address) : "";
  const isSmartWallet = activeWallet?.walletId === wallets.walletIds.smartWallet;
  if (isSmartWallet) {
    activeWalletIconURL = Tooltip.smartWalletIcon;
  }
  const addressOrENS = ensQuery.data?.ens || shortAddress;
  const avatarUrl = ensQuery.data?.avatarUrl;
  const trigger = props.detailsBtn ? /*#__PURE__*/jsxRuntime.jsx("div", {
    children: /*#__PURE__*/jsxRuntime.jsx(props.detailsBtn, {})
  }) : /*#__PURE__*/jsxRuntime.jsxs(WalletInfoButton, {
    type: "button",
    className: `${TW_CONNECTED_WALLET} ${props.className || ""}`,
    style: props.style,
    "data-test": "connected-wallet-details",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
      width: formElements.iconSize.lg,
      height: formElements.iconSize.lg,
      src: avatarUrl || activeWalletIconURL,
      className: `${TW_CONNECTED_WALLET}__wallet-icon`,
      style: {
        borderRadius: formElements.radius.sm
      }
    }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      flex: "column",
      gap: "xs",
      children: [activeWallet?.walletId === wallets.walletIds.localWallet ? /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "danger",
        size: "xs",
        style: {
          minWidth: "70px"
        },
        children: "Guest"
      }) : addressOrENS ? /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        size: "sm",
        color: "primaryText",
        weight: 500,
        className: `${TW_CONNECTED_WALLET}__address`,
        children: addressOrENS
      }) : /*#__PURE__*/jsxRuntime.jsx(Skeleton, {
        height: formElements.fontSize.sm,
        width: "88px"
      }), balanceQuery.data ? /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
        className: `${TW_CONNECTED_WALLET}__balance`,
        size: "xs",
        weight: 500,
        children: [Number(balanceQuery.data.displayValue).toFixed(3), " ", balanceQuery.data.symbol]
      }) : /*#__PURE__*/jsxRuntime.jsx(Skeleton, {
        height: formElements.fontSize.xs,
        width: "82px"
      })]
    })]
  });
  const networkSwitcherButton = /*#__PURE__*/jsxRuntime.jsx(Tooltip.ToolTip, {
    tip: disableSwitchChain ? "Network Switching is disabled" : "Switch Network",
    children: /*#__PURE__*/jsxRuntime.jsxs(MenuButton, {
      type: "button",
      disabled: disableSwitchChain,
      onClick: () => {
        setIsDropdownOpen(false);
        setShowNetworkSelector(true);
      },
      children: [/*#__PURE__*/jsxRuntime.jsx("div", {
        style: {
          display: "flex",
          alignItems: "center",
          position: "relative"
        },
        children: /*#__PURE__*/jsxRuntime.jsx(ChainIcon, {
          chain: chain,
          size: formElements.iconSize.md,
          active: true
        })
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        size: "sm",
        color: "primaryText",
        multiline: true,
        children: chain?.name || `Unknown chain #${walletChainId}`
      }), /*#__PURE__*/jsxRuntime.jsx(StyledChevronRightIcon, {
        width: formElements.iconSize.sm,
        height: formElements.iconSize.sm,
        style: {
          flexShrink: 0,
          marginLeft: "auto"
        }
      })]
    })
  });
  const content = /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      flex: "row",
      gap: "sm",
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
        width: formElements.iconSize.xl,
        height: formElements.iconSize.xl,
        src: avatarUrl || activeWalletIconURL,
        alt: "",
        style: {
          borderRadius: formElements.radius.sm
        }
      }), /*#__PURE__*/jsxRuntime.jsxs("div", {
        style: {
          flexGrow: 1
        },
        children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          gap: "xs",
          flex: "row",
          center: "y",
          children: [/*#__PURE__*/jsxRuntime.jsxs("div", {
            style: {
              display: "flex",
              gap: formElements.spacing.xs,
              alignItems: "center"
            },
            "data-test": "connected-wallet-address",
            "data-address": address,
            children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
              color: "primaryText",
              weight: 500,
              children: addressOrENS
            }), /*#__PURE__*/jsxRuntime.jsx(formElements.IconButton, {
              style: {
                padding: "3px"
              },
              "data-test": "copy-address",
              children: /*#__PURE__*/jsxRuntime.jsx(CopyIcon, {
                text: address || "",
                tip: "Copy Address",
                side: "bottom"
              })
            })]
          }), /*#__PURE__*/jsxRuntime.jsx(Tooltip.ToolTip, {
            tip: "Disconnect Wallet",
            side: "bottom",
            align: "end",
            sideOffset: 10,
            children: /*#__PURE__*/jsxRuntime.jsx(DisconnectIconButton, {
              type: "button",
              onClick: () => {
                disconnect();
                props.onDisconnect();
              },
              children: /*#__PURE__*/jsxRuntime.jsx(ExitIcon, {
                size: formElements.iconSize.md
              })
            })
          })]
        }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
          weight: 500,
          size: "sm",
          children: [" ", balanceQuery.data ? Number(balanceQuery.data.displayValue).toFixed(3) : /*#__PURE__*/jsxRuntime.jsx(Skeleton, {
            height: "1em",
            width: "100px"
          }), " ", balanceQuery.data?.symbol, " "]
        })]
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsxRuntime.jsx(ConnectedToSmartWallet, {}), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: formElements.spacing.sm
      },
      children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
        variant: "outline",
        style: {
          fontSize: formElements.fontSize.sm,
          display: "flex",
          gap: formElements.spacing.xs,
          alignItems: "center",
          padding: formElements.spacing.sm
        },
        onClick: () => {
          setShowSendModal(true);
          setIsDropdownOpen(false);
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.PaperPlaneIcon, {
          width: formElements.iconSize.sm,
          height: formElements.iconSize.sm,
          style: {
            transform: "translateY(-10%) rotate(-45deg) "
          }
        }), "Send"]
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
        variant: "outline",
        style: {
          fontSize: formElements.fontSize.sm,
          display: "flex",
          gap: formElements.spacing.xs,
          alignItems: "center",
          padding: formElements.spacing.sm
        },
        onClick: () => {
          setShowReceiveModal(true);
          setIsDropdownOpen(false);
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.PinBottomIcon, {
          width: formElements.iconSize.sm,
          height: formElements.iconSize.sm
        }), " Receive", " "]
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntime.jsx(DropdownLabel, {
        children: "Current Network"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xs"
      }), networkSwitcherButton]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "md"
    }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      flex: "column",
      gap: "sm",
      children: [personalWallet && personalWalletConfig && /*#__PURE__*/jsxRuntime.jsx(WalletSwitcher, {
        wallet: personalWallet,
        name: "Personal Wallet",
        onSwitch: () => {
          setWrapperWallet(activeWallet);
        }
      }), wrapperWalletConfig && wrapperWallet && /*#__PURE__*/jsxRuntime.jsx(WalletSwitcher, {
        name: wrapperWallet.walletId === wallets.walletIds.smartWallet ? "Smart Wallet" : wrapperWalletConfig.meta.name,
        wallet: wrapperWallet,
        onSwitch: () => {
          setWrapperWallet(undefined);
        }
      }), isActuallyMetaMask && activeWalletConfig && activeWalletConfig.isInstalled && activeWalletConfig.isInstalled() && !formElements.isMobile() && /*#__PURE__*/jsxRuntime.jsxs(MenuButton, {
        type: "button",
        onClick: () => {
          activeWallet.switchAccount();
          setIsDropdownOpen(false);
        },
        style: {
          fontSize: formElements.fontSize.sm
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          color: "secondaryText",
          children: /*#__PURE__*/jsxRuntime.jsx(reactIcons.ShuffleIcon, {
            width: formElements.iconSize.sm,
            height: formElements.iconSize.sm
          })
        }), "Switch Account"]
      }), !props.hideTestnetFaucet && (chain?.faucets && chain.faucets.length > 0 || chain?.chainId === chains.Localhost.chainId) && /*#__PURE__*/jsxRuntime.jsxs(MenuLink, {
        href: chain?.faucets ? chain.faucets[0] : "#",
        target: "_blank",
        as: "a",
        onClick: async e => {
          if (chain.chainId === chains.Localhost.chainId) {
            e.preventDefault();
            setIsDropdownOpen(false);
            await sdk?.wallet.requestFunds(10);
            await balanceQuery.refetch();
          }
        },
        style: {
          textDecoration: "none",
          color: "inherit",
          fontSize: formElements.fontSize.sm
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          flex: "row",
          center: "both",
          color: "secondaryText",
          children: /*#__PURE__*/jsxRuntime.jsx(FundsIcon, {
            size: formElements.iconSize.sm
          })
        }), "Request Testnet Funds"]
      }), chain?.explorers && /*#__PURE__*/jsxRuntime.jsxs(MenuLink, {
        href: chain.explorers[0].url + "/address/" + address,
        target: "_blank",
        as: "a",
        style: {
          textDecoration: "none",
          color: "inherit",
          fontSize: formElements.fontSize.sm
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          flex: "row",
          center: "both",
          color: "secondaryText",
          children: /*#__PURE__*/jsxRuntime.jsx(reactIcons.TextAlignLeftIcon, {
            width: formElements.iconSize.sm,
            height: formElements.iconSize.sm
          })
        }), "Transaction History"]
      }), activeWallet?.walletId === wallets.walletIds.localWallet && /*#__PURE__*/jsxRuntime.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntime.jsxs(MenuButton, {
          onClick: () => {
            setShowExportModal(true);
            setIsDropdownOpen(false);
          },
          style: {
            fontSize: formElements.fontSize.sm
          },
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
            flex: "row",
            center: "both",
            color: "secondaryText",
            children: /*#__PURE__*/jsxRuntime.jsx(reactIcons.PinBottomIcon, {
              width: formElements.iconSize.sm,
              height: formElements.iconSize.sm
            })
          }), "Backup wallet", " "]
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "sm"
        }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
          size: "xs",
          center: true,
          multiline: true,
          color: "danger",
          children: ["This is a temporary guest wallet ", /*#__PURE__*/jsxRuntime.jsx("br", {}), "Backup if you ", `don't `, "want to lose access to it"]
        })]
      })]
    })]
  });
  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [formElements.isMobile() ? /*#__PURE__*/jsxRuntime.jsx(Modal, {
      size: "compact",
      trigger: trigger,
      open: isDropdownOpen,
      setOpen: setIsDropdownOpen,
      hideCloseIcon: true,
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
        p: "lg",
        children: content
      })
    }) : /*#__PURE__*/jsxRuntime.jsxs(DropdownMenu__namespace.Root, {
      open: isDropdownOpen,
      onOpenChange: setIsDropdownOpen,
      children: [/*#__PURE__*/jsxRuntime.jsx(DropdownMenu__namespace.Trigger, {
        asChild: true,
        children: trigger
      }), /*#__PURE__*/jsxRuntime.jsx(DropdownMenu__namespace.Portal, {
        children: /*#__PURE__*/jsxRuntime.jsx(DropDownContent, {
          asChild: true,
          side: props.dropdownPosition?.side || "bottom",
          align: props.dropdownPosition?.align || "end",
          sideOffset: 10,
          children: content
        })
      })]
    }), showNetworkSelector && /*#__PURE__*/jsxRuntime.jsx(NetworkSelector, {
      theme: props.theme,
      chains: chains$1,
      ...props.networkSelector,
      onClose: () => setShowNetworkSelector(false)
    }), showExportModal && /*#__PURE__*/jsxRuntime.jsx(Modal, {
      size: "compact",
      open: true,
      setOpen: setShowExportModal,
      children: /*#__PURE__*/jsxRuntime.jsx(ExportLocalWallet, {
        modalSize: "compact",
        localWalletConfig: activeWalletConfig,
        onBack: () => {
          setShowExportModal(false);
        },
        onExport: () => {
          setShowExportModal(false);
        }
      })
    }), showSendModal && /*#__PURE__*/jsxRuntime.jsx(Modal, {
      size: "compact",
      open: true,
      setOpen: setShowSendModal,
      children: /*#__PURE__*/jsxRuntime.jsx(SendFunds, {
        supportedTokens: props.supportedTokens
      })
    }), showReceiveModal && /*#__PURE__*/jsxRuntime.jsx(Modal, {
      size: "compact",
      open: true,
      setOpen: setShowReceiveModal,
      children: /*#__PURE__*/jsxRuntime.jsx(ReceiveFunds, {
        iconUrl: activeWalletIconURL
      })
    })]
  });
};
const dropdownContentFade = react.keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const DropDownContent = styled__default["default"]( DropdownMenu__namespace.Content)`
  width: 320px;
  box-sizing: border-box;
  max-width: 100%;
  border-radius: ${formElements.radius.lg};
  padding: ${formElements.spacing.lg};
  animation: ${dropdownContentFade} 400ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.dropdownBg};
  --bg: ${props => props.theme.colors.dropdownBg};
  z-index: 1000000;
  line-height: 1;
`;
const WalletInfoButton = styled__default["default"].button`
  all: unset;
  background: ${props => props.theme.colors.connectedButtonBg};
  border: 1px solid ${props => props.theme.colors.borderColor};
  padding: ${formElements.spacing.sm} ${formElements.spacing.sm};
  border-radius: ${formElements.radius.lg};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  min-width: 180px;
  gap: ${formElements.spacing.sm};
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  line-height: 1;
  animation: ${formElements.fadeInAnimation} 300ms ease;

  ${formElements.media.mobile} {
    gap: ${formElements.spacing.sm};
    padding: ${formElements.spacing.xs} ${formElements.spacing.sm};
    img {
      width: ${formElements.iconSize.md}px;
      height: ${formElements.iconSize.md}px;
    }
  }

  &:hover {
    transition: background 250ms ease;
    background: ${props => props.theme.colors.connectedButtonBgHover};
  }
`;
const DropdownLabel = styled__default["default"].label`
  font-size: ${formElements.fontSize.sm};
  color: ${props => props.theme.colors.secondaryText};
  font-weight: 500;
`;
const MenuButton = styled__default["default"].button`
  all: unset;
  padding: ${formElements.spacing.sm} ${formElements.spacing.sm};
  border-radius: ${formElements.radius.md};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  font-size: ${formElements.fontSize.md};
  font-weight: 500;
  color: ${props => props.theme.colors.primaryText} !important;
  gap: ${formElements.spacing.sm};
  -webkit-tap-highlight-color: transparent;
  line-height: 1.3;

  &:not([disabled]):hover {
    transition:
      box-shadow 250ms ease,
      border-color 250ms ease;
    border: 1px solid ${props => props.theme.colors.accentText};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.accentText};
  }

  &[disabled] {
    cursor: not-allowed;
    svg {
      display: none;
    }
  }

  &[disabled]:hover {
    transition:
      box-shadow 250ms ease,
      border-color 250ms ease;
    border: 1px solid ${props => props.theme.colors.danger};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.danger};
  }
`;
const MenuLink = /* @__PURE__ */MenuButton.withComponent("a");
styled__default["default"]( DropdownMenu__namespace.Item)`
  outline: none;
`;
const StyledChevronRightIcon = styled__default["default"]( reactIcons.ChevronRightIcon)`
  color: ${props => props.theme.colors.secondaryText};
`;
const DisconnectIconButton = styled__default["default"](formElements.IconButton)`
  margin-right: -${formElements.spacing.xxs};
  margin-left: auto;
  color: ${props => props.theme.colors.secondaryText};
  &:hover {
    color: ${props => props.theme.colors.danger};
    background: none;
  }
`;
function WalletSwitcher(_ref) {
  let {
    wallet,
    onSwitch,
    name
  } = _ref;
  const walletContext = reactCore.useWalletContext();
  return /*#__PURE__*/jsxRuntime.jsxs(MenuButton, {
    type: "button",
    onClick: () => {
      walletContext.setConnectedWallet(wallet);
      onSwitch();
    },
    style: {
      fontSize: formElements.fontSize.sm
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      color: "secondaryText",
      children: /*#__PURE__*/jsxRuntime.jsx(reactIcons.EnterIcon, {
        width: formElements.iconSize.sm,
        height: formElements.iconSize.sm
      })
    }), "Switch to ", name]
  });
}
const ActiveDot = styled__default["default"].div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.success};
`;
function ConnectedToSmartWallet() {
  const activeWallet = reactCore.useWallet();
  const chain = reactCore.useChain();
  const address = reactCore.useAddress();
  const [showConnectedToSmartWallet, setShowConnectedToSmartWallet] = React.useState(false);
  React.useEffect(() => {
    if (activeWallet && activeWallet.walletId === wallets.walletIds.smartWallet) {
      const smartWallet = activeWallet;
      smartWallet.isDeployed().then(isDeployed => {
        setShowConnectedToSmartWallet(isDeployed);
      });
    } else {
      setShowConnectedToSmartWallet(false);
    }
  }, [activeWallet]);
  if (showConnectedToSmartWallet && chain && address) {
    return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Link, {
        color: "secondaryText",
        hoverColor: "primaryText",
        href: `https://thirdweb.com/${chain.slug}/${address}/account`,
        target: "_blank",
        size: "sm",
        children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          flex: "row",
          gap: "xs",
          center: "y",
          style: {
            width: "100%",
            justifyContent: "space-between"
          },
          children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
            flex: "row",
            gap: "xs",
            center: "y",
            children: [/*#__PURE__*/jsxRuntime.jsx(ActiveDot, {}), "Connected to Smart Wallet"]
          }), /*#__PURE__*/jsxRuntime.jsx(reactIcons.ChevronRightIcon, {
            width: formElements.iconSize.sm,
            height: formElements.iconSize.sm
          })]
        })
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "md"
      })]
    });
  }
  return null;
}

const LockIcon = props => {
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 16 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M2 21C1.45 21 0.979333 20.8043 0.588 20.413C0.196 20.021 0 19.55 0 19V9C0 8.45 0.196 7.979 0.588 7.587C0.979333 7.19567 1.45 7 2 7H3V5C3 3.61667 3.48767 2.43733 4.463 1.462C5.43767 0.487333 6.61667 0 8 0C9.38333 0 10.5627 0.487333 11.538 1.462C12.5127 2.43733 13 3.61667 13 5V7H14C14.55 7 15.021 7.19567 15.413 7.587C15.8043 7.979 16 8.45 16 9V19C16 19.55 15.8043 20.021 15.413 20.413C15.021 20.8043 14.55 21 14 21H2ZM8 16C8.55 16 9.021 15.8043 9.413 15.413C9.80433 15.021 10 14.55 10 14C10 13.45 9.80433 12.979 9.413 12.587C9.021 12.1957 8.55 12 8 12C7.45 12 6.97933 12.1957 6.588 12.587C6.196 12.979 6 13.45 6 14C6 14.55 6.196 15.021 6.588 15.413C6.97933 15.8043 7.45 16 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z",
      fill: "currentColor"
    })
  });
};

const SignatureModal = props => {
  const walletConfig = reactCore.useWalletConfig();
  return /*#__PURE__*/jsxRuntime.jsx(Modal, {
    size: "compact",
    open: props.open,
    setOpen: props.setOpen,
    children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      p: "lg",
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        flex: "column",
        center: "x",
        children: [walletConfig && /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.WalletLogoSpinner, {
          error: false,
          onRetry: () => {},
          iconUrl: walletConfig.meta.iconURL
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xxl"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.ModalTitle, {
          children: "Signature Request"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "md"
        }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
          multiline: true,
          center: true,
          children: ["Sign the signature request ", /*#__PURE__*/jsxRuntime.jsx("br", {}), " in your wallet"]
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "lg"
        })]
      })]
    })
  });
};

const TW_CONNECT_WALLET = "tw-connect-wallet";

/**
 * A component that allows the user to connect their wallet.
 *
 * The button must be descendant of `ThirdwebProvider` in order to function.
 */
const ConnectWallet = props => {
  const activeWallet = reactCore.useWallet();
  const contextTheme = react.useTheme();
  const theme = props.theme || contextTheme || "dark";
  const connectionStatus = reactCore.useConnectionStatus();
  const walletConfigs = reactCore.useWallets();
  const isLoading = connectionStatus === "connecting" || connectionStatus === "unknown";
  const btnTitle = props.btnTitle || "Connect Wallet";
  const setIsWalletModalOpen = formElements.useSetIsWalletModalOpen();
  const setModalConfig = React.useContext(formElements.SetModalConfigCtx);
  const address = reactCore.useAddress();
  const [showSignatureModal, setShowSignatureModal] = React.useState(false);
  const authConfig = reactCore.useThirdwebAuthContext();
  const {
    user
  } = reactCore.useUser();
  const {
    login
  } = reactCore.useLogin();
  const {
    logout
  } = reactCore.useLogout();
  const isNetworkMismatch = reactCore.useNetworkMismatch();
  const {
    activeChainSetExplicitly
  } = reactCore.useWalletContext();
  const requiresSignIn = props.auth?.loginOptional ? false : !!authConfig?.authUrl && !!address && !user?.address;
  const signIn = async () => {
    try {
      setShowSignatureModal(true);
      const token = await login();
      props?.auth?.onLogin?.(token);
    } catch (err) {
      console.error("failed to log in", err);
    }
    setShowSignatureModal(false);
  };
  const supportedTokens = React.useMemo(() => {
    if (!props.supportedTokens) {
      return defaultTokens;
    }
    const tokens = {
      ...defaultTokens
    };
    for (const k in props.supportedTokens) {
      const key = Number(k);
      tokens[key] = props.supportedTokens[key];
    }
    return tokens;
  }, [props.supportedTokens]);
  return /*#__PURE__*/jsxRuntime.jsxs(CustomThemeProvider, {
    theme: theme,
    children: [showSignatureModal && /*#__PURE__*/jsxRuntime.jsx(SignatureModal, {
      open: showSignatureModal,
      setOpen: setShowSignatureModal
    }), (() => {
      // wallet is not connected
      if (!activeWallet) {
        // Connect Wallet button
        return /*#__PURE__*/jsxRuntime.jsx(AnimatedButton, {
          disabled: isLoading,
          className: `${props.className || ""} ${TW_CONNECT_WALLET}`,
          "data-theme": theme,
          "data-is-loading": isLoading,
          variant: "primary",
          type: "button",
          style: {
            minWidth: "140px",
            ...props.style
          },
          "aria-label": connectionStatus === "connecting" ? "Connecting" : btnTitle,
          onClick: () => {
            let modalSize = props.modalSize || "wide";
            if (formElements.isMobile() || walletConfigs.length === 1) {
              modalSize = "compact";
            }
            setModalConfig({
              title: props.modalTitle || formElements.defaultModalTitle,
              theme,
              data: undefined,
              modalSize,
              termsOfServiceUrl: props.termsOfServiceUrl,
              privacyPolicyUrl: props.privacyPolicyUrl,
              welcomeScreen: props.welcomeScreen,
              titleIconUrl: props.modalTitleIconUrl
            });
            setIsWalletModalOpen(true);
          },
          "data-test": "connect-wallet-button",
          children: isLoading ? /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
            size: "sm",
            color: "primaryButtonText"
          }) : btnTitle
        });
      }

      // switch network button
      if (props.switchToActiveChain && isNetworkMismatch && activeChainSetExplicitly) {
        return /*#__PURE__*/jsxRuntime.jsx(SwitchNetworkButton, {
          style: props.style,
          className: props.className
        });
      }

      // sign in button
      else if (requiresSignIn) {
        return /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
          variant: "primary",
          onClick: signIn,
          "data-theme": theme,
          className: `${TW_CONNECT_WALLET}--sign-in ${props.className || ""}`,
          style: props.style,
          "data-test": "sign-in-button",
          children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
            flex: "row",
            center: "y",
            gap: "sm",
            style: {
              paddingRight: formElements.spacing.xs,
              borderRight: "1px solid",
              marginRight: formElements.spacing.xs
            },
            children: [/*#__PURE__*/jsxRuntime.jsx(LockIcon, {
              size: formElements.iconSize.sm
            }), /*#__PURE__*/jsxRuntime.jsx("span", {
              children: " Sign in "
            })]
          }), /*#__PURE__*/jsxRuntime.jsx("span", {
            children: shortenAddress(address || "", true)
          })]
        });
      }

      // wallet details button
      return /*#__PURE__*/jsxRuntime.jsx(ConnectedWalletDetails, {
        theme: theme,
        networkSelector: props.networkSelector,
        dropdownPosition: props.dropdownPosition,
        className: props.className,
        style: props.style,
        detailsBtn: props.detailsBtn,
        hideTestnetFaucet: props.hideTestnetFaucet,
        supportedTokens: supportedTokens,
        displayBalanceToken: props.displayBalanceToken,
        onDisconnect: () => {
          if (authConfig?.authUrl) {
            logout();
            props?.auth?.onLogout?.();
          }
        }
      });
    })()]
  });
};
function SwitchNetworkButton(props) {
  const {
    activeChain
  } = reactCore.useWalletContext();
  const switchChain = reactCore.useSwitchChain();
  const [switching, setSwitching] = React.useState(false);
  return /*#__PURE__*/jsxRuntime.jsx(AnimatedButton, {
    className: `${TW_CONNECT_WALLET}--switch-network ${props.className || ""}`,
    variant: "primary",
    type: "button",
    "data-is-loading": switching,
    "data-test": "switch-network-button",
    disabled: switching,
    onClick: async () => {
      setSwitching(true);
      try {
        await switchChain(activeChain.chainId);
      } catch {
        // ignore
      }
      setSwitching(false);
    },
    style: {
      minWidth: "140px",
      ...props.style
    },
    "aria-label": switching ? "Switching Network" : undefined,
    children: switching ? /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
      size: "sm",
      color: "primaryButtonText"
    }) : "Switch Network"
  });
}
const AnimatedButton = styled__default["default"](formElements.Button)`
  animation: ${formElements.fadeInAnimation} 300ms ease;
`;

const GlobeIcon = props => {
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    width: props.size,
    height: props.size,
    viewBox: "0 0 129 131",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M59.7178 0C62.7511 0 65.788 0 68.8212 0C71.4429 0.423181 74.1011 0.679982 76.6755 1.29848C103.785 7.78725 120.277 24.7723 126.755 51.5485C127.428 54.3335 127.712 57.2089 128.175 60.0446V69.8103C127.803 72.1722 127.472 74.5449 127.057 76.8995C122.582 102.298 103.177 122.722 77.9136 128.56C74.8003 129.28 71.6104 129.67 68.457 130.213H59.3537C57.3838 129.913 55.4065 129.663 53.4475 129.305C27.0442 124.491 6.91125 104.974 1.44197 78.8526C0.841148 75.9808 0.473373 73.0656 0 70.1684C0 66.9132 0 63.6579 0 60.4027C0.371416 58.0408 0.706418 55.6718 1.11425 53.3135C5.52026 28.0493 24.9905 7.50151 50.0902 1.70719C53.2618 0.97657 56.5062 0.560624 59.7178 0ZM96.8813 10.3119C96.8959 10.2865 96.9104 10.2576 96.9286 10.2323C96.8886 10.2504 96.8522 10.2648 96.8121 10.2829C96.8085 10.2287 96.8048 10.178 96.8012 10.1238C96.8303 10.1853 96.8558 10.2504 96.8849 10.3119H96.8813ZM25.1762 115.709C25.2089 115.716 25.2454 115.72 25.2781 115.727C25.249 115.749 25.2235 115.771 25.1944 115.792C25.2053 115.767 25.2162 115.742 25.2271 115.716C25.1252 115.525 25.0196 115.333 24.9176 115.141C22.7328 113.087 21.127 110.421 18.3305 109.014C18.2977 109.032 18.2613 109.05 18.2285 109.065C18.2758 109.058 18.3232 109.054 18.3705 109.047C18.4397 109.365 18.3997 109.795 18.5926 109.984C20.3587 111.687 22.1502 113.362 23.9745 115.004C24.1675 115.177 24.5972 115.083 24.9176 115.116C25.0014 115.311 25.0851 115.51 25.1725 115.706L25.1762 115.709ZM27.594 12.4567L27.2262 12.9197C27.1898 13.1439 27.1571 13.3682 27.1206 13.5924C26.8038 13.5924 26.4871 13.596 26.1703 13.5996C26.0683 13.813 25.9663 14.0264 25.8607 14.2362L25.7661 14.2652L25.8243 14.1856C25.9336 13.9686 26.0428 13.7479 26.1557 13.5309C26.4688 13.5418 26.7856 13.5526 27.0988 13.5671C27.1243 13.332 27.1498 13.0969 27.1753 12.8618C27.2954 12.7352 27.412 12.6122 27.5321 12.4856C27.543 12.511 27.554 12.5399 27.5649 12.5652C27.5758 12.529 27.5831 12.4893 27.594 12.4531V12.4567ZM106.589 111.926C106.738 111.868 106.891 111.806 107.041 111.749C107.616 111.354 108.286 111.043 108.756 110.548C110.281 108.924 111.771 107.26 113.205 105.553C113.919 104.703 114.483 103.726 115.113 102.808C113.981 103.448 112.849 104.084 111.716 104.725C111.669 104.753 111.632 104.811 111.6 104.862C110.088 107.166 108.577 109.474 107.07 111.778L106.556 111.958L106.625 112.06L106.589 111.926ZM79.6906 2.95141C79.6906 2.92971 79.6906 2.90801 79.6906 2.88631C79.6724 2.89716 79.6505 2.91163 79.6323 2.92248C79.8253 2.9478 80.0146 2.97311 80.2076 2.99843C80.0328 2.98397 79.8617 2.96588 79.6869 2.95141H79.6906ZM95.1662 8.90488C95.1116 8.90488 95.0533 8.89764 94.9987 8.90849C94.9732 8.91211 94.955 8.94828 94.9368 8.96998C95.0242 8.93381 95.1116 8.89764 95.199 8.86147C95.301 9.07125 95.3956 9.28827 95.5194 9.49082C95.5376 9.51975 95.6796 9.47273 95.7634 9.45827C95.5668 9.2738 95.3665 9.08934 95.1699 8.90126L95.1662 8.90488ZM86.7729 124.603C85.8772 124.921 84.9778 125.229 84.0893 125.565C83.94 125.623 83.8417 125.811 83.7215 125.941C83.8562 125.988 84.031 126.111 84.1184 126.068C85.0069 125.605 85.8808 125.117 86.7584 124.636C86.8021 124.621 86.8494 124.592 86.8895 124.596C86.9259 124.6 86.9623 124.643 86.9951 124.665C86.9186 124.643 86.8458 124.621 86.7693 124.603H86.7729ZM82.2431 4.35478L82.2941 4.31138V4.32223C82.5672 4.5935 82.793 5.00583 83.1207 5.11072C85.8189 5.99325 88.5317 6.82153 91.2445 7.6498C91.4193 7.70406 91.6341 7.64257 91.8271 7.63172C91.6596 7.46896 91.514 7.25917 91.3173 7.14705C88.4844 5.599 85.4912 4.56456 82.2395 4.35116L82.2431 4.35478ZM29.9609 10.9991C30.2995 11.0135 30.6928 11.1438 30.9732 11.0208C33.8389 9.75847 36.6937 8.46361 39.5376 7.15428C39.9054 6.98429 40.2331 6.70217 40.5244 6.41643C40.7319 6.21388 40.8412 5.91729 40.9941 5.66049C40.6664 5.68943 40.2913 5.62432 40.0219 5.76177C36.6573 7.49066 33.3109 9.2521 29.9609 11.0027C29.9864 11.0461 30.0119 11.0895 30.041 11.1293C30.0701 11.1655 30.1102 11.1944 30.1466 11.2233L29.9609 10.9991ZM8.93219 95.5918C8.89213 95.628 8.84844 95.6677 8.80838 95.7039C8.85208 95.6641 8.89942 95.6243 8.94311 95.5845C8.99773 96.0801 8.91398 96.6443 9.12882 97.0566C11.7397 102.034 14.7984 106.641 19.9509 109.43C19.9436 109.437 19.9363 109.445 19.9327 109.455C19.7579 108.913 19.6413 108.345 19.401 107.828C18.4943 105.875 17.6204 103.903 16.5899 102.015C16.1347 101.18 15.4283 100.417 14.6746 99.82C12.8102 98.3479 10.8512 96.9915 8.93219 95.5918ZM23.0533 112.295C23.097 112.248 23.1407 112.201 23.1844 112.15C23.1443 112.19 23.1006 112.23 23.0606 112.269C23.279 112.472 23.5449 112.646 23.7087 112.888C27.1206 117.861 32.1275 120.35 37.7861 121.818C38.1648 121.916 38.5763 121.887 38.9732 121.919C38.813 121.608 38.6709 121.283 38.4925 120.983C37.7861 119.789 37.1525 118.541 36.3259 117.434C35.8344 116.776 35.1206 116.125 34.3669 115.843C31.1917 114.657 27.9691 113.597 24.7501 112.53C24.2149 112.353 23.6177 112.367 23.0496 112.291L23.0533 112.295ZM69.8298 86.3252C73.0378 86.3252 75.4666 86.2927 77.8917 86.3397C78.9514 86.3614 79.4029 86.025 79.4284 84.9074C79.5049 81.4134 79.6432 77.9195 79.818 74.4291C79.8763 73.25 79.4757 72.9353 78.2777 72.8919C71.4903 72.6605 64.7065 72.353 57.9227 71.9986C56.8048 71.9407 56.2804 72.1107 56.204 73.3477C55.9855 76.8344 55.7015 80.3211 55.341 83.797C55.2135 85.0267 55.665 85.3595 56.8048 85.4282C61.4074 85.7067 66.0028 86.0539 69.8262 86.3216L69.8298 86.3252ZM69.9245 72.2192C72.2076 72.2192 74.9969 72.1505 77.7789 72.2481C79.2937 72.3024 79.9527 71.9371 79.869 70.2697C79.7015 66.9638 79.6796 63.6507 79.7088 60.3412C79.7197 58.8836 79.2536 58.4315 77.7315 58.3881C71.6177 58.2217 65.5076 57.9251 59.4011 57.5779C58.1994 57.5092 57.828 57.8274 57.7224 58.9776C57.3838 62.6307 56.9832 66.2838 56.528 69.9261C56.3897 71.0401 56.8776 71.2571 57.8171 71.3222C61.6842 71.5862 65.5513 71.8937 69.9281 72.2228L69.9245 72.2192ZM55.3956 74.3749C55.4247 74.0892 55.432 73.5394 55.5412 73.0149C55.7415 72.0564 55.2936 71.7852 54.4088 71.6333C47.8471 70.5048 41.2927 69.3401 34.742 68.1429C33.9481 67.9982 33.4748 68.0019 33.3655 68.9459C32.9249 72.6496 32.4115 76.3461 32.0401 80.0571C32 80.473 32.6118 81.2905 33.0269 81.3664C39.7488 82.6396 46.4852 83.8151 53.2181 85.0267C54.2267 85.2076 54.6091 84.8531 54.671 83.8115C54.853 80.7479 55.1334 77.688 55.3956 74.3749ZM54.143 71.2065C55.4757 71.3511 55.7634 70.7073 55.8726 69.5788C56.2222 65.9294 56.6264 62.2835 57.0888 58.6449C57.2272 57.5489 56.7429 57.3645 55.8253 57.2089C49.8644 56.1926 43.9108 55.1437 37.9718 54.0297C37.0178 53.8488 36.6464 54.0731 36.4461 54.9484C35.6122 58.5798 34.7638 62.2075 33.9008 65.8317C33.6823 66.754 33.8753 67.2966 34.9131 67.4955C41.3255 68.7144 47.7342 69.9659 54.1466 71.2101L54.143 71.2065ZM68.519 99.3606C71.5449 99.3606 73.97 99.3172 76.3915 99.3787C77.564 99.4077 78.1612 99.0894 78.2595 97.8198C78.5035 94.702 78.8203 91.5879 79.1808 88.4809C79.3119 87.3524 78.9514 87.0558 77.8262 87.0161C70.8093 86.7629 63.7925 86.4554 56.7793 86.0901C55.6286 86.0286 55.1334 86.2565 55.0897 87.4646C54.9805 90.5896 54.813 93.7146 54.5981 96.836C54.518 97.9753 54.8676 98.4094 56.0656 98.4781C60.417 98.7277 64.7611 99.0857 68.5153 99.3606H68.519ZM80.5244 79.623H80.4261C80.3278 81.3664 80.2659 83.1134 80.1202 84.8531C80.0365 85.8442 80.3023 86.318 81.3947 86.2095C87.7816 85.5621 94.1721 84.9616 100.555 84.2636C101.007 84.2129 101.728 83.4968 101.739 83.0772C101.826 79.3482 101.779 75.6155 101.772 71.8864C101.772 71.1486 101.488 70.852 100.654 70.9388C94.3287 71.5935 88.0001 72.2083 81.6678 72.8015C80.8339 72.8811 80.4989 73.1849 80.5171 74.0277C80.5572 75.894 80.5281 77.7603 80.5281 79.6267L80.5244 79.623ZM80.3788 65.1156C80.437 65.1156 80.4953 65.1156 80.5536 65.1156C80.5536 66.9819 80.5936 68.8518 80.5353 70.7182C80.5062 71.6911 80.7393 72.2011 81.8389 72.089C88.0474 71.4633 94.2559 70.852 100.468 70.2624C101.418 70.172 101.699 69.7271 101.579 68.8374C101.058 65.0794 100.559 61.3178 100.057 57.5598C99.9473 56.7424 99.5795 56.5217 98.7056 56.6158C93.0433 57.2234 87.3738 57.7768 81.7006 58.2868C80.7138 58.3772 80.3096 58.6557 80.3533 59.6938C80.4297 61.4986 80.3751 63.3071 80.3751 65.1119L80.3788 65.1156ZM54.1393 91.8881C54.1393 91.8881 54.1466 91.8881 54.1503 91.8881C54.2413 90.2677 54.2959 88.6401 54.4416 87.0233C54.518 86.1805 54.2304 85.8767 53.3892 85.7357C46.6527 84.5819 39.9199 83.4027 33.198 82.173C32.1675 81.9849 31.7342 82.173 31.7379 83.2581C31.7451 86.5639 31.6687 89.8734 31.7379 93.1793C31.7488 93.6386 32.3496 94.4054 32.7829 94.485C39.3774 95.7365 45.99 96.8939 52.599 98.0802C53.5385 98.2502 53.9026 97.8777 53.9136 96.93C53.9391 95.2482 54.0592 93.5663 54.1393 91.8844V91.8881ZM70.1758 44.2893C66.5199 44.018 63.8508 43.8878 61.2035 43.5912C60.0929 43.4682 59.7106 43.7395 59.5831 44.8391C59.1717 48.3656 58.7019 51.8884 58.1594 55.3969C57.9773 56.5724 58.4033 56.8653 59.4702 56.9087C65.6423 57.1619 71.8144 57.4404 77.9864 57.7406C79.2063 57.8021 79.5631 57.3211 79.4612 56.1492C79.1516 52.6118 78.8822 49.0709 78.6819 45.5263C78.62 44.4412 78.1102 44.264 77.1817 44.2784C74.5162 44.3182 71.8508 44.2929 70.1758 44.2929V44.2893ZM82.6983 99.3715C87.9782 98.7168 93.2582 98.0513 98.5417 97.4147C99.4084 97.3098 100.006 97.0747 100.14 96.0728C100.585 92.7995 101.091 89.5334 101.579 86.2637C101.728 85.2655 101.458 84.9182 100.319 85.0412C94.0665 85.714 87.8107 86.3397 81.544 86.8678C80.2695 86.9763 79.9163 87.4428 79.8471 88.593C79.7088 90.8717 79.5085 93.1504 79.2427 95.4182C78.7912 99.2919 78.762 99.2883 82.6983 99.3715ZM58.9495 44.0035C58.9714 43.4682 58.9714 43.4755 57.6423 43.2368C52.6427 42.3398 47.6396 41.4681 42.6509 40.5168C41.6823 40.3324 41.2308 40.553 40.9213 41.4789C39.7633 44.9584 38.5617 48.4234 37.3309 51.8776C37.0105 52.7782 37.1999 53.2159 38.1539 53.3822C44.1694 54.4311 50.1776 55.5162 56.204 56.5109C56.5499 56.5688 57.3146 56.019 57.3692 55.6754C57.9372 51.9318 58.4033 48.1739 58.9532 44.0035H58.9495ZM83.798 57.7225C88.5499 57.1619 93.3019 56.6122 98.0538 56.0371C98.8767 55.9358 99.8308 55.9539 99.4484 54.5903C98.4289 50.9372 97.4603 47.2696 96.488 43.6057C96.2732 42.7919 95.8071 42.6472 95.0097 42.734C90.2541 43.2476 85.4948 43.7504 80.7283 44.1518C79.6177 44.2459 79.2572 44.5497 79.3738 45.6637C79.6651 48.4777 79.8981 51.2989 80.0693 54.1237C80.2841 57.6647 80.2477 57.6683 83.798 57.7189V57.7225ZM32.6154 68.0344C32.437 67.9259 31.9673 67.5244 31.4283 67.3255C26.538 65.546 21.6222 63.8279 16.7392 62.0231C15.8835 61.7084 15.421 61.571 15.2535 62.6669C14.711 66.2404 14.092 69.7995 13.5895 73.3766C13.5239 73.8396 13.8443 74.7004 14.1939 74.8306C19.5175 76.8344 24.8667 78.7622 30.2376 80.643C30.467 80.7226 31.188 80.2162 31.2244 79.9233C31.7124 76.1617 32.1202 72.3856 32.6154 68.0308V68.0344ZM32.6919 66.8951C32.8485 66.5189 33.0851 66.1174 33.1907 65.687C34.0574 62.0629 34.8439 58.417 35.7797 54.8073C36.0565 53.7403 35.6705 53.5052 34.7893 53.1978C30.2813 51.6389 25.777 50.0547 21.3164 48.3692C20.3223 47.993 19.9181 48.116 19.594 49.0781C18.4324 52.554 17.249 56.0262 16.0364 59.4876C15.6759 60.5148 16.0328 61.0465 17.005 61.3901C21.9026 63.1226 26.7893 64.8768 31.6832 66.6202C31.909 66.6998 32.1493 66.7468 32.6955 66.8915L32.6919 66.8951ZM67.1207 110.645C69.8116 110.645 72.2404 110.598 74.6619 110.667C75.7324 110.696 76.1767 110.298 76.3405 109.282C76.7738 106.605 77.2363 103.936 77.7679 101.278C77.9828 100.207 77.5203 100.098 76.6282 100.062C69.7242 99.7874 62.8239 99.4836 55.9236 99.1364C54.9259 99.0857 54.5035 99.2774 54.5071 100.359C54.5144 102.949 54.467 105.538 54.3287 108.124C54.2595 109.383 54.7292 109.817 55.9527 109.886C59.7652 110.099 63.574 110.396 67.1207 110.642V110.645ZM53.615 104.106C53.6769 104.106 53.7351 104.106 53.797 104.106C53.797 102.844 53.7351 101.578 53.8153 100.319C53.8772 99.3642 53.6113 98.9483 52.5918 98.7783C46.0264 97.6679 39.472 96.5141 32.9249 95.306C31.8871 95.1143 31.7706 95.4471 31.8835 96.2935C32.2658 99.093 32.6518 101.892 32.9759 104.699C33.0924 105.712 33.6059 106.15 34.5672 106.32C40.4698 107.358 46.3651 108.407 52.2604 109.488C53.3637 109.691 53.655 109.257 53.6223 108.258C53.5786 106.877 53.6113 105.491 53.6113 104.106H53.615ZM30.9586 87.8552C30.9805 87.8552 31.0059 87.8552 31.0278 87.8552C31.0278 86.2927 30.9513 84.7229 31.0533 83.164C31.1225 82.0717 30.7583 81.6304 29.6951 81.2688C24.6627 79.5543 19.6596 77.7495 14.6746 75.9085C13.7351 75.5612 13.3309 75.5793 13.3673 76.6716C13.4766 80.0354 13.5166 83.4027 13.7169 86.7629C13.7497 87.3199 14.3359 88.1337 14.8566 88.329C19.8307 90.2026 24.8448 91.964 29.8444 93.7761C30.7474 94.1052 31.0096 93.8267 30.9768 92.908C30.9186 91.2262 30.9622 89.5407 30.9622 87.8552H30.9586ZM40.6009 40.2564C40.1785 40.0719 39.7524 39.8622 39.3118 39.703C35.554 38.343 31.7706 37.0518 28.0492 35.5978C27.0587 35.2108 26.6436 35.417 26.2103 36.2308C24.477 39.4752 22.7547 42.7268 20.9595 45.935C20.3769 46.9803 20.701 47.4396 21.7023 47.7941C26.152 49.3674 30.6054 50.9372 35.0369 52.5684C36.0783 52.9518 36.3915 52.5467 36.6901 51.6497C37.848 48.1594 39.0715 44.6944 40.2695 41.2185C40.3496 40.9906 40.4261 40.7628 40.6045 40.26L40.6009 40.2564ZM117.997 64.3632C117.018 60.4172 116.082 56.5688 115.062 52.742C115.004 52.5214 114.236 52.2791 113.897 52.3767C109.786 53.5776 105.69 54.8218 101.611 56.1275C101.233 56.2505 100.734 56.9124 100.774 57.2704C101.225 61.1478 101.753 65.0179 102.332 68.8772C102.383 69.2063 103.039 69.7633 103.257 69.6982C107.882 68.331 112.488 66.9023 117.083 65.4302C117.422 65.3217 117.63 64.8045 117.994 64.3632H117.997ZM81.0087 110.443C81.016 110.501 81.0269 110.555 81.0342 110.613C85.666 110.034 90.3014 109.484 94.9222 108.848C95.4903 108.768 96.3205 108.367 96.4807 107.918C97.5513 104.978 98.4762 101.983 99.4339 99.0025C99.6523 98.3262 99.4776 98.0296 98.651 98.1164C92.3187 98.7602 85.9828 99.3425 79.6541 100.015C79.2463 100.059 78.6601 100.641 78.5654 101.061C78.1539 102.88 77.8808 104.732 77.5859 106.576C77.3783 107.86 77.2181 109.155 77.036 110.443H81.0051H81.0087ZM102.518 77.131C102.518 77.131 102.529 77.131 102.533 77.131C102.533 78.9973 102.54 80.86 102.529 82.7264C102.525 83.3485 102.423 84.0827 103.414 83.7789C108.148 82.3249 112.878 80.8528 117.582 79.3156C117.946 79.1962 118.354 78.5126 118.351 78.0967C118.311 74.4291 118.172 70.7652 118.081 67.0976C118.059 66.2259 117.852 66.0053 116.89 66.3164C112.524 67.7306 108.133 69.0797 103.72 70.3456C102.682 70.6422 102.402 71.022 102.485 72.0745C102.616 73.7492 102.522 75.4419 102.522 77.1237L102.518 77.131ZM70.8895 43.5767C73.1871 43.5767 75.1243 43.537 77.0579 43.5912C78.1102 43.6201 78.4634 43.2512 78.3105 42.2168C77.8226 38.9471 77.3565 35.6774 76.9414 32.3968C76.8285 31.4962 76.4607 31.2069 75.554 31.1815C71.4429 31.0658 67.3319 30.9103 63.2245 30.6933C62.2559 30.6426 61.7861 30.8849 61.6368 31.8651C61.1562 35.0119 60.661 38.1586 60.0893 41.2945C59.8671 42.5134 60.3187 42.8968 61.4657 42.9583C64.7283 43.1391 67.9837 43.3814 70.8858 43.5731L70.8895 43.5767ZM58.3596 42.857C58.7056 42.3723 59.2372 41.9491 59.3319 41.4428C59.9181 38.2454 60.3587 35.0191 60.9559 31.8217C61.1489 30.7873 60.9122 30.4871 59.8781 30.3207C56.051 29.7058 52.2349 29.0078 48.4297 28.2771C47.5048 28.0999 46.9659 28.2771 46.5617 29.1524C45.1489 32.216 43.696 35.2614 42.2212 38.2996C41.7879 39.1894 41.7916 39.6958 42.9532 39.9092C47.9563 40.8351 52.9486 41.8153 58.356 42.857H58.3596ZM101.029 55.8743C105.457 54.3841 109.691 52.9808 113.894 51.4906C114.156 51.3965 114.414 50.5466 114.276 50.2102C112.779 46.6041 111.224 43.0197 109.611 39.4643C109.484 39.1858 108.745 38.9362 108.395 39.0375C104.863 40.0647 101.342 41.1462 97.8426 42.2819C97.5295 42.3832 97.118 43.027 97.1872 43.3091C98.1375 47.096 99.1535 50.8649 100.191 54.6301C100.29 54.9918 100.628 55.2884 101.025 55.8671L101.029 55.8743ZM82.5089 43.5731C86.4816 43.0993 90.4507 42.6183 94.4234 42.1625C95.4648 42.0432 95.9746 41.7611 95.4502 40.5783C94.0374 37.3846 92.7484 34.1329 91.2918 30.9573C91.0843 30.5016 90.1922 30.0603 89.6532 30.1001C86.0301 30.3713 82.4179 30.8235 78.7948 31.1056C77.6951 31.1888 77.4985 31.5432 77.666 32.5451C78.0993 35.1602 78.4379 37.7897 78.8094 40.4119C79.1055 42.5098 80.3375 43.5635 82.5053 43.5731H82.5089ZM118.245 81.8981C117.735 81.3881 119.017 79.8762 117.357 80.3283C112.692 81.6015 108.082 83.0772 103.479 84.5529C103.006 84.7048 102.442 85.345 102.361 85.8297C101.812 89.1537 101.397 92.4993 100.89 95.8305C100.745 96.7818 101.04 97.0675 101.946 96.7854C106.276 95.4399 110.624 94.1486 114.91 92.6838C115.583 92.4523 116.268 91.4866 116.446 90.7451C117.153 87.8226 117.662 84.8531 118.245 81.8981ZM32.1857 105.224C31.7925 101.784 31.4866 98.7313 31.0533 95.6967C30.9914 95.2699 30.3906 94.749 29.9281 94.579C24.9868 92.7778 20.0128 91.0706 15.0751 89.2622C14.0519 88.886 13.8844 89.1247 14.1102 90.0507C14.8494 93.0853 15.574 96.1271 16.3569 99.1545C16.4661 99.5704 16.8157 100.106 17.1834 100.243C21.9317 102.034 26.7019 103.77 31.4793 105.48C31.716 105.564 32.0911 105.26 32.1821 105.224H32.1857ZM65.8244 119.662C67.8854 119.662 69.9464 119.626 72.0037 119.681C72.9832 119.706 73.6023 119.449 73.8717 118.433C74.3815 116.516 74.9313 114.606 75.5358 112.714C75.8599 111.691 75.6341 111.376 74.5126 111.34C68.2786 111.134 62.0447 110.902 55.8143 110.551C54.4743 110.475 54.2704 110.924 54.3432 112.038C54.4634 113.839 54.5435 115.644 54.5472 117.449C54.5472 118.512 54.955 118.928 56.0292 118.99C59.2955 119.171 62.5544 119.435 65.8244 119.666V119.662ZM40.7174 39.2871C40.914 39.023 41.2672 38.6794 41.4639 38.2671C42.9495 35.171 44.3769 32.0496 45.8881 28.968C46.3068 28.1144 46.2558 27.778 45.2727 27.4525C42.3451 26.4831 39.4757 25.351 36.5481 24.3817C36.0783 24.2262 35.1971 24.3926 34.9131 24.7362C32.579 27.5755 30.3505 30.5052 28.0601 33.3842C27.361 34.2632 27.5977 34.737 28.5772 35.0842C32.3387 36.4116 36.0965 37.7571 39.858 39.0954C40.0292 39.1569 40.2112 39.1749 40.7137 39.2871H40.7174ZM53.757 114.577C53.6732 113.26 54.0774 111.492 53.3783 110.75C52.6209 109.947 50.833 110.103 49.493 109.839C49.3146 109.803 49.1361 109.781 48.9577 109.745C44.3259 108.877 39.6796 108.067 35.066 107.112C33.5658 106.801 33.391 107.199 33.828 108.468C34.4943 110.399 35.1243 112.342 35.7215 114.291C36.0201 115.271 36.6282 115.738 37.6368 115.923C41.6787 116.657 45.6987 117.532 49.7552 118.194C53.8881 118.867 53.9026 118.784 53.757 114.573V114.577ZM10.4215 40.8894C10.163 41.3017 9.90442 41.6128 9.75513 41.9672C8.40055 45.1863 7.09696 48.4234 5.71325 51.6316C5.2508 52.7023 5.49113 53.5305 6.34684 54.1816C8.84116 56.0732 11.3755 57.9215 13.888 59.7878C14.8603 60.5076 15.1297 60.0446 15.4392 59.0825C16.5644 55.5886 17.7369 52.1018 19.026 48.6658C19.4047 47.6566 19.0587 47.3709 18.3123 46.8537C15.8908 45.1682 13.5494 43.3634 11.1825 41.5983C10.9458 41.4211 10.7492 41.1968 10.4215 40.8894ZM97.2272 41.9564C100.996 40.6977 104.605 39.5041 108.188 38.2454C108.37 38.1803 108.534 37.3882 108.373 37.1458C106.229 33.8725 104.047 30.6245 101.804 27.4199C101.604 27.1306 100.861 26.9859 100.468 27.1016C97.8572 27.8503 95.2755 28.7112 92.6719 29.4816C91.9618 29.6914 91.6487 29.8433 92.0128 30.6824C93.4803 34.0425 94.8603 37.4424 96.3023 40.817C96.4589 41.1823 96.8157 41.4645 97.2272 41.96V41.9564ZM14.5872 61.3503C14.4961 61.2635 14.1102 60.8331 13.655 60.4931C11.0879 58.5942 8.4661 56.7604 5.94265 54.8001C5.22531 54.2394 4.90852 53.9718 4.71917 55.0677C4.11106 58.5653 3.46655 62.0592 2.93491 65.5677C2.85116 66.1247 3.10242 66.9927 3.51753 67.3255C6.24124 69.5065 9.04507 71.5899 11.8416 73.6804C12.4752 74.1543 12.7519 73.883 12.8575 73.1343C13.3855 69.3763 13.9536 65.6255 14.5872 61.3431V61.3503ZM26.1703 34.8817C25.868 34.661 25.584 34.4621 25.3073 34.2523C23.2353 32.7006 21.1197 31.2069 19.1206 29.5684C18.4288 29.0005 18.1411 29.1488 17.7369 29.7348C15.5885 32.8598 13.4511 35.9957 11.2808 39.1026C10.7346 39.8839 10.9641 40.477 11.6013 40.9653C13.8953 42.7195 16.2185 44.434 18.5198 46.1773C19.4447 46.8754 19.878 46.5933 20.3842 45.595C22.0446 42.3217 23.8289 39.1135 25.5694 35.8799C25.7406 35.5616 25.9372 35.2614 26.1666 34.878L26.1703 34.8817ZM77.6332 119.492C79.7488 119.308 81.8644 119.156 83.9764 118.935C91.5431 118.147 91.7106 118.02 95.0643 111.21C95.1189 111.101 95.1844 110.996 95.2208 110.884C95.3483 110.494 95.4648 110.099 95.585 109.709C95.1699 109.705 94.7511 109.662 94.3396 109.705C89.6387 110.182 84.9414 110.732 80.2331 111.137C76.6865 111.445 76.6828 111.362 75.7106 114.859C75.5649 115.38 75.4193 115.904 75.2627 116.422C74.6194 118.541 75.4096 119.565 77.6332 119.492ZM97.7625 108.812C102.398 107.17 106.669 105.665 110.926 104.131C111.17 104.045 111.396 103.733 111.509 103.477C112.834 100.446 114.141 97.4039 115.427 94.3584C115.529 94.1161 115.448 93.8014 115.452 93.5193C115.172 93.5772 114.884 93.6169 114.611 93.6965C110.267 94.995 105.919 96.279 101.59 97.6281C101.102 97.78 100.493 98.2177 100.341 98.6626C99.3246 101.621 98.4143 104.616 97.4967 107.607C97.4275 107.828 97.5986 108.121 97.7625 108.819V108.812ZM70.5399 30.5052C72.3205 30.5052 73.8353 30.4726 75.3501 30.516C76.3587 30.545 76.6173 30.1326 76.4061 29.2067C75.7834 26.447 75.2445 23.6692 74.5454 20.9312C74.4361 20.4971 73.6933 19.9618 73.2053 19.9257C70.5508 19.7195 67.8817 19.6869 65.2235 19.5206C64.3788 19.4663 64.0219 19.7448 63.869 20.5405C63.3592 23.199 62.8348 25.8574 62.2668 28.505C62.0228 29.6335 62.4379 30.0024 63.5485 30.0494C65.9664 30.1543 68.3842 30.3605 70.5363 30.5052H70.5399ZM60.4862 29.9011C60.8103 29.525 61.371 29.1633 61.4766 28.7003C62.1029 25.937 62.5981 23.1483 63.1917 20.3814C63.3665 19.5712 63.0897 19.3252 62.3287 19.2023C59.8162 18.7936 57.3219 18.28 54.8057 17.911C54.3323 17.8423 53.564 18.0846 53.32 18.4463C51.5176 21.0867 49.828 23.7994 48.0729 26.4723C47.534 27.2933 47.9636 27.4923 48.681 27.6297C52.4898 28.3567 56.295 29.0946 60.4862 29.9011ZM80.2841 30.3677C80.2877 30.4075 80.295 30.4473 80.2987 30.4835C83.2955 30.1182 86.2923 29.7348 89.2928 29.3984C90.2286 29.2935 90.4361 28.9607 89.93 28.1469C88.2186 25.3908 86.5727 22.5913 84.7848 19.8859C84.4898 19.4374 83.5904 19.148 82.9932 19.1806C80.7648 19.3035 78.5472 19.6508 76.3187 19.7846C75.2736 19.8461 75.1498 20.215 75.3647 21.112C75.9109 23.3871 76.366 25.6838 76.8831 27.9661C77.5167 30.762 76.7993 30.4509 79.9236 30.3822C80.0438 30.3822 80.1639 30.3713 80.2841 30.3677ZM12.5553 81.0915C12.5954 81.0915 12.6318 81.0915 12.6718 81.0915C12.6718 79.4639 12.6136 77.8363 12.6937 76.2123C12.741 75.2972 12.3805 74.8668 11.6377 74.364C8.98681 72.5809 6.42331 70.6712 3.8234 68.8084C3.53938 68.6059 3.25171 68.4033 2.96404 68.2008C2.86209 68.5914 2.65453 68.9857 2.67638 69.3691C2.85845 72.6749 3.05508 75.9772 3.31361 79.2794C3.35367 79.775 3.6122 80.4007 3.98362 80.7009C6.61266 82.8023 9.29268 84.8495 11.9763 86.8822C12.6172 87.3669 12.9413 87.1571 12.8794 86.3216C12.7447 84.5782 12.6573 82.8349 12.5517 81.0915H12.5553ZM28.7774 19.0395C28.457 19.2529 28.1293 19.4121 27.878 19.6508C25.1216 22.2622 22.3796 24.8953 19.6231 27.5031C18.9859 28.1035 19.0332 28.6642 19.6814 29.1488C21.6987 30.6679 23.716 32.1907 25.8025 33.6157C26.0829 33.8074 26.9604 33.6049 27.208 33.3011C29.5931 30.3496 31.8835 27.3259 34.2504 24.3564C34.7711 23.7053 34.6728 23.4594 34.0064 23C32.4188 21.9113 30.9222 20.6961 29.3892 19.5278C29.2035 19.3867 29.0287 19.2348 28.7811 19.0359L28.7774 19.0395ZM126.128 57.5272C125.076 53.9971 123.962 50.25 122.808 46.5173C122.786 46.4414 122.159 46.4016 121.977 46.5426C120.098 48.0364 118.223 49.5411 116.421 51.1217C116.071 51.4291 115.783 52.1308 115.874 52.5648C116.65 56.2758 117.502 59.9687 118.402 63.6543C118.471 63.9328 119.203 64.3488 119.381 64.2547C121.799 62.9454 123.995 61.354 125.499 58.9921C125.717 58.6485 125.83 58.2362 126.132 57.5309L126.128 57.5272ZM122.083 44.745C122.028 44.5388 122.017 44.4086 121.963 44.3074C120.091 40.8062 118.223 37.305 116.311 33.8255C116.253 33.7206 115.634 33.7604 115.43 33.9232C113.835 35.1963 112.259 36.4912 110.737 37.8475C110.449 38.1043 110.194 38.759 110.321 39.0664C111.825 42.6761 113.391 46.2605 115.001 49.8232C115.139 50.127 115.929 50.4959 116.057 50.3947C117.965 48.8575 119.822 47.2552 121.661 45.6312C121.905 45.4178 121.966 45.0018 122.087 44.745H122.083ZM17.4238 101.245C17.4529 101.668 17.3874 101.994 17.5075 102.225C18.8038 104.735 20.1002 107.246 21.4657 109.72C21.706 110.157 22.1939 110.573 22.6637 110.75C26.4434 112.193 30.2449 113.586 34.0465 114.964C34.3487 115.073 34.731 114.968 35.077 114.964C34.9932 114.624 34.924 114.277 34.8221 113.94C34.203 111.929 33.4966 109.944 32.9795 107.907C32.721 106.895 32.2404 106.475 31.2499 106.146C27.0041 104.743 22.8057 103.213 18.589 101.722C18.305 101.621 18.0282 101.491 17.4238 101.241V101.245ZM45.7096 14.9271C45.6878 14.9379 45.4402 14.9922 45.2763 15.1405C42.4288 17.6542 39.5849 20.1716 36.7593 22.7035C36.0492 23.34 36.6464 23.6294 37.1707 23.8175C40.0692 24.8628 42.9641 25.9081 45.8881 26.8738C46.2522 26.9931 46.9987 26.7653 47.2026 26.4578C49.0051 23.756 50.7383 21.0035 52.4534 18.2402C52.5918 18.0159 52.5153 17.3613 52.3842 17.3142C50.2395 16.504 48.0692 15.7553 45.7133 14.9271H45.7096ZM119.254 73.0873C119.214 73.0873 119.177 73.0909 119.137 73.0945C119.137 74.5376 119.174 75.9844 119.123 77.4276C119.093 78.3354 119.447 78.5995 120.135 78.0352C122.079 76.4402 124.024 74.8306 125.848 73.1017C126.354 72.6243 126.671 71.6984 126.664 70.9822C126.635 67.557 126.467 64.1317 126.329 60.7065C126.318 60.4461 126.132 60.1893 126.03 59.9325C125.808 60.1025 125.579 60.2689 125.36 60.4461C123.481 61.9435 121.653 63.5133 119.698 64.9058C118.951 65.4375 118.653 65.8896 118.747 66.7902C118.973 68.8844 119.09 70.9858 119.254 73.0873ZM91.0807 29.3948C94.5945 28.241 97.2891 27.3765 99.9582 26.4289C100.118 26.371 100.235 25.474 100.049 25.2787C97.4603 22.5949 94.8312 19.9474 92.1548 17.3504C91.8599 17.0647 91.1608 16.9706 90.7311 17.0828C89.158 17.4915 87.6287 18.0666 86.0592 18.5006C85.229 18.7285 85.1489 19.0106 85.5932 19.7231C87.3446 22.5262 89.0561 25.3547 90.742 28.194C90.9823 28.6027 91.0115 29.1344 91.0843 29.3948H91.0807ZM115.401 32.5053C115.139 32.093 114.931 31.6626 114.629 31.3081C112.452 28.7401 110.216 26.2191 108.086 23.6113C107.103 22.4105 106.487 22.4503 105.548 23.6836C104.914 24.5155 103.942 25.1376 103.024 25.6983C102.219 26.1902 102.092 26.5121 102.667 27.3367C104.801 30.3894 106.869 33.4891 108.898 36.6142C109.378 37.3556 109.775 37.7282 110.554 37.0844C111.938 35.9378 113.333 34.8021 114.684 33.6193C114.986 33.3553 115.139 32.9249 115.401 32.5089V32.5053ZM63.7197 125.876C64.5317 125.876 65.5003 125.869 66.4689 125.876C70.8021 125.916 70.762 125.902 72.5317 121.858C73.0633 120.639 72.8558 120.364 71.5267 120.339C67.2845 120.266 63.046 120.093 58.8075 119.905C54.0155 119.691 54.5472 118.44 55.1807 123.967C55.29 124.932 55.7306 125.316 56.6628 125.374C58.9605 125.515 61.2581 125.695 63.716 125.873L63.7197 125.876ZM110.263 105.679C109.87 105.679 109.575 105.614 109.32 105.69C105.438 106.819 101.56 107.944 97.6969 109.134C97.1981 109.289 96.6665 109.723 96.397 110.172C95.1444 112.291 93.9719 114.458 92.7848 116.617C92.6501 116.863 92.5882 117.149 92.4935 117.416C92.7848 117.416 93.0943 117.492 93.3601 117.409C96.6373 116.375 99.9145 115.337 103.174 114.248C103.661 114.085 104.157 113.723 104.477 113.322C106.269 111.061 108.006 108.757 109.761 106.464C109.906 106.276 110.023 106.063 110.267 105.679H110.263ZM37.3018 116.834C37.2909 116.935 37.1307 117.301 37.2508 117.492C38.2085 119.019 39.1807 120.541 40.2331 122.003C40.5207 122.4 41.0742 122.748 41.5622 122.842C45.5385 123.609 49.5258 124.328 53.5203 124.99C53.8007 125.037 54.4671 124.498 54.4561 124.256C54.3979 122.939 54.2486 121.616 53.9755 120.324C53.8954 119.945 53.3528 119.449 52.9559 119.384C47.8908 118.519 42.8111 117.72 37.3018 116.834ZM3.87074 82.8421C4.34411 84.5348 4.95221 86.3108 5.32363 88.1337C6.3869 93.3601 10.0319 96.3622 14.3905 98.7855C14.6746 98.9411 15.0278 98.97 15.3519 99.0568C15.3227 98.7711 15.3191 98.4781 15.2572 98.1996C14.5981 95.2626 13.9536 92.3257 13.2399 89.4032C13.1124 88.8824 12.7847 88.2892 12.3623 87.9818C9.78062 86.0974 7.14794 84.2817 4.52982 82.4515C4.36232 82.3321 4.14384 82.2851 3.9472 82.2055C3.929 82.3755 3.90715 82.5455 3.87074 82.8493V82.8421ZM44.7301 14.5147C44.6209 14.3267 44.5881 14.2001 44.508 14.135C43.361 13.256 42.2285 12.3554 41.0342 11.5416C40.8412 11.4078 40.3278 11.585 40.0474 11.755C36.752 13.7696 33.4748 15.8168 30.1903 17.8495C29.4839 18.2872 29.4729 18.7646 30.1138 19.2384C31.6104 20.3488 33.0888 21.4954 34.6582 22.4973C34.975 22.6998 35.8052 22.5045 36.1475 22.2043C38.8348 19.8714 41.4602 17.4698 44.1038 15.0862C44.3187 14.8945 44.5262 14.6956 44.7228 14.5111L44.7301 14.5147ZM75.1935 125.71C77.6551 125.406 80.2477 125.164 82.8075 124.733C83.7689 124.571 84.7848 124.129 85.5495 123.533C86.8239 122.538 87.9382 121.33 89.0816 120.176C89.3911 119.861 89.5622 119.413 89.7989 119.022C89.3255 119.033 88.8522 119.011 88.3824 119.055C84.4134 119.431 80.448 119.966 76.468 120.147C74.5563 120.234 73.442 120.755 72.9286 122.614C72.6337 123.681 72.0802 124.679 71.6396 125.71H75.1899H75.1935ZM126.474 75.4925C126.314 74.9464 126.223 74.6389 126.132 74.3315C125.903 74.5051 125.677 74.6823 125.448 74.8559C123.678 76.1978 121.897 77.5252 120.149 78.8924C119.712 79.236 119.133 79.6701 119.046 80.1439C118.394 83.6198 117.848 87.1173 117.273 90.6077C117.182 91.1538 117.164 91.6783 117.954 91.1972C120.557 89.6166 123.201 87.9384 124.177 84.9218C125.189 81.7968 125.753 78.5271 126.474 75.4961V75.4925ZM95.4248 13.7552C94.6783 14.4207 94.0338 15.1513 93.2436 15.6577C92.3442 16.2328 92.4716 16.58 93.1598 17.2347C95.3009 19.2746 97.4311 21.329 99.4594 23.4775C101.844 26.0057 102.026 26.06 104.619 23.633C104.881 23.3871 105.111 23.1013 105.369 22.8481C106.09 22.1464 106.036 21.5424 105.216 20.9348C102.212 18.7031 99.2263 16.4498 96.2295 14.2109C95.9928 14.0337 95.7124 13.9179 95.4248 13.7552ZM69.9099 19.1625C70.9696 19.1625 71.9382 19.1299 72.9068 19.1733C73.8426 19.2131 74.0865 18.8514 73.7989 17.9906C73.2126 16.2219 72.6992 14.4279 72.0693 12.6773C71.8653 12.1095 71.4393 11.245 71.0242 11.1872C69.4876 10.981 67.9108 11.0352 66.3487 11.0606C66.2176 11.0606 66.0501 11.5561 65.9773 11.8382C65.4821 13.7588 65.0196 15.6866 64.5135 17.6072C64.2841 18.4789 64.5972 18.8044 65.4712 18.8478C66.9823 18.9201 68.4898 19.0612 69.9099 19.1661V19.1625ZM62.7584 18.6633C63.0497 18.327 63.6032 17.9436 63.7816 17.4336C64.1967 16.2472 64.4261 14.9958 64.7392 13.7733C65.4639 10.9593 65.4712 10.9267 62.5508 10.3625C61.7898 10.2142 60.65 10.0406 60.2349 10.4421C58.3778 12.2397 56.7138 14.2398 54.9878 16.1677C54.467 16.75 54.6309 17.1298 55.3701 17.2708C57.686 17.7157 60.0055 18.1461 62.762 18.6633H62.7584ZM76.4134 19.1444C78.3906 18.9238 80.3678 18.6706 82.3487 18.4934C83.5431 18.3885 83.503 17.9544 82.8403 17.1949C81.6569 15.8349 80.3715 14.54 79.3483 13.0716C77.8444 10.9123 75.9254 10.3914 73.453 10.9267C72.5535 11.1221 72.3678 11.3137 72.681 12.1782C73.351 14.0373 73.9955 15.9145 74.4762 17.8315C74.7638 18.9853 75.3574 19.2891 76.4134 19.1408V19.1444ZM17.1725 23.7741C17.4311 24.8266 17.584 25.5861 17.8061 26.3276C18.1375 27.4308 18.5307 27.6297 19.4629 26.6604C21.5931 24.4432 23.7633 22.2441 26.1084 20.262C27.5467 19.0431 28.7192 18.034 27.4556 16.0772C27.3646 15.9362 27.35 15.7264 27.361 15.5492C27.4338 14.3447 27.0223 14.1567 26.1011 14.9271C23.5521 17.0538 20.9413 19.1082 18.4798 21.329C17.7952 21.9475 17.5476 23.0398 17.1725 23.7741ZM8.80838 35.2072C9.11425 36.2597 9.35458 37.2435 9.69323 38.1948C10.0027 39.0628 10.3414 39.193 10.9386 38.2779C12.6718 35.6087 14.3942 32.9177 16.3387 30.4039C17.4165 29.0114 18.2103 27.8684 17.005 26.1938C16.7174 25.7923 16.7647 25.1557 16.6482 24.6313C16.5863 24.3528 16.5025 24.0779 16.4261 23.7994C16.153 23.9766 15.7997 24.096 15.6177 24.3419C13.6441 26.9895 11.6377 29.619 9.77698 32.3426C9.23078 33.1419 9.12154 34.2306 8.80474 35.2072H8.80838ZM56.2877 8.43468C56.102 8.50701 55.8617 8.56488 55.6578 8.68786C52.8467 10.3553 50.0428 12.0263 47.239 13.7045C46.427 14.1928 46.802 14.5256 47.4284 14.7498C49.1361 15.3683 50.8403 16.0121 52.5772 16.5294C52.985 16.6523 53.7024 16.4751 53.9864 16.1677C55.7597 14.2688 57.4602 12.3048 59.1498 10.3336C59.2991 10.1563 59.3027 9.56316 59.219 9.52699C58.2759 9.12913 57.3 8.79999 56.2841 8.43829L56.2877 8.43468ZM84.8394 18.1714C86.5727 17.6434 88.1312 17.1659 89.6897 16.6885C90.5927 16.4136 90.7784 16.0447 89.8972 15.4479C87.4502 13.7877 84.9814 12.1565 82.5927 10.4168C81.3801 9.53422 80.2841 9.51975 78.9259 10.0623C77.9791 10.4421 77.9391 10.6048 78.5945 11.321C80.3824 13.2777 82.0902 15.3068 83.8453 17.2925C84.1366 17.6217 84.508 17.8857 84.8358 18.1714H84.8394ZM27.838 14.7064C28.1584 15.7662 28.3041 16.4787 28.6063 17.1153C28.701 17.3179 29.3273 17.5132 29.5166 17.3974C32.9723 15.3068 36.4133 13.1909 39.818 11.028C41.016 10.2648 39.5995 9.30997 39.8726 8.44914C39.4356 8.40212 38.9113 8.17787 38.5763 8.34064C35.4702 9.81272 32.3678 11.292 29.3382 12.9088C28.6609 13.2705 28.2713 14.1639 27.8343 14.71L27.838 14.7064ZM3.23714 47.9894C3.53573 48.9913 3.81976 50.0293 4.16568 51.0493C4.24579 51.2844 4.5371 51.4508 4.73009 51.6461C4.88303 51.411 5.07602 51.1904 5.17797 50.9336C6.20483 48.4234 7.09332 45.8518 8.26947 43.4176C9.22714 41.4355 10.3013 39.6054 8.65181 37.5003C8.44789 37.2399 8.47338 36.8095 8.3605 36.4659C8.28039 36.2163 8.1493 35.9848 8.04006 35.7425C7.858 35.9631 7.61038 36.1548 7.50843 36.4044C6.32135 39.3015 5.13064 42.1951 3.99818 45.1139C3.65226 46.0037 3.49932 46.9658 3.2335 47.9894H3.23714ZM122.837 89.1862C122.775 88.9837 122.727 88.8426 122.684 88.6979C122.534 88.7847 122.378 88.8607 122.24 88.9583C120.608 90.0941 118.977 91.2298 117.36 92.3836C117.076 92.5861 116.741 92.8248 116.617 93.125C115.368 96.185 114.159 99.263 112.947 102.337C112.885 102.493 112.892 102.674 112.87 102.844C113.074 102.818 113.307 102.844 113.478 102.753C113.854 102.558 114.192 102.305 114.549 102.081C117.404 100.283 118.82 97.3894 120.291 94.5573C121.205 92.7959 121.992 90.973 122.837 89.1826V89.1862ZM53.5421 6.52494C52.8102 6.72749 52.3915 6.81068 51.9946 6.95535C49.1034 8.01873 46.2012 9.05317 43.3391 10.1853C41.5476 10.8942 41.5585 11.1221 43.077 12.3012C45.3564 14.0698 45.3273 14.0301 47.7197 12.4893C49.7479 11.1835 51.8526 9.99719 53.9136 8.73488C54.3432 8.47084 54.7147 8.11277 55.1152 7.79448C54.5362 7.3279 53.9573 6.8577 53.5385 6.5177L53.5421 6.52494ZM102.107 115.854C101.364 115.951 101.098 115.959 100.85 116.027C98.0538 116.787 95.2536 117.532 92.4753 118.349C91.8781 118.527 91.27 118.888 90.8258 119.326C89.5804 120.549 88.4152 121.847 87.2281 123.127C87.0315 123.341 86.8749 123.59 86.7001 123.826C86.9769 123.811 87.2645 123.833 87.534 123.782C92.8576 122.744 97.3219 120.096 101.265 116.49C101.397 116.367 101.553 116.273 102.11 115.861L102.107 115.854ZM83.0806 7.8415C82.7238 8.14532 82.3305 8.47808 81.9336 8.81445C82.1885 9.09657 82.3997 9.43657 82.7056 9.64635C85.1344 11.3174 87.6141 12.9233 90.0174 14.6305C91.7907 15.8928 92.184 15.8964 93.7716 14.352C94.5108 13.6358 94.6273 13.1186 93.564 12.6303C90.3924 11.1618 87.239 9.66443 84.0747 8.18511C83.8053 8.05851 83.5103 7.98618 83.0806 7.83788V7.8415ZM95.5449 12.0118C95.8144 12.4856 95.971 13.1041 96.3715 13.408C99.4302 15.7481 102.536 18.0304 105.639 20.3163C105.85 20.4718 106.152 20.5007 106.411 20.5912C106.48 20.3091 106.691 19.9618 106.596 19.7557C106.039 18.544 105.704 16.9996 104.75 16.2472C102.351 14.3556 99.6596 12.8256 97.0816 11.1618C96.204 10.594 95.443 10.301 95.5486 12.0154L95.5449 12.0118ZM116.148 30.0639C115.947 29.2899 115.966 28.4363 115.554 27.9263C113.063 24.8411 110.482 21.8318 107.911 18.8116C107.82 18.7068 107.463 18.667 107.368 18.7502C107.103 18.9889 107.452 21.9584 107.732 22.2767C110.125 24.9966 112.51 27.7201 114.906 30.4401C115.135 30.7005 115.416 30.9211 115.674 31.1598C115.834 30.7909 115.995 30.4256 116.151 30.0639H116.148ZM62.4525 126.603C62.4525 126.567 62.4525 126.531 62.4525 126.495C60.7593 126.383 59.0661 126.238 57.3728 126.173C56.8376 126.151 56.2914 126.336 55.7524 126.426C56.0583 127.124 56.3023 127.858 56.7028 128.499C56.8339 128.708 57.3728 128.712 57.7297 128.73C60.3915 128.86 63.0606 129.117 65.7151 129.012C66.793 128.969 67.8562 128.162 68.8831 127.623C69.1161 127.5 69.1708 127.052 69.3055 126.752C69.0215 126.701 68.7374 126.611 68.4498 126.611C66.4507 126.6 64.4516 126.603 62.4525 126.603ZM0.666364 60.938C0.972236 62.1678 1.20892 63.2167 1.51115 64.2439C1.58034 64.4754 1.88257 64.6417 2.07556 64.837C2.14474 64.6092 2.23214 64.3849 2.27583 64.1535C2.77834 61.3756 3.0041 58.5147 3.85253 55.8454C4.51889 53.7584 4.02731 52.138 3.1097 50.4272C3.00774 50.2355 2.82567 50.0872 2.68002 49.9208C2.59627 50.1415 2.47246 50.3549 2.43241 50.5864C1.82795 54.0731 1.23805 57.5634 0.662723 60.938H0.666364ZM40.5826 8.26468C40.7793 9.6572 40.8812 10.4529 42.3159 9.8706C45.5676 8.55404 48.8849 7.40385 52.1584 6.14154C52.5044 6.00772 52.7301 5.57369 53.0105 5.2771C52.6355 5.09263 52.2131 4.68754 51.8963 4.75988C48.4734 5.5339 45.0578 6.34409 41.6678 7.24471C41.1762 7.37492 40.823 8.02596 40.5826 8.26468ZM54.2522 128.354C55.0752 128.484 55.5485 128.408 55.2281 127.352C54.9441 126.415 54.6236 125.858 53.4693 125.703C50.1776 125.261 46.9113 124.618 43.6341 124.071C43.2044 123.999 42.7602 124.032 42.3196 124.014C42.6473 124.346 42.9495 124.715 43.31 125.008C46.4925 127.627 50.5162 127.536 54.2522 128.35V128.354ZM122.928 41.8804C122.666 40.9906 122.516 40.0213 122.108 39.1713C120.885 36.6214 119.589 34.104 118.252 31.6083C117.928 31.0043 117.338 30.5413 116.872 30.0097C116.778 30.9428 116.661 31.8724 116.61 32.8055C116.599 33.0008 116.861 33.2034 116.978 33.4132C118.591 36.3067 120.197 39.2039 121.813 42.0938C122.006 42.4374 122.265 42.7412 122.491 43.0668C122.622 42.7051 122.753 42.347 122.924 41.8768L122.928 41.8804ZM95.0934 11.8961C95.1553 11.6899 95.2172 11.4837 95.2828 11.2776C94.7074 10.6555 94.2486 9.75124 93.5349 9.4655C90.5709 8.28276 87.534 7.27364 84.508 6.24643C84.1803 6.13431 83.7543 6.32239 83.3719 6.36941C83.6086 6.71302 83.7689 7.21215 84.0966 7.3713C87.4102 8.96998 90.742 10.5216 94.092 12.0444C94.3506 12.1601 94.7584 11.9539 95.0934 11.8961ZM71.0096 128.915C75.463 128.549 78.6091 127.808 81.1835 126.401C81.4348 126.263 81.6496 126.064 81.879 125.894C81.5695 125.855 81.2527 125.757 80.9468 125.779C77.8699 126.021 74.7893 126.26 71.716 126.56C71.2281 126.607 70.6892 126.857 70.3214 127.178C69.8444 127.594 69.5167 128.177 69.1234 128.687L71.006 128.915H71.0096ZM69.3565 10.3733C71.1698 10.4059 71.2281 10.3155 70.4452 8.62999C70.2449 8.19596 70.0483 7.75831 69.808 7.3496C69.3637 6.59366 68.8904 5.85581 68.4279 5.11072C68.0456 5.93176 67.5941 6.7311 67.2955 7.5847C66.3342 10.3155 66.356 10.3227 69.3565 10.3733ZM52.6318 2.81759C50.4725 3.17566 48.4188 3.39268 46.4343 3.88458C45.0615 4.22457 43.7761 4.92264 42.4689 5.50496C42.2613 5.599 42.1557 5.92453 42.0064 6.14154C42.2358 6.13431 42.4725 6.15963 42.6946 6.11261C45.9937 5.38199 49.2927 4.6586 52.5845 3.8882C52.9377 3.80501 53.229 3.4614 53.5494 3.24077C53.2254 3.09247 52.9049 2.94418 52.6318 2.81759ZM64.9286 10.1274C65.2782 9.80187 65.8025 9.52699 65.9846 9.10381C66.4361 8.0549 66.7383 6.9445 67.077 5.85219C67.1425 5.64602 67.0952 5.40731 67.0988 5.17944C66.8804 5.23731 66.6255 5.23731 66.4507 5.35667C65.5585 5.97878 64.6555 6.59366 63.8144 7.28088C63.0861 7.87767 62.4306 8.5685 61.7461 9.21593C62.711 9.49082 63.676 9.7657 64.925 10.1202L64.9286 10.1274ZM73.0815 10.5867C73.1799 10.4819 73.2818 10.377 73.3801 10.2721C73.6787 10.2504 73.9882 10.2612 74.2795 10.1997C74.7274 10.1057 75.1644 9.96464 75.605 9.84166C75.3246 9.4872 75.0988 9.06764 74.7529 8.79637C73.4784 7.7981 72.1712 6.83961 70.8567 5.88836C70.5799 5.68943 70.2377 5.5773 69.9281 5.42539C70.0228 5.79794 70.0702 6.18856 70.2231 6.53579C70.6091 7.41109 70.955 8.32255 71.4866 9.10742C71.8835 9.69337 72.5426 10.1021 73.0852 10.5904L73.0815 10.5867ZM126.824 54.6662C125.972 51.4074 125.072 47.9351 124.144 44.4665C124.042 44.0867 123.78 43.7467 123.59 43.3887C123.416 43.8263 123.201 44.2567 123.081 44.7088C123.026 44.915 123.139 45.1718 123.204 45.3961C124.162 48.6079 125.12 51.8197 126.092 55.0279C126.154 55.2305 126.358 55.3933 126.493 55.5705C126.565 55.3679 126.638 55.1654 126.82 54.6662H126.824ZM64.6446 5.11072C62.4889 5.92091 60.2386 6.75642 58.0028 7.6281C57.8972 7.66789 57.8863 8.23574 57.9008 8.23936C58.8621 8.43829 60.0565 9.04594 60.752 8.68786C62.2704 7.91022 63.5412 6.64791 64.9031 5.57007C65.0087 5.48688 65.0342 5.30603 65.0961 5.17221C64.9832 5.15774 64.8703 5.13965 64.6482 5.11072H64.6446ZM1.90442 71.749C1.94447 71.749 1.98088 71.749 2.02094 71.749C2.02094 70.4252 2.08648 69.0978 1.99545 67.7776C1.94811 67.094 1.65316 66.4177 1.42012 65.7558C1.35093 65.5604 1.11789 65.423 0.961312 65.2602C0.881203 65.4555 0.717342 65.6545 0.735549 65.8389C1.0305 69.3148 1.33637 72.7907 1.67137 76.2593C1.69322 76.5016 1.94811 76.7223 2.09012 76.9538C2.12654 76.7223 2.19936 76.4836 2.18844 76.2557C2.10469 74.7547 1.99909 73.25 1.90078 71.749H1.90442ZM77.3674 9.71869C77.7352 9.63911 77.9828 9.61741 78.2049 9.53061C78.6382 9.36061 79.0606 9.15806 79.4866 8.96636C79.1225 8.70233 78.7912 8.36957 78.387 8.18872C76.5736 7.38215 74.7384 6.61536 72.9068 5.84496C72.6992 5.75815 72.4625 5.73645 72.2404 5.68581C72.3424 5.85942 72.4006 6.08729 72.5463 6.20303C73.8644 7.25194 75.1899 8.29 76.5299 9.30636C76.7993 9.5089 77.1453 9.61379 77.3674 9.71869ZM42.6218 125.355C42.163 125.005 41.9372 124.889 41.7843 124.712C39.7379 122.31 36.5116 122.578 33.9663 121.312C33.879 121.268 33.7479 121.323 33.635 121.33C33.7151 121.456 33.7661 121.652 33.8826 121.706C36.4971 122.932 39.1152 124.144 41.737 125.345C41.8826 125.413 42.0902 125.352 42.6218 125.352V125.355ZM62.0046 4.78881C59.9108 5.19391 57.726 5.60624 55.5485 6.05112C55.3082 6.09814 55.1079 6.32962 54.8894 6.4743C55.046 6.6443 55.1662 6.89025 55.3628 6.96982C55.7852 7.14705 56.3132 7.45087 56.6737 7.33151C58.549 6.69855 60.3879 5.94985 62.2304 5.23008C62.3833 5.16859 62.4925 4.99859 62.62 4.88285C62.4489 4.85753 62.2777 4.83222 62.0046 4.79243V4.78881ZM75.3319 5.50135C75.026 5.55198 74.9131 5.57007 74.7966 5.59177C74.8986 5.7039 74.9787 5.86304 75.1061 5.92091C76.8503 6.72749 78.5872 7.55215 80.3606 8.29C80.6701 8.42021 81.1653 8.23936 81.5185 8.0766C81.635 8.02235 81.6314 7.35321 81.5695 7.33513C79.443 6.68047 77.3055 6.0692 75.3319 5.50135ZM54.4743 5.47603C56.5936 5.06732 58.4871 4.70562 60.3842 4.3367C60.4971 4.315 60.5991 4.25351 60.7083 4.2101C60.5881 4.15223 60.4643 4.03649 60.3478 4.04011C58.4179 4.145 56.488 4.23904 54.5654 4.40542C54.3178 4.42712 54.0993 4.81775 53.8699 5.03838C54.1211 5.21923 54.3687 5.40007 54.478 5.47603H54.4743ZM77.0287 4.76711C76.854 4.80328 76.5918 4.85392 76.3333 4.90817C76.5991 5.03838 76.854 5.21561 77.138 5.29518C78.5363 5.69666 79.9345 6.09452 81.3474 6.44175C81.686 6.52494 82.0756 6.40196 82.4434 6.37664C82.1667 6.10176 81.9263 5.65326 81.6023 5.58454C80.1239 5.26263 78.62 5.042 77.0324 4.77073L77.0287 4.76711ZM69.4293 1.27316C68.4789 1.19359 67.8271 1.10316 67.1717 1.09955C66.9459 1.09955 66.7201 1.30933 66.4907 1.42507C67.0697 1.89889 67.6487 2.3727 68.224 2.85014C68.5408 2.43781 68.854 2.02548 69.4256 1.27316H69.4293ZM77.2581 3.55544C77.2545 3.58799 77.2509 3.62055 77.2472 3.6531C76.8867 3.6531 76.5226 3.64225 76.1621 3.65671C75.9254 3.66756 75.6887 3.72182 75.452 3.75437C75.6705 3.82309 75.8817 3.92075 76.1038 3.9533C77.3565 4.13777 78.6091 4.31499 79.8653 4.47052C80.0583 4.49584 80.2659 4.39818 80.4662 4.3584C80.2914 4.21372 80.1312 3.98224 79.9345 3.94607C79.0497 3.78331 78.1539 3.67842 77.2618 3.55182L77.2581 3.55544ZM72.7575 1.71804C72.0073 1.59145 71.4794 1.38167 71.006 1.46124C70.5362 1.54081 70.1066 1.89889 69.6878 2.17739C69.5859 2.24611 69.6041 2.48845 69.564 2.64759C70.0192 2.59695 70.4743 2.57525 70.9222 2.48845C71.3337 2.40887 71.7379 2.27866 72.1384 2.14122C72.2768 2.0942 72.3897 1.97123 72.7575 1.71081V1.71804ZM55.5631 3.55906C57.067 3.45778 58.3269 3.37821 59.5904 3.28055C59.7579 3.26609 59.9181 3.16843 60.082 3.10694C59.9327 3.04907 59.7798 2.94418 59.6305 2.94056C58.3669 2.89716 57.1034 2.84291 55.8398 2.86822C55.5376 2.87546 55.239 3.17205 54.9368 3.33481C55.2172 3.43608 55.4975 3.53736 55.5667 3.56267L55.5631 3.55906ZM63.5267 1.05976C63.29 1.12486 63.0169 1.20082 62.7474 1.27678C62.9841 1.43592 63.2026 1.63485 63.4575 1.74698C63.7889 1.89165 64.1421 2.00739 64.4953 2.06165C64.965 2.13399 65.4457 2.13399 65.919 2.16654C65.4966 1.84825 65.1034 1.46847 64.6373 1.22614C64.3351 1.07061 63.9309 1.1104 63.5267 1.05614V1.05976ZM59.9036 1.57336C59.889 1.61677 59.8781 1.65655 59.8635 1.69996C59.7433 1.69272 59.6195 1.65655 59.5067 1.68187C59.1644 1.75421 58.8294 1.85187 58.4871 1.93867C58.793 2.0291 59.0952 2.13399 59.4047 2.20633C59.5758 2.24611 59.7615 2.23164 59.94 2.2425C60.7629 2.2859 61.5859 2.3293 62.4052 2.3727C61.5713 2.10867 60.7338 1.84102 59.8999 1.57698L59.9036 1.57336ZM54.3214 2.25696C54.7183 2.10867 55.2354 1.91335 55.7561 1.72166C55.5594 1.66017 55.3519 1.51911 55.1698 1.54805C54.4161 1.65655 53.6696 1.8157 52.9195 1.95676C53.3237 2.04356 53.7279 2.13037 54.3214 2.26058V2.25696ZM75.2008 2.97311C75.452 2.92248 75.9946 2.81397 76.5372 2.70546C75.9291 2.60419 75.3246 2.48121 74.7165 2.40887C74.4871 2.37994 74.2395 2.43419 74.0137 2.4993C73.8062 2.55717 73.6168 2.67291 73.4165 2.76333C73.6095 2.83205 73.7989 2.94056 73.9992 2.96588C74.2905 3.00205 74.5927 2.97311 75.2008 2.97311ZM127.064 58.5436C127.017 58.4496 126.966 58.3555 126.919 58.2579C126.875 58.3447 126.78 58.4459 126.795 58.5219C126.82 58.6413 126.919 58.7425 126.984 58.851C127.01 58.7498 127.035 58.6485 127.064 58.5436Z",
      fill: "currentColor"
    })
  });
};

function StartScreen() {
  const {
    termsOfServiceUrl,
    privacyPolicyUrl,
    welcomeScreen: WelcomeScreen
  } = React.useContext(formElements.ModalConfigCtx);
  if (WelcomeScreen) {
    if (typeof WelcomeScreen === "function") {
      return /*#__PURE__*/jsxRuntime.jsx(WelcomeScreen, {});
    }
  }
  const title = (typeof WelcomeScreen === "object" ? WelcomeScreen?.title : undefined) || "Your gateway to the decentralized world";
  const subtitle = (typeof WelcomeScreen === "object" ? WelcomeScreen?.subtitle : undefined) || "Connect a wallet to get started";
  const img = typeof WelcomeScreen === "object" ? WelcomeScreen?.img : undefined;
  const showTOS = termsOfServiceUrl || privacyPolicyUrl;
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    fullHeight: true,
    animate: "fadein",
    flex: "column",
    children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      expand: true,
      flex: "column",
      center: "both",
      style: {
        minHeight: "300px"
      },
      px: "lg",
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
        flex: "row",
        center: "x",
        children: img ? /*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
          src: img.src,
          width: img.width ? String(img.width) : undefined,
          height: img.height ? String(img.height) : undefined
        }) : /*#__PURE__*/jsxRuntime.jsx(GlobalContainer, {
          children: /*#__PURE__*/jsxRuntime.jsx(GlobeIcon, {
            size: "150"
          })
        })
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xxl"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        center: true,
        color: "primaryText",
        weight: 600,
        multiline: true,
        children: title
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "md"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "secondaryText",
        multiline: true,
        style: {
          textAlign: "center"
        },
        children: subtitle
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      px: "xl",
      children: /*#__PURE__*/jsxRuntime.jsx(LinkContainer, {
        "data-seperator": !!showTOS,
        children: /*#__PURE__*/jsxRuntime.jsx(formElements.Link, {
          target: "_blank",
          center: true,
          href: "https://blog.thirdweb.com/web3-wallet/",
          children: "New to wallets?"
        })
      })
    }), showTOS && /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.TOS, {
        termsOfServiceUrl: termsOfServiceUrl,
        privacyPolicyUrl: privacyPolicyUrl
      })
    })]
  });
}
const LinkContainer = styled__default["default"].div`
  &[data-seperator="true"] {
    padding-bottom: ${formElements.spacing.lg};
    border-bottom: 1px solid ${p => p.theme.colors.separatorLine};
  }

  &[data-seperator="false"] {
    padding: ${formElements.spacing.lg};
  }
`;
const floatingAnimation = react.keyframes`
  from {
    transform: translateY(4px);
  }
  to {
    transform: translateY(-4px);
  }
`;
const GlobalContainer = styled__default["default"].div`
  color: ${p => p.theme.colors.accentText};
  filter: drop-shadow(0px 6px 10px ${p => p.theme.colors.accentText});
  animation: ${floatingAnimation} 2s ease infinite alternate;
`;

const ConnectModalContent = props => {
  const {
    screen,
    setScreen,
    initialScreen
  } = props;
  const walletConfigs = reactCore.useWallets();
  const connectionStatus = reactCore.useConnectionStatus();
  const disconnect = reactCore.useDisconnect();
  const isWalletModalOpen = formElements.useIsWalletModalOpen();
  const setIsWalletModalOpen = formElements.useSetIsWalletModalOpen();
  const modalConfig = React.useContext(formElements.ModalConfigCtx);
  const setModalConfig = React.useContext(formElements.SetModalConfigCtx);
  const title = modalConfig.title;
  const theme = modalConfig.theme;
  const modalSize = modalConfig.modalSize;
  const isWideModal = modalSize === "wide";
  const handleClose = React.useCallback(function () {
    let reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (reset) {
      setScreen(initialScreen);
    }
    if (connectionStatus === "connecting") {
      disconnect();
    }
    setIsWalletModalOpen(false);
  }, [connectionStatus, setIsWalletModalOpen, setScreen, initialScreen, disconnect]);
  const handleBack = React.useCallback(() => {
    setScreen(initialScreen);
    if (connectionStatus === "connecting") {
      disconnect();
    }
  }, [setScreen, initialScreen, connectionStatus, disconnect]);
  const walletList = /*#__PURE__*/jsxRuntime.jsx(formElements.WalletSelector, {
    title: title,
    walletConfigs: walletConfigs,
    onGetStarted: () => {
      setScreen(formElements.reservedScreens.getStarted);
    },
    selectWallet: setScreen
  });
  const getStarted = /*#__PURE__*/jsxRuntime.jsx(StartScreen, {});
  const getWalletUI = walletConfig => {
    const ConnectUI = walletConfig.connectUI || coinbaseWallet.HeadlessConnectUI;
    return /*#__PURE__*/jsxRuntime.jsx(ConnectUI, {
      supportedWallets: walletConfigs,
      theme: typeof theme === "string" ? theme : theme.type,
      goBack: handleBack,
      close: handleClose,
      isOpen: isWalletModalOpen,
      open: () => {
        setIsWalletModalOpen(true);
      },
      walletConfig: walletConfig,
      modalSize: modalConfig.modalSize,
      selectionData: modalConfig.data,
      setSelectionData: data => {
        setModalConfig(config => ({
          ...config,
          data
        }));
      }
    });
  };
  return /*#__PURE__*/jsxRuntime.jsx(ScreenContext.Provider, {
    value: screen,
    children: isWideModal ? /*#__PURE__*/jsxRuntime.jsxs("div", {
      style: {
        height: "100%",
        display: "grid",
        gridTemplateColumns: "300px 1fr"
      },
      children: [/*#__PURE__*/jsxRuntime.jsxs(LeftContainer, {
        children: [" ", walletList, " "]
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        flex: "column",
        scrollY: true,
        relative: true,
        children: [screen === formElements.reservedScreens.main && /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
          children: getStarted
        }), screen === formElements.reservedScreens.getStarted && getStarted, typeof screen !== "string" && getWalletUI(screen)]
      })]
    }) : /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      flex: "column",
      scrollY: true,
      relative: true,
      style: {
        maxHeight: formElements.compactmodalMaxHeight
      },
      children: [screen === formElements.reservedScreens.main && walletList, screen === formElements.reservedScreens.getStarted && getStarted, typeof screen !== "string" && getWalletUI(screen)]
    })
  });
};
const ConnectModal = () => {
  const {
    theme,
    modalSize
  } = React.useContext(formElements.ModalConfigCtx);
  const {
    screen,
    setScreen,
    initialScreen
  } = useScreen();
  const isWalletModalOpen = formElements.useIsWalletModalOpen();
  const setIsWalletModalOpen = formElements.useSetIsWalletModalOpen();
  const connectionStatus = reactCore.useConnectionStatus();
  const [prevConnectionStatus, setPrevConnectionStatus] = React.useState(connectionStatus);
  React.useEffect(() => {
    setPrevConnectionStatus(connectionStatus);
  }, [connectionStatus]);
  const disconnect = reactCore.useDisconnect();
  const wallet = reactCore.useWallet();
  const isWrapperConnected = !!wallet?.getPersonalWallet();
  const isWrapperScreen = typeof screen !== "string" && !!screen.personalWallets;

  // reopen the screen to complete wrapper wallet's next step after connecting a personal wallet
  React.useEffect(() => {
    if (!isWrapperConnected && isWrapperScreen && !isWalletModalOpen && connectionStatus === "connected" && prevConnectionStatus === "connecting") {
      setIsWalletModalOpen(true);
    }
  }, [isWalletModalOpen, connectionStatus, setIsWalletModalOpen, isWrapperScreen, isWrapperConnected, prevConnectionStatus]);
  return /*#__PURE__*/jsxRuntime.jsx(CustomThemeProvider, {
    theme: theme,
    children: /*#__PURE__*/jsxRuntime.jsx(Modal, {
      size: modalSize,
      open: isWalletModalOpen,
      setOpen: value => {
        setIsWalletModalOpen(value);
        if (!value) {
          setScreen(initialScreen); // reset screen
        }

        if (connectionStatus === "connecting") {
          disconnect();
        }
      },
      children: /*#__PURE__*/jsxRuntime.jsx(ConnectModalContent, {
        initialScreen: initialScreen,
        screen: screen,
        setScreen: setScreen
      })
    })
  });
};
const LeftContainer = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ${formElements.noScrollBar}
  position: relative;
  border-right: 1px solid ${p => p.theme.colors.separatorLine};
`;

const ConnectModalInline = props => {
  const {
    screen,
    setScreen,
    initialScreen
  } = useScreen();
  const walletConfigs = reactCore.useWallets();
  const modalSize = formElements.isMobile() || walletConfigs.length === 1 ? "compact" : props.modalSize;
  const content = /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx(ConnectModalContent, {
      initialScreen: initialScreen,
      screen: screen,
      setScreen: setScreen
    }), /*#__PURE__*/jsxRuntime.jsx(CrossContainer, {
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.IconButton, {
        type: "button",
        "aria-label": "Close",
        children: /*#__PURE__*/jsxRuntime.jsx(reactIcons.Cross2Icon, {
          style: {
            width: formElements.iconSize.md,
            height: formElements.iconSize.md,
            color: "inherit"
          }
        })
      })
    })]
  });
  const walletUIStatesProps = {
    theme: props.theme || formElements.defaultTheme,
    modalSize: modalSize,
    title: props.modalTitle,
    termsOfServiceUrl: props.termsOfServiceUrl,
    privacyPolicyUrl: props.privacyPolicyUrl,
    welcomeScreen: props.welcomeScreen,
    titleIconUrl: props.modalTitleIconUrl
  };
  return /*#__PURE__*/jsxRuntime.jsx(formElements.WalletUIStatesProvider, {
    ...walletUIStatesProps,
    children: /*#__PURE__*/jsxRuntime.jsx(CustomThemeProvider, {
      theme: walletUIStatesProps.theme,
      children: /*#__PURE__*/jsxRuntime.jsxs(ConnectModalInlineContainer, {
        className: props.className,
        style: {
          height: modalSize === "compact" ? "auto" : formElements.widemodalMaxHeight,
          maxWidth: modalSize === "compact" ? formElements.modalMaxWidthCompact : formElements.modalMaxWidthWide
        },
        children: [props.modalSize === "compact" ? /*#__PURE__*/jsxRuntime.jsxs(DynamicHeight, {
          children: [" ", content, " "]
        }) : content, /*#__PURE__*/jsxRuntime.jsx(SyncedWalletUIStates, {
          ...walletUIStatesProps
        })]
      })
    })
  });
};
function SyncedWalletUIStates(props) {
  const setModalConfig = React.useContext(formElements.SetModalConfigCtx);

  // update modalConfig on props change
  React.useEffect(() => {
    setModalConfig(c => ({
      ...c,
      title: props.title || formElements.defaultModalTitle,
      theme: props.theme || "dark",
      modalSize: (formElements.isMobile() ? "compact" : props.modalSize) || "wide",
      termsOfServiceUrl: props.termsOfServiceUrl,
      privacyPolicyUrl: props.privacyPolicyUrl,
      welcomeScreen: props.welcomeScreen,
      titleIconUrl: props.titleIconUrl
    }));
  }, [props.title, props.theme, props.modalSize, props.termsOfServiceUrl, props.privacyPolicyUrl, props.welcomeScreen, props.titleIconUrl, setModalConfig]);
  return /*#__PURE__*/jsxRuntime.jsx(formElements.WalletUIStatesProvider, {
    ...props
  });
}
const ConnectModalInlineContainer = styled__default["default"].div`
  background: ${p => p.theme.colors.modalBg};
  color: ${p => p.theme.colors.primaryText};
  transition: background 0.2s ease;
  border-radius: ${formElements.radius.xl};
  width: 100%;
  box-sizing: border-box;
  box-shadow: ${formElements.shadow.lg};
  position: relative;
  border: 1px solid ${p => p.theme.colors.borderColor};
  line-height: 1;
  overflow: hidden;
  font-family: ${p => p.theme.fontFamily};
  & *::selection {
    background-color: ${p => p.theme.colors.primaryText};
    color: ${p => p.theme.colors.modalBg};
  }
`;

let video;
function supportsVideoType(mimeType) {
  if (typeof window === "undefined" || !mimeType || !mimeType.startsWith("video/")) {
    return "";
  }
  if (!video) {
    video = document.createElement("video");
  }
  return video.canPlayType(mimeType);
}
function shouldRenderVideoTag(mimeType) {
  return !!supportsVideoType(mimeType);
}
let audio;
function supportsAudioType(mimeType) {
  if (typeof window === "undefined" || !mimeType || !mimeType.startsWith("audio/")) {
    return "";
  }
  if (!audio) {
    audio = document.createElement("audio");
  }
  return audio.canPlayType(mimeType);
}
function shouldRenderAudioTag(mimeType) {
  return !!supportsAudioType(mimeType);
}

function mergeRefs(refs) {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
        // eslint-disable-next-line eqeqeq
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

const CarbonDocumentUnknown = props => {
  return /*#__PURE__*/jsxRuntime.jsxs("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...props,
    children: [/*#__PURE__*/jsxRuntime.jsx("circle", {
      cx: "9",
      cy: "28.5",
      r: "1.5",
      fill: "currentColor"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M10 25H8v-4h2a2 2 0 0 0 0-4H8a2.002 2.002 0 0 0-2 2v.5H4V19a4.005 4.005 0 0 1 4-4h2a4 4 0 0 1 0 8Z"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "m27.7 9.3l-7-7A.908.908 0 0 0 20 2H10a2.006 2.006 0 0 0-2 2v8h2V4h8v6a2.006 2.006 0 0 0 2 2h6v16H14v2h12a2.006 2.006 0 0 0 2-2V10a.91.91 0 0 0-.3-.7ZM20 10V4.4l5.6 5.6Z"
    })]
  });
};
const CarbonDocumentAudio = props => {
  return /*#__PURE__*/jsxRuntime.jsxs("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...props,
    children: [/*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M29 31a.999.999 0 0 1-.625-.22L23.65 27H20a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3.65l4.726-3.78A1 1 0 0 1 30 17v13a1 1 0 0 1-1 1Zm-8-6h3a1 1 0 0 1 .625.22L28 27.92v-8.84l-3.376 2.7A1 1 0 0 1 24 22h-3Z"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.909.909 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z"
    })]
  });
};
const CarbonPauseFilled = props => {
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...props,
    children: /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
    })
  });
};
const CarbonPlayFilledAlt = props => {
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    ...props,
    children: /*#__PURE__*/jsxRuntime.jsx("path", {
      fill: "currentColor",
      d: "M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
    })
  });
};

const ModelViewer = /* @__PURE__ */React.lazy(() => Promise.resolve().then(function () { return require('./ModelViewer-2c3523be.cjs.dev.js'); }));
const PlayButton = _ref => {
  let {
    onClick,
    isPlaying
  } = _ref;
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);
  const onMouseDown = () => setIsHovering(false);
  const onMouseUp = () => setIsHovering(true);
  return /*#__PURE__*/jsxRuntime.jsx("button", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      transform: "translate(-25%, -25%)",
      maxWidth: "32px",
      width: "8%",
      minWidth: "24px",
      aspectRatio: "1",
      zIndex: 3,
      backgroundColor: "#fff",
      color: "rgb(138, 147, 155)",
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      border: "1px solid rgb(229, 232, 235)",
      cursor: "pointer",
      ...(isHovering ? {
        color: "rgb(53, 56, 64)",
        boxShadow: "rgb(4 17 29 / 25%) 0px 0px 8px 0px"
      } : {})
    },
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    children: !isPlaying ? /*#__PURE__*/jsxRuntime.jsx(CarbonPlayFilledAlt, {
      style: {
        width: "66%",
        height: "66%"
      }
    }) : /*#__PURE__*/jsxRuntime.jsx(CarbonPauseFilled, {
      style: {
        width: "66%",
        height: "66%"
      }
    })
  });
};
const VideoPlayer = /* @__PURE__ */React__default["default"].forwardRef((_ref2, ref) => {
  let {
    src,
    alt,
    poster,
    requireInteraction,
    style,
    width,
    height,
    controls,
    ...restProps
  } = _ref2;
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(!requireInteraction);
  const [muted, setMuted] = React.useState(true);
  React.useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        try {
          videoRef.current.play();
        } catch (err) {
          console.error("error playing video", err);
        }
      } else {
        try {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        } catch (err) {
          console.error("error pausing video", err);
        }
      }
    }
  }, [playing]);
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      position: "relative",
      ...style
    },
    ...restProps,
    children: [/*#__PURE__*/jsxRuntime.jsx("video", {
      ref: mergeRefs([videoRef, ref]),
      src: src ?? undefined,
      poster: poster ?? undefined,
      loop: true,
      playsInline: true,
      controlsList: "nodownload",
      muted: muted,
      preload: poster ? "metadata" : "auto",
      onCanPlay: () => {
        if (playing) {
          videoRef.current?.play();
        }
      },
      width: width,
      height: height,
      controls: controls,
      style: {
        height: "100%",
        width: "100%",
        objectFit: "contain",
        zIndex: 1,
        transition: "opacity .5s",
        opacity: !poster ? 1 : playing ? 1 : 0
      }
    }), poster && /*#__PURE__*/jsxRuntime.jsx("img", {
      src: poster,
      style: {
        objectFit: "contain",
        pointerEvents: "none",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2,
        transition: "opacity .5s",
        opacity: playing ? 0 : 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      alt: alt
    }), /*#__PURE__*/jsxRuntime.jsx(PlayButton, {
      onClick: () => {
        setPlaying(prev => !prev);
        setMuted(false);
      },
      isPlaying: playing
    })]
  });
});
VideoPlayer.displayName = "VideoPlayer";
const AudioPlayer = /* @__PURE__ */React__default["default"].forwardRef((_ref3, ref) => {
  let {
    src,
    alt,
    poster,
    style,
    height,
    width,
    ...restProps
  } = _ref3;
  const audioRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  React.useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [playing]);
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      position: "relative",
      ...style
    },
    ...restProps,
    children: [poster ? /*#__PURE__*/jsxRuntime.jsx("img", {
      height: height,
      width: width,
      src: poster,
      style: {
        height: "100%",
        width: "100%",
        pointerEvents: "none",
        objectFit: "contain"
      },
      alt: alt
    }) : /*#__PURE__*/jsxRuntime.jsx("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        pointerEvents: "none",
        backgroundColor: "#fff",
        color: "rgb(138, 147, 155)"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(CarbonDocumentAudio, {
        style: {
          height: "64px",
          width: "64px"
        }
      })
    }), /*#__PURE__*/jsxRuntime.jsx(PlayButton, {
      onClick: () => {
        setPlaying(prev => !prev);
        setMuted(false);
      },
      isPlaying: playing
    }), /*#__PURE__*/jsxRuntime.jsx("audio", {
      ref: mergeRefs([audioRef, ref]),
      src: src ?? undefined,
      loop: true,
      playsInline: true,
      muted: muted,
      preload: "none",
      controlsList: "nodownload",
      style: {
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        zIndex: -1,
        visibility: "hidden"
      }
    })]
  });
});
AudioPlayer.displayName = "AudioPlayer";
const IframePlayer = /* @__PURE__ */React__default["default"].forwardRef((_ref4, ref) => {
  let {
    src,
    alt,
    poster,
    requireInteraction,
    style,
    ...restProps
  } = _ref4;
  const [playing, setPlaying] = React.useState(!requireInteraction);
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      position: "relative",
      ...style
    },
    ...restProps,
    children: [/*#__PURE__*/jsxRuntime.jsx("iframe", {
      src: playing ? src ?? undefined : undefined,
      ref: ref,
      style: {
        objectFit: "contain",
        zIndex: 1,
        height: "100%",
        width: "100%",
        transition: "opacity .5s",
        opacity: !poster ? 1 : playing ? 1 : 0
      },
      sandbox: "allow-scripts",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    }), poster && /*#__PURE__*/jsxRuntime.jsx("img", {
      src: poster,
      style: {
        objectFit: "contain",
        pointerEvents: "none",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 2,
        transition: "opacity .5s",
        opacity: playing ? 0 : 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      alt: alt
    }), /*#__PURE__*/jsxRuntime.jsx(PlayButton, {
      onClick: () => {
        setPlaying(prev => !prev);
      },
      isPlaying: playing
    })]
  });
});
IframePlayer.displayName = "IframePlayer";
const LinkPlayer = /* @__PURE__ */React__default["default"].forwardRef((_ref5, ref) => {
  let {
    src,
    alt,
    style,
    ...restProps
  } = _ref5;
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    style: {
      position: "relative",
      ...style
    },
    ...restProps,
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#fff",
        color: "rgb(138, 147, 155)"
      },
      children: /*#__PURE__*/jsxRuntime.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          flexWrap: "nowrap"
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(CarbonDocumentUnknown, {
          style: {
            maxWidth: "128px",
            minWidth: "48px",
            width: "50%",
            aspectRatio: "1"
          }
        }), /*#__PURE__*/jsxRuntime.jsx("a", {
          rel: "noopener noreferrer",
          style: {
            textDecoration: "underline",
            color: "rgb(138, 147, 155)"
          },
          href: src ?? undefined,
          target: "_blank",
          ref: ref,
          children: alt || "File"
        })]
      })
    })
  });
});
LinkPlayer.displayName = "LinkPlayer";

/**
 * This component can be used to render any media type, including image, audio, video, and html files.
 * Its convenient for rendering NFT media files, as these can be a variety of different types.
 * The component falls back to a external link if the media type is not supported.
 * The default size is 300px by 300px, but this can be changed using the `width` and `height` props.
 *
 * Props: {@link MediaRendererProps}
 *
 * @example
 * We can take a video file hosted on IPFS and render it using this component as follows
 * ```jsx
 * const Component = () => {
 *   return <MediaRenderer
 *     src="ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
 *     alt="A mp4 video"
 *   />
 * }
 * ```
 *
 * You can try switching out the `src` prop to different types of URLs and media types to explore the possibilities.
 */
const MediaRenderer = /* @__PURE__ */React__default["default"].forwardRef((_ref6, ref) => {
  let {
    src,
    poster,
    alt,
    gatewayUrl,
    requireInteraction = false,
    width = "300px",
    height = "300px",
    style,
    mimeType,
    ...restProps
  } = _ref6;
  const mergedStyle = {
    objectFit: "contain",
    width,
    height,
    ...style
  };
  const videoOrImageSrc = useResolvedMediaType(src ?? undefined, mimeType, gatewayUrl);
  const possiblePosterSrc = useResolvedMediaType(poster ?? undefined, undefined, gatewayUrl);
  if (!videoOrImageSrc.mimeType) {
    return /*#__PURE__*/jsxRuntime.jsx("img", {
      style: mergedStyle,
      ...restProps,
      ref: ref,
      alt: alt
    });
  } else if (videoOrImageSrc.mimeType.startsWith("text/html")) {
    return /*#__PURE__*/jsxRuntime.jsx(IframePlayer, {
      style: mergedStyle,
      src: videoOrImageSrc.url,
      poster: possiblePosterSrc.url,
      requireInteraction: requireInteraction,
      ...restProps
    });
  } else if (videoOrImageSrc.mimeType.startsWith("model")) {
    return /*#__PURE__*/jsxRuntime.jsx(React.Suspense, {
      fallback: poster ? /*#__PURE__*/jsxRuntime.jsx("img", {
        style: mergedStyle,
        src: poster,
        alt: alt,
        ref: ref,
        ...restProps
      }) : null,
      children: /*#__PURE__*/jsxRuntime.jsx(ModelViewer, {
        style: mergedStyle,
        src: videoOrImageSrc.url || "",
        poster: poster,
        alt: alt,
        ...restProps
      })
    });
  } else if (shouldRenderVideoTag(videoOrImageSrc.mimeType)) {
    return /*#__PURE__*/jsxRuntime.jsx(VideoPlayer, {
      style: mergedStyle,
      src: videoOrImageSrc.url,
      poster: possiblePosterSrc.url,
      requireInteraction: requireInteraction,
      ...restProps
    });
  } else if (shouldRenderAudioTag(videoOrImageSrc.mimeType)) {
    return /*#__PURE__*/jsxRuntime.jsx(AudioPlayer, {
      style: mergedStyle,
      src: videoOrImageSrc.url,
      poster: possiblePosterSrc.url,
      requireInteraction: requireInteraction,
      ...restProps
    });
  } else if (videoOrImageSrc.mimeType.startsWith("image/")) {
    return /*#__PURE__*/jsxRuntime.jsx("img", {
      style: mergedStyle,
      src: videoOrImageSrc.url,
      alt: alt,
      ref: ref,
      ...restProps
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(LinkPlayer, {
    style: mergedStyle,
    src: videoOrImageSrc.url,
    alt: alt,
    ref: ref,
    ...restProps
  });
});
MediaRenderer.displayName = "MediaRenderer";
/**
 * @param uri - the uri to resolve (can be a url or a ipfs://\<cid\>)
 * @returns the fully resolved url + mime type of the media
 *
 * @example
 * Usage with fully formed url:
 * ```jsx
 * const Component = () => {
 *   const resolved = useResolvedMediaType("https://example.com/video.mp4");
 *   console.log("mime type", resolved.data.mimeType);
 *   console.log("url", resolved.data.url);
 *   return null;
 * }
 * ```
 *
 * Usage with ipfs cid:
 * ```jsx
 * const Component = () => {
 *   const resolved = useResolvedMediaType("ipfs://QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvsd");
 *   console.log("mime type", resolved.data.mimeType);
 *   console.log("url", resolved.data.url);
 *   return null;
 * }
 * ```
 */
function useResolvedMediaType(uri, mimeType, gatewayUrl) {
  const storage = reactCore.useStorage();
  const resolvedUrl = React.useMemo(() => {
    if (!uri) {
      return "";
    }
    if (gatewayUrl) {
      return uri.replace("ipfs://", gatewayUrl);
    }
    if (storage) {
      return storage.resolveScheme(uri);
    }
    return uri.replace("ipfs://", "https://ipfs.io/ipfs/");
  }, [uri, storage, gatewayUrl]);
  const resolvedMimType = reactQuery.useQuery(["mime-type", resolvedUrl], () => reactCore.resolveMimeType(resolvedUrl), {
    enabled: !!resolvedUrl && !mimeType,
    initialData: mimeType
  });
  return {
    url: resolvedUrl,
    mimeType: resolvedMimType.data
  };
}

/**
 * This component can be used to render NFTs from the thirdweb SDK.
 * It will render the animation_url if it exists, otherwise it will render the image.
 * The default size is 300px by 300px, but this can be changed using the `width` and `height` props.
 *
 * Props: {@link ThirdwebNftMediaProps}
 *
 * @example
 * ```jsx
 * import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
 * export default function NFTCollectionRender() {
 *   const { contract } = useContract(<your-contract-address>);
 *   const { data: nft, isLoading } = useNFT(contract, 0);
 *
 *   return (
 *     <div>
 *       {!isLoading && nft ? (
 *         <ThirdwebNftMedia metadata={nft.metadata} />
 *       ) : (
 *         <p>Loading...</p>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
const ThirdwebNftMedia = /* @__PURE__ */React__default["default"].forwardRef((_ref, ref) => {
  let {
    metadata,
    width = "300px",
    height = "300px",
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/jsxRuntime.jsx(MediaRenderer, {
    src: metadata.animation_url || metadata.image,
    poster: metadata.image,
    alt: metadata.name?.toString() || "",
    ref: ref,
    width: width,
    height: height,
    style: {
      ...style
    },
    ...props
  });
});
ThirdwebNftMedia.displayName = "ThirdwebNftMedia";

const Popover = props => {
  return /*#__PURE__*/jsxRuntime.jsxs(RXPopover__namespace.Root, {
    open: props.open,
    onOpenChange: props.onOpenChange,
    children: [/*#__PURE__*/jsxRuntime.jsx(RXPopover__namespace.Trigger, {
      asChild: true,
      children: props.children
    }), /*#__PURE__*/jsxRuntime.jsx(RXPopover__namespace.Portal, {
      children: /*#__PURE__*/jsxRuntime.jsxs(PopoverContent, {
        sideOffset: 7,
        side: "top",
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          flex: "row",
          center: "y",
          gap: "sm",
          style: {
            lineHeight: 1.5,
            maxWidth: "200px",
            textAlign: "center"
          },
          children: props.content
        }), /*#__PURE__*/jsxRuntime.jsx(PopoverArrow, {})]
      })
    })]
  });
};
const slideUpAndFade = react.keyframes`
from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const PopoverContent = styled__default["default"]( RXPopover__namespace.Content)`
  border-radius: ${formElements.radius.sm};
  padding: ${formElements.spacing.sm} ${formElements.spacing.md};
  background-color: ${p => p.theme.colors.tooltipBg};
  box-shadow: ${formElements.shadow.md};
  will-change: transform, opacity;
  animation: ${slideUpAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1);
  color: ${p => p.theme.colors.tooltipText};
  font-size: ${formElements.fontSize.md};
`;
const PopoverArrow = styled__default["default"]( RXPopover__namespace.Arrow)`
  fill: ${p => p.theme.colors.tooltipBg};
`;

/**
 *
 * @returns `true` if the wallet does not have a UI and can sign transactions without user interaction.
 */
function useIsHeadlessWallet() {
  const activeWallet = reactCore.useWallet();
  if (!activeWallet) {
    return false;
  }
  const id = activeWallet.walletId;
  return id === wallets.walletIds.localWallet || id === wallets.walletIds.paper || id === wallets.walletIds.magicLink;
}

const TW_WEB3BUTTON = "tw-web3button";
/**
 * A component that allows the user to call an on-chain function on a contract.
 *
 * The button has to be wrapped in a `ThirdwebProvider` in order to function.
 *
 * @example
 * ```javascript
 * import { Web3Button } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *  return (
 *   <div>
 *     <Web3Button contractAddress="0x..." action={(contract) => contract.erc721.transfer("0x...", 1)} />
 *   </div>
 * )
 * }
 * ```
 *
 *
 * @beta
 */
const Web3Button = props => {
  const {
    contractAddress,
    onSuccess,
    onError,
    onSubmit,
    isDisabled,
    contractAbi,
    children,
    action,
    className,
    type,
    style,
    connectWallet
  } = props;
  const address = reactCore.useAddress();
  const sdkChainId = reactCore.useSDKChainId();
  const switchChain = reactCore.useSwitchChain();
  const hasMismatch = reactCore.useNetworkMismatch();
  const connectionStatus = reactCore.useConnectionStatus();
  const queryClient = reactQuery.useQueryClient();
  const requiresConfirmation = !useIsHeadlessWallet();
  const {
    contract
  } = reactCore.useContract(contractAddress, contractAbi || "custom");
  const contextTheme = react.useTheme();
  const theme = props.theme || contextTheme || "dark";
  const [confirmStatus, setConfirmStatus] = React.useState("idle");
  const themeType = typeof theme === "string" ? theme : theme.type;
  const actionMutation = reactQuery.useMutation(async () => {
    invariant__default["default"](contract, "contract is not ready yet");
    if (onSubmit) {
      onSubmit();
    }

    // Wait for the promise to resolve, so errors get caught by onError
    const result = await action(contract);
    return result;
  }, {
    onSuccess: res => {
      if (onSuccess) {
        onSuccess(res);
      }
    },
    onError: err => {
      if (onError) {
        onError(err);
      }
    },
    onSettled: () => queryClient.invalidateQueries()
  });
  if (!address) {
    return /*#__PURE__*/jsxRuntime.jsx(ConnectWallet, {
      style: style,
      theme: theme,
      className: `${className || ""} ${TW_WEB3BUTTON}--connect-wallet`,
      ...connectWallet
    });
  }

  // let onClick = () => actionMutation.mutate();

  const btnStyle = {
    minWidth: "150px",
    minHeight: "43px"
  };
  let button = null;
  const handleSwitchChain = async () => {
    if (sdkChainId) {
      setConfirmStatus("waiting");
      try {
        await switchChain(sdkChainId);
        setConfirmStatus("idle");
      } catch (e) {
        console.error(e);
        setConfirmStatus("idle");
      }
    }
  };

  // Switch Network Button
  if (hasMismatch && !isDisabled) {
    const _button = /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
      variant: "primary",
      type: type,
      className: `${className || ""} ${TW_WEB3BUTTON}--switch-network`,
      onClick: handleSwitchChain,
      style: {
        ...btnStyle,
        ...style
      },
      "data-is-loading": confirmStatus === "waiting",
      "data-theme": themeType,
      children: confirmStatus === "waiting" ? /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
        size: "sm",
        color: "primaryButtonText"
      }) : "Switch Network"
    });
    if (requiresConfirmation) {
      button = /*#__PURE__*/jsxRuntime.jsx(Popover, {
        content: /*#__PURE__*/jsxRuntime.jsx("span", {
          children: "Confirm in Wallet"
        }),
        open: confirmStatus === "waiting",
        onOpenChange: isOpen => {
          if (!isOpen) {
            setConfirmStatus("idle");
          }
        },
        children: _button
      });
    } else {
      button = _button;
    }
  }

  // Disabled Loading Spinner Button
  else if (!isDisabled && (actionMutation.isLoading || !contract || connectionStatus === "connecting" || connectionStatus === "unknown")) {
    button = /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
      variant: "primary",
      type: type,
      className: `${className || ""} ${TW_WEB3BUTTON}`,
      disabled: true,
      style: {
        ...btnStyle,
        ...style
      },
      "data-is-loading": true,
      "data-theme": themeType,
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
        size: "md",
        color: "primaryButtonText"
      })
    });
  }

  // action button
  else {
    button = /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
      variant: "primary",
      type: type,
      className: `${className || ""} ${TW_WEB3BUTTON}`,
      onClick: () => actionMutation.mutate(),
      disabled: isDisabled,
      style: {
        ...btnStyle,
        ...style
      },
      "data-is-loading": "false",
      "data-theme": themeType,
      children: children
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(CustomThemeProvider, {
    theme: theme,
    children: button
  });
};

/**
 *
 * The `<ThirdwebProvider />` component lets you control what networks you want users to connect to,
 * what types of wallets can connect to your app, and the settings for the [Thirdweb SDK](https://docs.thirdweb.com/typescript).
 *
 * @example
 * You can wrap your application with the provider as follows:
 *
 * ```jsx title="App.jsx"
 * import { ThirdwebProvider } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *   return (
 *     <ThirdwebProvider>
 *       <YourApp />
 *     </ThirdwebProvider>
 *   );
 * };
 * ```
 *
 */
const ThirdwebProvider = _ref => {
  let {
    supportedWallets,
    children,
    theme: _theme,
    ...restProps
  } = _ref;
  const wallets = supportedWallets || coinbaseWallet.defaultWallets;
  const theme = _theme || "dark";
  return /*#__PURE__*/jsxRuntime.jsx(formElements.WalletUIStatesProvider, {
    theme: theme,
    children: /*#__PURE__*/jsxRuntime.jsx(CustomThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/jsxRuntime.jsxs(reactCore.ThirdwebProviderCore, {
        ...restProps,
        theme: typeof theme === "string" ? theme : theme.type,
        supportedWallets: wallets,
        children: [children, /*#__PURE__*/jsxRuntime.jsx(ConnectModal, {})]
      })
    })
  });
};

function useInstalledWallets() {
  let isMetamaskInstalled = false;
  let isCoinbaseWalletInstalled = false;
  let isZerionWalletInstalled = false;
  let isTrustWalletInstalled = false;
  const window_ = globalThis?.window;
  if (wallets.assertWindowEthereum(window_)) {
    isMetamaskInstalled = !!wallets.getInjectedMetamaskProvider();
    isCoinbaseWalletInstalled = !!wallets.getInjectedCoinbaseProvider();
    isZerionWalletInstalled = !!window_.ethereum?.isZerion;
    isTrustWalletInstalled = !!window_.ethereum?.isTrust;
  }
  return {
    metamask: isMetamaskInstalled,
    coinbaseWallet: isCoinbaseWalletInstalled,
    trustWallet: isTrustWalletInstalled,
    zerionWallet: isZerionWalletInstalled
  };
}

function useRainbowWallet() {
  const connect = reactCore.useConnect();
  return React.useCallback(async connectOptions => {
    const {
      rainbowWallet
    } = await Promise.resolve().then(function () { return require('./formFields-823274b5.cjs.dev.js'); }).then(function (n) { return n.RainbowWallet; });
    return connect(rainbowWallet(), connectOptions);
  }, [connect]);
}

function useTrustWallet() {
  const connect = reactCore.useConnect();
  return React.useCallback(async connectOptions => {
    const {
      trustWallet
    } = await Promise.resolve().then(function () { return require('./formFields-823274b5.cjs.dev.js'); }).then(function (n) { return n.TrustWallet; });
    return connect(trustWallet(), connectOptions);
  }, [connect]);
}

function useMetamask() {
  const connect = reactCore.useConnect();
  return React.useCallback(async connectOptions => {
    const {
      metamaskWallet
    } = await Promise.resolve().then(function () { return require('./formFields-823274b5.cjs.dev.js'); }).then(function (n) { return n.metamaskWallet$1; });
    return connect(metamaskWallet(), connectOptions);
  }, [connect]);
}

function useCoinbaseWallet() {
  const connect = reactCore.useConnect();
  return React.useCallback(async connectOptions => {
    const {
      coinbaseWallet
    } = await Promise.resolve().then(function () { return require('./formFields-823274b5.cjs.dev.js'); }).then(function (n) { return n.coinbaseWallet$1; });
    return connect(coinbaseWallet(), connectOptions);
  }, [connect]);
}

function useFrameWallet() {
  const connect = reactCore.useConnect();
  return React.useCallback(async connectOptions => {
    const {
      frameWallet
    } = await Promise.resolve().then(function () { return require('./frameWallet-a92fba2b.cjs.dev.js'); });
    return connect(frameWallet(), connectOptions);
  }, [connect]);
}

function useBloctoWallet() {
  const connect = reactCore.useConnect();
  return React.useCallback(async options => {
    const {
      bloctoWallet
    } = await Promise.resolve().then(function () { return require('./bloctoWallet-407626c4.cjs.dev.js'); });
    return connect(bloctoWallet({
      appId: options?.appId
    }), options);
  }, [connect]);
}

function usePaperWallet() {
  const connect = reactCore.useConnect();
  return React.useCallback(async options => {
    const {
      paperWallet
    } = await Promise.resolve().then(function () { return require('./paperWallet-8856f37e.cjs.dev.js'); }).then(function (n) { return n.paperWallet$1; });
    return connect(paperWallet(options), {
      chainId: options.chainId,
      email: options.email
    });
  }, [connect]);
}
function usePaperWalletUserEmail() {
  const wallet = reactCore.useWallet();
  const queryClient = reactQuery.useQueryClient();
  const emailQuery = reactQuery.useQuery([wallet?.walletId, "paper-email"], () => {
    if (!wallet || wallet.walletId !== wallets.walletIds.paper) {
      throw "Not connected to Paper Wallet";
    }
    return wallet.getEmail();
  }, {
    retry: false
  });

  // Invalidate the query when the wallet changes
  React.useEffect(() => {
    queryClient.invalidateQueries([wallet?.walletId, "paper-email"]);
  }, [wallet, queryClient]);
  return emailQuery;
}

function useWalletConnectV1() {
  const connect = reactCore.useConnect();
  return React.useCallback(async options => {
    const {
      walletConnectV1
    } = await Promise.resolve().then(function () { return require('./walletConnectV1-1f532529.cjs.dev.js'); });
    return connect(walletConnectV1(), options);
  }, [connect]);
}
function useWalletConnect() {
  const connect = reactCore.useConnect();
  return React.useCallback(async options => {
    const {
      walletConnect
    } = await Promise.resolve().then(function () { return require('./formFields-823274b5.cjs.dev.js'); }).then(function (n) { return n.walletConnect$1; });
    return connect(walletConnect(options), options);
  }, [connect]);
}

exports.ConnectModalInline = ConnectModalInline;
exports.ConnectWallet = ConnectWallet;
exports.ExportLocalWallet = ExportLocalWallet;
exports.MediaRenderer = MediaRenderer;
exports.NetworkSelector = NetworkSelector;
exports.ThirdwebNftMedia = ThirdwebNftMedia;
exports.ThirdwebProvider = ThirdwebProvider;
exports.Web3Button = Web3Button;
exports.defaultTokens = defaultTokens;
exports.shortenAddress = shortenAddress;
exports.useBloctoWallet = useBloctoWallet;
exports.useCoinbaseWallet = useCoinbaseWallet;
exports.useFrameWallet = useFrameWallet;
exports.useInstalledWallets = useInstalledWallets;
exports.useMetamask = useMetamask;
exports.usePaperWallet = usePaperWallet;
exports.usePaperWalletUserEmail = usePaperWalletUserEmail;
exports.useRainbowWallet = useRainbowWallet;
exports.useResolvedMediaType = useResolvedMediaType;
exports.useScreenContext = useScreenContext;
exports.useTrustWallet = useTrustWallet;
exports.useWalletConnect = useWalletConnect;
exports.useWalletConnectV1 = useWalletConnectV1;
