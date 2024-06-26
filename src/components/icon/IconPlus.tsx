import { FC, SVGProps } from 'react';

export const IconPlus: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M7.63477 1.5L7.63477 13.5"
        stroke={props.fill || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M13.5 7.63477L1.5 7.63477"
        stroke={props.fill || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

IconPlus.displayName = 'IconPlus';
