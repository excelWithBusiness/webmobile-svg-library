function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 15,
    height: 18,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M18.676 3H6.324C5.593 3 5 3.576 5 4.286v15.43c0 .519.323.987.817 1.186a1.352 1.352 0 001.442-.278l5.241-5.195 5.241 5.195c.379.367.948.477 1.442.278.494-.199.817-.667.817-1.187V4.285C20 3.576 19.407 3 18.676 3z",
    id: "a"
  })), React.createElement("g", {
    transform: "translate(-5 -3)",
    fill: "none",
    fillRule: "evenodd"
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
    d: "M0 0h24v24H0z"
  }))));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconBookmarkActive.js.map