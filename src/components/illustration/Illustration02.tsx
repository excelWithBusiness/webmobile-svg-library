import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={480} height={343} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="48.59%" y1="-32.453%" x2="50.276%" y2="66.038%" id="a">
          <stop offset="0%" />
          <stop stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="49.425%" y1="158.945%" x2="50.167%" y2="16.272%" id="b">
          <stop offset="0%" />
          <stop stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="-69.976%" y1="298.135%" x2="70.395%" y2="-.854%" id="c">
          <stop offset="0%" />
          <stop stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="287.642%" y1="275.093%" x2="15.849%" y2="18.559%" id="d">
          <stop offset="0%" />
          <stop stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="-223.088%" y1="236.794%" x2="68.063%" y2="18.431%" id="e">
          <stop offset="0%" />
          <stop stopOpacity={0} offset="100%" />
        </linearGradient>
        <linearGradient x1="84.831%" y1="92.923%" x2="46.791%" y2="42.48%" id="f">
          <stop offset="0%" />
          <stop stopOpacity={0} offset="100%" />
        </linearGradient>
      </defs>
      <g fillRule="nonzero" fill="none">
        <path
          d="M232.855 8.85a164.538 164.538 0 00-42.17 19.41c-13.5 8.794-22.584 21.177-34.936 31.018-24.142 19.11-54.286 31.94-83.182 41.882-11.491 3.961-23.257 7.773-33.226 14.725-15.296 10.663-24.953 27.767-31.005 45.382-13.325 38.655-11.03 83.277 9.445 118.743 19.963 34.457 59.115 60.817 99.74 59.796 51.366-1.246 103.182 2.491 154.711 2.491 35.896.847 71.929 1.682 107.612-2.33 14.91-1.681 29.944-4.272 43.47-10.8 25.364-12.27 46.924-33.846 54.06-61.577a86.825 86.825 0 00-10.342-66.833c-7.561-12.109-18.142-22.324-24.13-35.28-8.048-17.44-6.825-37.471-9.183-56.506a147.903 147.903 0 00-28.198-69.936c-9.22-12.27-20.761-23.407-34.972-29.474-9.794-4.173-20.474-5.793-31.055-7.026-34.111-3.937-69.158-4.024-102.31 5.07-1.421.399-2.869.81-4.329 1.246z"
          fill="#DDD"
          opacity={0.18}
        />
        <path fill="#DDD" d="M216 270h84v44h-84z" />
        <path fill="url(#a)" d="M216 270h84v44h-84z" />
        <path
          d="M396 123.211v124.515a26.222 26.222 0 01-7.649 18.575A26.18 26.18 0 01369.81 274H138.19a26.18 26.18 0 01-18.541-7.7A26.222 26.222 0 01112 247.727V123.211C112 108.735 123.726 97 138.19 97h231.57a26.18 26.18 0 0118.551 7.66A26.222 26.222 0 01396 123.21z"
          fill="#FFF"
        />
        <path
          d="M396 123.211v124.515a26.222 26.222 0 01-7.649 18.575A26.18 26.18 0 01369.81 274H138.19a26.18 26.18 0 01-18.541-7.7A26.222 26.222 0 01112 247.727V123.211C112 108.735 123.726 97 138.19 97h231.57a26.18 26.18 0 0118.551 7.66A26.222 26.222 0 01396 123.21z"
          fill="url(#b)"
        />
        <path
          d="M396 238v8.734a26.21 26.21 0 01-7.649 18.57A26.183 26.183 0 01369.81 273H138.19a26.183 26.183 0 01-18.541-7.697A26.21 26.21 0 01112 246.734V238h284z"
          fill="#DDD"
        />
        <path
          d="M383.83 173.971s-7.715 25.695-5.395 31.273c2.321 5.578 27.158 29.756 27.158 29.756l6.407-5.402-18.751-27.35s7.135-28.465 1.148-36.123c-5.987-7.658-10.567 7.846-10.567 7.846z"
          fill="#282328"
        />
        <path
          d="M395.478 162a33.117 33.117 0 0110.415 13.073c3.755 8.519-2.166 28.647-2.166 28.647L429 217.243 425.783 226s-30.592-11.259-34.047-15.4c-3.455-4.14-7.736-32.875-7.736-32.875L395.478 162z"
          fill="#473F47"
        />
        <path
          d="M356.833 133.462l-10.164-3.827a13.519 13.519 0 00-2.497-.776c-.887-.145-1.786-.109-2.672-.181a36.587 36.587 0 01-6.456-1.756 8.442 8.442 0 01-2.497-1.03 3.446 3.446 0 01-1.523-2.059c-.19-1.569.77-3.055 2.31-3.573a6.42 6.42 0 014.595.376c1.948.847 3.896 1.405 5.831 2.277a336.71 336.71 0 007.105 3.076 44.494 44.494 0 0020.89 3.452c1.848.896 3.808 5.571 4.245 7.533-1.099.267-14.06-1.574-19.167-3.512zM166.124 138.337l10.92.185c.897-.019 1.794.055 2.676.221.875.197 1.688.566 2.501.825 2.656.785 5.52.492 7.955-.812 1.826-.997 3.377-2.56 5.403-3.113.411-.055.8-.216 1.126-.467a1.3 1.3 0 000-1.649c-.385-.47-.91-.81-1.5-.972a11.5 11.5 0 00-6.542.148c-1.334.302-2.697.46-4.065.467-3.365.197-6.73.296-10.106.37a43.813 43.813 0 01-20.6-4.54c-2.064.16-5.716 3.826-6.892 5.5.888.651 13.608 3.74 19.124 3.837z"
          fill="#FFBBAB"
        />
        <path
          d="M154.437 126.602c.303.195.508.511.563.869a1.26 1.26 0 01-.5.818l-4.315 4.093a5.85 5.85 0 01-2.213 1.512 5.342 5.342 0 01-2.776-.177 48.318 48.318 0 01-12.306-5.037 13.328 13.328 0 01-3.376-2.582 5.562 5.562 0 01-1.514-3.891 5.181 5.181 0 012.339-3.879c2.964-2.015 5.94-1.423 9.054-.29a50.301 50.301 0 019.904 4.874 51.566 51.566 0 015.14 3.69z"
          fill="#DDD"
        />
        <path
          d="M365 130.043v126.914c-.007 3.887-3.15 7.036-7.03 7.043H169.03c-3.88-.007-7.023-3.156-7.03-7.043V130.043a7.036 7.036 0 012.056-4.984A7.013 7.013 0 01169.03 123h188.938a7.013 7.013 0 014.975 2.06 7.036 7.036 0 012.056 4.983z"
          fill="#FFF"
        />
        <path
          d="M365 129.762V132H162v-2.238a6.621 6.621 0 012.056-4.785A7.163 7.163 0 01169.03 123h188.938a7.163 7.163 0 014.975 1.977 6.621 6.621 0 012.056 4.785z"
          fill="#DDD"
        />
        <path
          d="M116 160.786s-3.656 8.936-7.808 9.198c-4.153.262-38.21-2.82-38.21-2.82L69 163.083s21.498-3.482 26.111-2.31a73.234 73.234 0 007.2 1.523l3.083-2.296 10.606.786z"
          fill="#EF9786"
        />
        <path
          d="M126.004 161a5.51 5.51 0 010 6.321C123.734 170.667 83.893 190 83.893 190L82 185.728s20.924-18.777 25.662-19.148a3.951 3.951 0 003.11-1.347 3.822 3.822 0 00.877-3.233l14.355-1zM139 141.771s.333 3.945 5.765 5.834c5.431 1.89 28.454 0 28.454 0 2.383 0 4.74 1.817 7.073 1.303 2.334-.514 4.346-2.893 3.519-5.057a4.25 4.25 0 00-2.617-2.295 12.587 12.587 0 00-3.605-.55 14.43 14.43 0 00-6.283.61c-.8.443-1.624.842-2.47 1.195a9.945 9.945 0 01-3.036.24l-12.505-.371c-2.407-.072-5.271-.395-6.382-2.463-.383-.705-.556-1.602-1.235-2.008a2.314 2.314 0 00-1.506-.144c-2.382.359-3.456 2.188-5.172 3.706z"
          fill="#FFBBAB"
        />
        <path
          d="M137.24 141.24c.189.242.425.442.693.587.327.142.683.198 1.036.163a16.443 16.443 0 006.723-2.313.492.492 0 00.28-.263.384.384 0 000-.288l-2.436-8.352a6.783 6.783 0 00-1.145-2.501 3.89 3.89 0 00-3.288-1.25 7.202 7.202 0 00-3.326 1.363 6.826 6.826 0 00-2.436 2.725c-.816 1.826 0 3.276.683 4.94a17.572 17.572 0 003.215 5.189z"
          fill="#DDD"
        />
        <path
          d="M155.373 114.835c-.035.419-.035.84 0 1.26.082.392.015.8-.186 1.146-.272.314-.743.314-1.127.466-1.238.453-1.498 2.267-2.687 2.834-.39.169-.814.246-1.238.226a4.293 4.293 0 01-3.517-1.322c-.223-.277-.52-.643-.83-.479-.309.164-.198.227-.272.365-.867 1.928-3.38 3.64-5.25 2.028a8.211 8.211 0 01-2.118-4.169c-.495-1.75.347-3.59 1.115-5.152a38.966 38.966 0 012.823-4.963c1.672-2.405 3.963-4.635 6.823-5.038a7.487 7.487 0 016.365 2.52 6.48 6.48 0 011.548 3.16 4.61 4.61 0 01.136 1.89c-.16.778-.384 1.54-.669 2.28-.324.817-.58 1.66-.767 2.52-.112.125-.137.277-.149.428z"
          fill="#FFBBAB"
        />
        <path
          d="M135.414 135.5c-.455.25-.93.462-1.421.632-2.493.918-5.51 1.129-7.391 2.901a7.8 7.8 0 00-1.907 4.873 36.767 36.767 0 002.605 18.298 33.541 33.541 0 01-4.15.633 60.136 60.136 0 01-15.044-.781c-6.356-.98-12.675-2.368-19.106-2.641 2.007-1.798 2.991-4.426 4.238-6.806 4.574-8.803 13.024-14.815 20.327-21.56 3.365-3.111 6.544-6.434 10.183-9.236a18.835 18.835 0 016.107-3.397c6.107-1.785 10.282 2.405 11.067 8.145.561 4.327-1.981 6.906-5.508 8.939z"
          fill="#DDD"
        />
        <path
          d="M157.675 107.043c-.223.613-1.153 2.787-2.07 1.65-.075-.088-.124-.2-.236-.238-.111-.037-.273 0-.397.15a7.505 7.505 0 01-9.46-.125l-.31.438-2.368 3.311c.273-.662-.72-1.25-1.352-.925a2.503 2.503 0 00-1.054 1.787 17.47 17.47 0 01-1.103 3.65 4.501 4.501 0 01-2.74 2.498c-1.24.313-2.567-.137-3.72.225-1.822.525-2.703 2.5-3.794 4.074-2.628 3.748-7.44 5.485-11.952 5.46a11.754 11.754 0 01-3.1-.362 8.365 8.365 0 01-5.456-4.798 7.929 7.929 0 01-.347-1.087 7.53 7.53 0 012.703-7.748 24.115 24.115 0 003.72-2.374 24.407 24.407 0 002.269-3.824 10.088 10.088 0 016.844-3.936 75.854 75.854 0 018.084-.462 7.558 7.558 0 004.203-1.25c1.24-.962 1.922-2.574 3.112-3.648a8.762 8.762 0 013.596-1.725c3.447-.937 7.253-1.25 10.477.288a8.444 8.444 0 014.6 5.61 5.904 5.904 0 01-.149 3.361z"
          fill="#FC682D"
        />
        <path
          d="M81.417 185.039a13.72 13.72 0 00-4.27 1.375c-.609.223-1.15.588-1.575 1.064a3.638 3.638 0 00-.56 2.1 22.53 22.53 0 002.786 11.607c.107.239.272.45.482.613.328.191.72.25 1.093.162 1.345-.26 2.496-1.086 3.138-2.25a7.998 7.998 0 00.989-3.753 9.243 9.243 0 01.247-2.326c.378-1.176 1.302-2.089 1.836-3.227 1.367-3.177-.781-5.753-4.166-5.365zM71.438 161.804a11.361 11.361 0 00-4.11-.768 3.594 3.594 0 00-1.788.201 3.722 3.722 0 00-1.426 1.6 24.131 24.131 0 00-3.106 11.536 1.7 1.7 0 00.108.78c.18.316.47.546.81.643a4.12 4.12 0 003.626-.53 8.27 8.27 0 002.514-2.858c.352-.697.782-1.348 1.281-1.94.858-.869 2.067-1.259 2.997-2.002 2.563-2.116 2.067-5.377-.906-6.662zM394.378 139.334a5.568 5.568 0 01-3.413 2.365 13.26 13.26 0 01-4.223.225c-.573 0-1.134-.087-1.707-.15a46.477 46.477 0 01-7.163-1.251 57.09 57.09 0 01-4.085-1.251 5.426 5.426 0 01-2.392-1.402 5.745 5.745 0 01-.997-2.502c-.112-.488-.212-.964-.324-1.452l-.971-4.341a.942.942 0 01.08-.987.932.932 0 01.916-.365 50.851 50.851 0 0112.856.426 49.97 49.97 0 014.323.9c3.189.826 5.98 2.003 7.312 5.318a5.15 5.15 0 01-.212 4.467z"
          fill="#DDD"
        />
        <path
          d="M407.805 175.486a3.193 3.193 0 01-.982 1.112c-3.587 2.873-8.484 3.748-13.078 3.285a33.554 33.554 0 01-6.294-1.249c-2.379-.674-4.707-1.524-7.023-2.373a19.96 19.96 0 01.981-7.059c1.058-4.572 1.637-9.994.328-14.553l-.114-.35c-.742-2.374-2.09-4.535-2.82-6.908a19.46 19.46 0 01-.754-6.909c.096-1.696.4-3.374.906-4.997a18.386 18.386 0 012.114-4.584 6.903 6.903 0 012.115-2.299h.088a7.606 7.606 0 014.91-.35c3.964.6 7.942 1.412 10.447 4.785 2.504 3.373 3.222 6.446 4.078 10.656 2.001 9.994 4.67 19.9 5.261 30.12a3.721 3.721 0 01-.163 1.673z"
          fill="#DDD"
        />
        <path
          d="M394.628 155.971a7.344 7.344 0 00-1.609 1.5 4.077 4.077 0 00-.443 1.771 67.576 67.576 0 00.165 13.952c.177 1.474.278 3.258-.925 4.175a4.228 4.228 0 01-2.534.62h-1.888c-2.394-.67-4.738-1.512-7.069-2.354-.1-2.373.235-4.744.988-7 1.064-4.536 1.647-9.913.33-14.435l-.114-.347c-.748-2.354-2.103-4.498-2.838-6.852a19.034 19.034 0 01-.76-6.852 59.23 59.23 0 01-4.156-1.239 5.552 5.552 0 01-2.432-1.388 5.605 5.605 0 01-1.014-2.478c-.114-.483-.215-.954-.329-1.437l.228-.607a33.03 33.03 0 017.601 1.76 12.028 12.028 0 015.815 4.881l1.343-.657c.076.818.14 1.636.228 2.478.089.843.152 1.785.241 2.664 0 .43.105.855.304 1.24.284.372.658.67 1.09.867 1.811 1.003 3.8 2.044 5.865 1.548 2.065-.495 2.737-2.044 3.8-3.42.3 1.503.452 3.03.457 4.56.165 2.602-.367 5.402-2.344 7.05z"
          fill="url(#c)"
        />
        <path
          d="M393.992 148.603a1.87 1.87 0 01-.508 1.461l-5.35 6.527a4.21 4.21 0 01-1.04 1.003c-.46.224-.962.35-1.474.371-3.826.285-7.554-1.238-11.034-2.823a51.222 51.222 0 00-8.669-3.629c-2.093-.557-4.335-.668-6.502-1.114-2.365-.285-4.953 1.238-7.195.495s-3.975-3.505-2.886-5.622a4.273 4.273 0 012.898-2.056 12.446 12.446 0 013.716-.136c2.142-.012 4.26.462 6.192 1.387a19.654 19.654 0 004.322 1.944 43.246 43.246 0 005.56 1.338 80.498 80.498 0 0111.233 2.377c.18.085.39.085.57 0a.817.817 0 00.297-.495c.582-2.192 2.737-6.502 5.573-5.622a6.056 6.056 0 012.972 2.328 5.721 5.721 0 011.325 2.266z"
          fill="#FFBBAB"
        />
        <path
          d="M395.94 147.466c-.245.2-.523.359-.822.467-.362.09-.74.09-1.103 0a17.536 17.536 0 01-6.745-3.156c-.116-.075-.244-.164-.27-.29-.004-.1.018-.2.065-.29l3.514-8.067c.5-1.136 1.064-2.234 1.628-3.333a3.527 3.527 0 011.09-1.439 3.235 3.235 0 011.629-.353 4.738 4.738 0 011.513.177 4.978 4.978 0 012.116 1.83 6.75 6.75 0 011.18 1.881 5.25 5.25 0 01.257 1.944 16.34 16.34 0 01-1.527 6.16c-.551 1.276-1.295 3.434-2.526 4.47z"
          fill="#DDD"
        />
        <path
          d="M376.088 112.325c-.675 1.598-.968 3.342-1.655 4.915-.179.36-.315.74-.407 1.13-.08.4.027.814.293 1.13.407.393 1.132.405 1.463.86.145.226.228.484.242.75l.33 2.26c.016.279.094.551.23.798.202.255.47.454.776.578a10.624 10.624 0 004.644 1.032c.352.824.393 1.742.115 2.592a6.599 6.599 0 00.063 2.236c.013.108.057.21.127.295.1.07.221.105.344.098a5.807 5.807 0 001.705-.27l4.212-1.118a2.79 2.79 0 001.895-1.118c.163-.43.25-.882.255-1.34.195-.839.463-1.66.802-2.456a13 13 0 00.458-3.907 38.345 38.345 0 00-.191-5.27 9.032 9.032 0 00-2.456-5.615 7.702 7.702 0 00-4.631-1.843c-1.863-.2-3.748.084-5.459.824a6.43 6.43 0 00-3.155 3.44z"
          fill="#FFBBAB"
        />
        <path
          d="M375.195 105.572a4.558 4.558 0 00.126 2.998 6.285 6.285 0 005.808 4.04c.237-.02.476.006.703.075.171.074.329.176.466.301l2.614 2.146c.58.416 1.078.935 1.471 1.53.337.671.546 1.399.616 2.146.126-.515.367-.996.704-1.405a1.259 1.259 0 011.446-.276c.274.216.461.523.528.865a3.534 3.534 0 01-1.257 3.563c.817.188 1.169 1.13 1.382 1.932l.93 3.513c.42-.066.765-.362.893-.765 0 .188.264.276.428.175a.84.84 0 00.314-.451c.855-2.271 1.647-4.58 2.376-6.888a19.449 19.449 0 001.257-6.837 4.208 4.208 0 00-.39-1.757 1.91 1.91 0 00-1.383-1.053.844.844 0 01-.314-.088.551.551 0 01-.163-.402 9.73 9.73 0 00-.465-2.409 4.847 4.847 0 00-2.69-2.744 4.861 4.861 0 00-3.847.072.806.806 0 01-.604.113.741.741 0 01-.314-.276 4.73 4.73 0 00-2.753-1.505 13.465 13.465 0 00-3.18-.15 4.635 4.635 0 00-1.61.225c-.754.288-.917 1.016-1.508 1.43a3.64 3.64 0 00-1.584 1.882z"
          fill="#FC682D"
        />
        <path
          d="M434.777 220.649c.38.483.202 1.24 0 1.81l-3.95 12.556a3.7 3.7 0 01-.63 1.376 2.368 2.368 0 01-3.366-.198 6.438 6.438 0 01-1.427-3.57 32.28 32.28 0 01-.107-9.458c.19-1.376.725-4.71 2.379-5.12 1.653-.408 5.578 2.046 7.1 2.604zM417 236.58c0 .633-.518 1.14-1.036 1.52l-10.768 8.121c-.396.342-.856.6-1.353.76a2.523 2.523 0 01-1.868-.521 2.535 2.535 0 01-.95-1.696 6.512 6.512 0 01.834-3.8 31.676 31.676 0 015.435-7.995c.973-1.038 3.387-3.509 5.055-2.863 1.668.646 3.653 5.068 4.651 6.474z"
          fill="#473F47"
        />
        <circle fill="#FFF" cx={168.5} cy={127.5} r={2.5} />
        <circle fill="#FFF" cx={175.5} cy={127.5} r={2.5} />
        <circle fill="#FFF" cx={182.5} cy={127.5} r={2.5} />
        <path fill="#DDD" d="M200 310h114v8H200z" />
        <path
          d="M127.267 161.372a34.005 34.005 0 01-4.168.628l-9.086-.308c-3.442-.123-7.047-.296-10.013-2.033 3.755-1.393 6.058-5.2 7.196-8.996 1.14-3.795 1.44-7.825 2.779-11.558a6.057 6.057 0 012.14-3.204c.951-.5 1.993-.81 3.066-.912A23.26 23.26 0 00130.658 129c-.338.32 2.253 4.448 2.503 4.93.25.48.614 1.034.839 1.502-2.503.912-5.532 1.122-7.422 2.884a7.709 7.709 0 00-1.915 4.843 36.206 36.206 0 002.604 18.213z"
          fill="url(#d)"
        />
        <path
          d="M142.177 123.114c.297-.152.648-.152.946 0a51.559 51.559 0 019.482 5.171.85.85 0 01.384.44c.064.284-.154.543-.371.737a78.684 78.684 0 01-3.617 3.257c-2.108 1.784-3.642 1.862-4.588-.775-.358-.944-3.13-8.196-2.236-8.83z"
          fill="url(#e)"
        />
        <path fill="#DDD" opacity={0.28} d="M270 146h70v46h-70z" />
        <path fill="#DDD" opacity={0.18} d="M186 206h154v39H186z" />
        <path
          d="M142.55 112.058c.275-.67-.725-1.263-1.363-.934a2.53 2.53 0 00-1.062 1.805 17.675 17.675 0 01-1.113 3.686 4.541 4.541 0 01-2.762 2.524c-1.25.316-2.588-.138-3.75.228-1.838.53-2.725 2.524-3.825 4.115-2.65 3.787-7.5 5.542-12.05 5.516a11.826 11.826 0 01-3.125-.366 8.439 8.439 0 01-5.5-4.847c2.283.568 4.674.53 6.938-.114l.224-.972c6.9-.126 11.813-7.725 18.675-8.344a2.684 2.684 0 00-2.05-1.262 20.676 20.676 0 0110.613-5.05 3.141 3.141 0 012.6.745l-2.45 3.27z"
          fill="url(#f)"
        />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent