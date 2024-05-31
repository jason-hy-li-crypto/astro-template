import * as React from "react";
import { SVGProps } from "react";
const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.255 14.936A.5.5 0 0 0 1.5 15h13a.499.499 0 0 0 .444-.73l-6.5-12.5a.5.5 0 0 0-.888 0l-6.5 12.5a.5.5 0 0 0 .199.666Zm12.42-.938V14H2.325v-.002L7.998 3.086h.002l5.675 10.912ZM8.5 6h-1v4.5h1V6ZM8 11.5A.75.75 0 1 0 8 13a.75.75 0 0 0 0-1.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgAlert;
