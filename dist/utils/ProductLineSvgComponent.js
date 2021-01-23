import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
export const ProductLineSvgComponent = props => {
  const {
    name
  } = useContext(ThemeContext);
  const pathProps = {
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