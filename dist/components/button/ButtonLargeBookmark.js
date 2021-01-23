function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 50,
    height: 49,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M24.902 5.714v20.573l-8.235-8-8.236 8V5.714h16.471zm0-1.714H8.432c-.975 0-1.765.768-1.765 1.714v20.573c0 .693.43 1.317 1.09 1.583a1.803 1.803 0 001.921-.371l6.989-6.927 6.988 6.927c.505.49 1.263.636 1.922.37a1.715 1.715 0 001.09-1.582V5.714c0-.946-.79-1.714-1.765-1.714z",
    id: "a"
  })), React.createElement("g", {
    transform: "translate(1.833 1)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    transform: "translate(7.167 8)"
  }, React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, React.createElement("use", {
    xlinkHref: "#a"
  })), React.createElement("use", {
    fill: "#000",
    xlinkHref: "#a"
  }), React.createElement("g", {
    mask: "url(#b)",
    fill: "#999"
  }, React.createElement("path", {
    d: "M0 0h32v32H0z"
  }))), React.createElement("circle", {
    stroke: "#979797",
    strokeWidth: 2,
    cx: 23.5,
    cy: 23.5,
    r: 23.5
  })));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=ButtonLargeBookmark.js.map