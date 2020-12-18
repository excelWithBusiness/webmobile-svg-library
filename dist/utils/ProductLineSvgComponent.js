import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
export var ProductLineSvgComponent = function ProductLineSvgComponent(props) {
  var _useContext = useContext(ThemeContext),
      name = _useContext.name;

  var pathProps = {
    Filtered: props.filteredPaths,
    Content: props.contentPaths
  };
  return React.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: '0 0 24 24'
  }, pathProps[name]);
};
//# sourceMappingURL=ProductLineSvgComponent.js.map