import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20.21 14.07a2 2 0 01-.72-1.64V12v-.43a2 2 0 01.72-1.64l.8-.66A1 1 0 0021.24 8l-1.16-2a1 1 0 00-.86-.5.84.84 0 00-.35.07l-1 .36a1.89 1.89 0 01-.7.13 2 2 0 01-1.08-.32 5.48 5.48 0 00-.74-.43 2 2 0 01-1.06-1.45l-.17-1a1 1 0 00-1-.84h-2.3a1 1 0 00-1 .84l-.17 1a2 2 0 01-1.02 1.45 5.48 5.48 0 00-.74.43 2 2 0 01-1.08.32 1.89 1.89 0 01-.7-.13l-1-.36a.84.84 0 00-.35-.07 1 1 0 00-.86.5L2.76 8A1 1 0 003 9.27l.8.66a2 2 0 01.72 1.64v.86a2 2 0 01-.72 1.64l-.8.66A1 1 0 002.76 16l1.16 2a1 1 0 00.86.5.84.84 0 00.35-.07l1-.36a1.89 1.89 0 01.7-.13 2 2 0 011.08.32 5.48 5.48 0 00.74.43 2 2 0 011.06 1.45l.17 1a1 1 0 001 .84h2.3a1 1 0 001-.84l.17-1a2 2 0 011.06-1.45 5.48 5.48 0 00.74-.43 2 2 0 011.08-.32 1.89 1.89 0 01.7.13l1 .36a.84.84 0 00.35.07 1 1 0 00.86-.5l1.16-2a1 1 0 00-.3-1.27zM12 17.5a5.5 5.5 0 115.5-5.5 5.5 5.5 0 01-5.5 5.5zm0-7.5a2 2 0 102 2 2 2 0 00-2-2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
