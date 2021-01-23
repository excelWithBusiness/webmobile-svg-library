import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={473.333}
      height={189.333}
      viewBox="0 0 355 142"
      {...props}
    />
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
