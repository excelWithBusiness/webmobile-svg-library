function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 18,
    height: 20,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M13 2v1.364H5.35v17.272h13.5V12h1.35v8.636c0 .753-.604 1.364-1.35 1.364H5.35C4.604 22 4 21.39 4 20.636V3.364C4 2.61 4.604 2 5.35 2H13zm5.613 1.32a1.405 1.405 0 011.984 0l.992.991c.548.553.548 1.44 0 1.988 0 0-7.67 7.914-8.139 8.035l-1.404.351a1.405 1.405 0 01-1.704-1.702l.351-1.404c.054-.218 1.756-2.005 3.568-3.86l.436-.447a552.61 552.61 0 013.211-3.247l.345-.346.092-.092zm.992.996l-6.59 6.585.033.028.959.96 6.59-6.582-.992-.991z",
    id: "a"
  })), React.createElement("g", {
    transform: "translate(-4 -2)",
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
//# sourceMappingURL=IconEdit.js.map