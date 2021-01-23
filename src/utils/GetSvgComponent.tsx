import React from 'react'
import { ProductLineSvgComponent } from './ProductLineSvgComponent'

interface ProductLineSvgComponentProps {
  filteredPaths: JSX.Element
  contentPaths?: JSX.Element
}

const getSvgComponent = ({ filteredPaths, contentPaths }: ProductLineSvgComponentProps) => {
  const Component = (props: React.SVGProps<SVGSVGElement>) => (
    <ProductLineSvgComponent {...props} filteredPaths={filteredPaths} contentPaths={contentPaths} />
  )

  return React.memo(Component)
}

export default getSvgComponent
