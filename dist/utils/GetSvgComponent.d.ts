import React from 'react';
interface ProductLineSvgComponentProps {
    filteredPaths: JSX.Element;
    danonePaths?: JSX.Element;
}
declare const getSvgComponent: ({ filteredPaths, danonePaths }: ProductLineSvgComponentProps) => React.MemoExoticComponent<(props: React.SVGProps<SVGSVGElement>) => JSX.Element>;
export default getSvgComponent;
