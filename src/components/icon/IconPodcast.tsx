import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={12}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M12.346.208a.711.711 0 011.005 0 7.822 7.822 0 010 11.061.711.711 0 11-1.006-1.006 6.4 6.4 0 000-9.05.711.711 0 010-1.005zM2.29.208a.711.711 0 011.006 1.006 6.4 6.4 0 000 9.05.711.711 0 11-1.006 1.005 7.822 7.822 0 010-11.06zm8.043 2.013a.711.711 0 011.005 0 4.978 4.978 0 010 7.043.711.711 0 11-1.005-1.006 3.556 3.556 0 000-5.031.711.711 0 010-1.006zm-6.03-.008A.711.711 0 015.308 3.22a3.556 3.556 0 000 5.03.711.711 0 11-1.005 1.007 4.978 4.978 0 010-7.044zm3.518 1.392a2.133 2.133 0 110 4.267 2.133 2.133 0 010-4.267zm0 1.423a.711.711 0 100 1.422.711.711 0 000-1.422z"
          id="a"
        />
      </defs>
      <use fill="#999" xlinkHref="#a" fillRule="evenodd" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
