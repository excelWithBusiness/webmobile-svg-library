function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 19,
    height: 19,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M12.341 15.004a4.282 4.282 0 00-.146 1.45h-2.62v-1.45h2.766zm7.304-12.822H5.446a2.176 2.176 0 00-2.173 2.173v14.199c0 1.198.975 2.173 2.173 2.173h9.694a12.18 12.18 0 01-.979-.812 9.005 9.005 0 01-.623-.637H5.446a.725.725 0 01-.724-.724V4.355c0-.4.325-.724.724-.724h14.199c.4 0 .724.325.724.724v7.976a3.772 3.772 0 011.45.712V4.355a2.176 2.176 0 00-2.174-2.173zM6.678 16.453h1.448v-1.449H6.678v1.45zm1.448-5.723H6.678v1.449h1.448V10.73zm0-4.274H6.678v1.449h1.448V6.456zm10.251 4.274H9.575v1.449h8.802V10.73zm.036-4.274H9.575v1.449h8.838V6.456zm2.701 7.898c.454.457.704 1.1.704 1.812 0 .85-.51 1.755-1.514 2.687a11.996 11.996 0 01-1.985 1.463l-.233.134-.36.207-.361-.207-.234-.134a11.976 11.976 0 01-1.984-1.463c-1.005-.932-1.515-1.837-1.515-2.687 0-.712.25-1.355.704-1.812a2.378 2.378 0 011.705-.69c.81 0 1.348.285 1.686.579.393-.339.951-.579 1.682-.579.658 0 1.263.245 1.705.69zm-.745 1.812c0-.64-.376-1.053-.96-1.053-.072 0-.139.004-.2.012-.262.071-.523.289-.75.54a.34.34 0 00-.01.038v-.009h-.017a6.038 6.038 0 00-.703 1.013s-.303-.555-.72-1.013H17v.01c0-.001-.001-.01-.005-.024-.244-.265-.527-.495-.81-.561a1.724 1.724 0 00-.145-.006c-.583 0-.96.413-.96 1.053 0 .858 1.504 2.13 2.644 2.818 1.14-.688 2.644-1.96 2.644-2.818z",
    id: "a"
  })), React.createElement("g", {
    transform: "translate(-3 -2)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, React.createElement("use", {
    xlinkHref: "#a"
  })), React.createElement("use", {
    fill: "#999",
    fillRule: "nonzero",
    xlinkHref: "#a"
  }), React.createElement("g", {
    mask: "url(#b)",
    fill: "#999"
  }, React.createElement("path", {
    d: "M0 0h23.564v23.564H0z"
  }))));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconAddToPlaylist.js.map