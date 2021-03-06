function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    d: "M15.99 8.156v-.16a7.97 7.97 0 00-.365-2.418.53.53 0 00-.072-.219 7.974 7.974 0 00-.83-1.694.538.538 0 00-.152-.418.531.531 0 00-.233-.131 8.07 8.07 0 00-1.131-1.193.455.455 0 00-.324-.262 8.002 8.002 0 00-9.91.116 7.999 7.999 0 006.69 14.048A8 8 0 0016 8.207s-.01-.033-.01-.051zm-4.954 2.294l3.742-3.742c.079.41.12.827.124 1.244l-3.179 3.178-.687-.68zM9.58 8.996l4.411-4.415c.17.298.317.608.44.928l-4.167 4.167-.684-.68zm-1.226-4.6h.022l2.546-2.545a.513.513 0 00.044-.07c.307.146.604.313.887.502L8.352 5.785l.003-1.39zm0-1.535V1.105c.511.026 1.017.11 1.51.247l-1.51 1.51zm0 4.91v-.466h.022l4.332-4.33c.236.219.458.454.662.705L8.81 8.24l-.455-.47zm-7.273.225a6.91 6.91 0 016.182-6.87v6.87c0 .144.058.283.16.385l.76.76a.513.513 0 00.48.48l.975.975a.513.513 0 00.48.48l.975.974a.513.513 0 00.48.48l.804.804A6.911 6.911 0 011.082 7.996zm12.078 4.578l-.67-.67 2.183-2.181a6.88 6.88 0 01-1.513 2.85z",
    fill: "#999",
    fillRule: "evenodd"
  }));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconPercentage.js.map