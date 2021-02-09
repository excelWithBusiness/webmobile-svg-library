import * as React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

interface ProductLineSvgComponentProps extends React.SVGProps<SVGSVGElement> {
  filteredPaths: JSX.Element
  contentPaths?: JSX.Element
}

export const ProductLineSvgComponent = (props: ProductLineSvgComponentProps) => {
  const { name }: { name: 'Filtered' | 'Danone' } = useContext(ThemeContext)
  const pathProps = {
    Filtered: props.filteredPaths,
    Danone: props.contentPaths,
  }

  return (
    <svg width={32} height={32} viewBox={'0 0 24 24'}>
      {pathProps[name]}
    </svg>
  )
}
