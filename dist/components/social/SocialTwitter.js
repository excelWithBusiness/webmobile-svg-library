function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24
  }, props), React.createElement("path", {
    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544A8.127 8.127 0 015.5 16.898a5.778 5.778 0 004.252-1.189 2.879 2.879 0 01-2.684-1.995 2.88 2.88 0 001.298-.049c-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359a2.877 2.877 0 01-.889-3.835 8.153 8.153 0 005.92 3.001 2.876 2.876 0 014.895-2.62 5.73 5.73 0 001.824-.697 2.884 2.884 0 01-1.263 1.589 5.73 5.73 0 001.649-.453 5.765 5.765 0 01-1.433 1.489z"
  }));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=SocialTwitter.js.map