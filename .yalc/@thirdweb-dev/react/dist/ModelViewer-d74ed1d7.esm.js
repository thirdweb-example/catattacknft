import '@google/model-viewer';
import React from 'react';
import { jsx } from 'react/jsx-runtime';

/* eslint-disable @typescript-eslint/no-namespace */
const ModelViewer = /* @__PURE__ */React.forwardRef((_ref, ref) => {
  let {
    src,
    alt,
    poster,
    style
  } = _ref;
  return /*#__PURE__*/jsx("div", {
    style: {
      ...style
    },
    ref: ref,
    children: src ? /*#__PURE__*/jsx("model-viewer", {
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

export { ModelViewer, ModelViewer as default };
