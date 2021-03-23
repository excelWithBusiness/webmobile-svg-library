function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    fill: "#666",
    d: "M9.944 0a.74.74 0 01.106.007L9.944 0a.733.733 0 01.442.148l.07.06 4.332 4.267c.025.024.048.05.069.078l-.069-.078a.714.714 0 01.128.17l.011.022a.67.67 0 01.033.077l.007.023a.647.647 0 01.033.21v8.534c0 1.178-.97 2.133-2.167 2.133H4.167C2.97 15.644 2 14.69 2 13.511V2.133C2 .955 2.97 0 4.167 0zm-.722 1.422H4.167a.717.717 0 00-.723.711v11.378c0 .393.324.711.723.711h8.666a.717.717 0 00.723-.71l-.001-7.824h-3.61a.719.719 0 01-.716-.614l-.007-.096V1.422zm2.167 9.245c.399 0 .722.318.722.71a.717.717 0 01-.722.712H5.61a.717.717 0 01-.722-.711c0-.393.323-.711.722-.711zm0-2.845c.399 0 .722.319.722.711a.717.717 0 01-.722.711H5.61a.717.717 0 01-.722-.71c0-.393.323-.712.722-.712zM7.056 4.978c.398 0 .722.318.722.71a.717.717 0 01-.722.712H5.61a.717.717 0 01-.722-.711c0-.393.323-.711.722-.711zm3.61-2.551v1.84l1.867-.001-1.867-1.839z",
    fillRule: "evenodd"
  }));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconArticle.js.map