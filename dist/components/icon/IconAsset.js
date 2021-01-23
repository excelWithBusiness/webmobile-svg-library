function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 15,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M8.223.209l5.334 2.667a2 2 0 011.11 1.79v6.354a2 2 0 01-1.109 1.789l-5.333 2.666a2 2 0 01-1.79 0L1.1 12.809A1.998 1.998 0 010 11.013V4.666a2 2 0 011.109-1.79L6.443.21a2 2 0 011.78 0zm-6.89 4.709v6.1a.666.666 0 00.365.598L6.666 14.1V7.584L1.333 4.918zm12-.001L8 7.584v6.513l4.963-2.481a.667.667 0 00.37-.597V4.917zM7.038 1.402L2.16 3.84l5.173 2.587 5.173-2.587-4.877-2.437a.666.666 0 00-.59 0z",
    id: "a"
  })), React.createElement("use", {
    fill: "#999",
    xlinkHref: "#a",
    fillRule: "evenodd"
  }));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconAsset.js.map