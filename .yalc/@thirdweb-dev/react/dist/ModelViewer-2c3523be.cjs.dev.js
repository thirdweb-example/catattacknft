'use strict';

require('@google/model-viewer');
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

/* eslint-disable @typescript-eslint/no-namespace */
const ModelViewer = /* @__PURE__ */React__default["default"].forwardRef((_ref, ref) => {
  let {
    src,
    alt,
    poster,
    style
  } = _ref;
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    style: {
      ...style
    },
    ref: ref,
    children: src ? /*#__PURE__*/jsxRuntime.jsx("model-viewer", {
      src: src,
      alt: alt || "3D Model",
      "camera-controls": true,
      poster: poster ? poster : null,
      style: {
        width: "100%",
        height: "100%"
      }
    }) : null
  });
});
ModelViewer.displayName = "ModelViewer";

exports.ModelViewer = ModelViewer;
exports["default"] = ModelViewer;
