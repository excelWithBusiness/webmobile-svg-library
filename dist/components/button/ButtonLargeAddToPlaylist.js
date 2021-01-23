function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 49,
    height: 49,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M15.426 18.755a5.352 5.352 0 00-.182 1.811h-3.275v-1.81h3.457zm9.13-16.028H6.808A2.72 2.72 0 004.09 5.444v17.748a2.72 2.72 0 002.717 2.717h12.116c-.389-.291-.81-.633-1.222-1.015a11.256 11.256 0 01-.78-.796H6.809a.907.907 0 01-.906-.906V5.444c0-.5.406-.906.906-.906h17.748c.5 0 .906.407.906.906v9.97c.664.164 1.28.466 1.81.89V5.443a2.72 2.72 0 00-2.716-2.717zm-16.21 17.84h1.812v-1.812H8.347v1.811zm1.812-7.154H8.347v1.81h1.811v-1.81zm0-5.343H8.347v1.811h1.811V8.07zm12.813 5.343H11.97v1.81h11.002v-1.81zm.046-5.343H11.969v1.811h11.048V8.07zm3.376 9.872c.567.571.88 1.376.88 2.265 0 1.063-.637 2.194-1.894 3.359a14.995 14.995 0 01-2.48 1.829l-.292.168-.45.258-.45-.258-.293-.168a14.97 14.97 0 01-2.48-1.829c-1.257-1.165-1.894-2.296-1.894-3.359 0-.89.313-1.694.88-2.265.553-.556 1.31-.862 2.131-.862 1.013 0 1.685.357 2.108.723.492-.423 1.189-.723 2.103-.723.822 0 1.578.306 2.13.862zm-.931 2.265c0-.8-.471-1.316-1.2-1.316-.09 0-.174.006-.252.015-.326.09-.652.361-.937.675a.424.424 0 00-.011.048v-.011h-.022c-.508.572-.88 1.265-.88 1.265s-.377-.693-.899-1.265h-.01v.011a.266.266 0 00-.006-.029c-.305-.331-.658-.619-1.014-.701a2.155 2.155 0 00-.18-.008c-.729 0-1.2.517-1.2 1.316 0 1.073 1.88 2.663 3.305 3.523 1.426-.86 3.306-2.45 3.306-3.523z",
    id: "a"
  })), React.createElement("g", {
    transform: "translate(1 1)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    stroke: "#979797",
    strokeWidth: 2,
    cx: 23.5,
    cy: 23.5,
    r: 23.5
  }), React.createElement("g", {
    transform: "translate(8 9)"
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
    d: "M0 0h29.455v29.455H0z"
  })))));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=ButtonLargeAddToPlaylist.js.map