import type { FC, SVGProps } from "react";
import { clx } from "@helpers";

interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const IconLoadingSpinner: FC<Props> = ({ size = 40, ...props }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      className={clx(`spinner size-full origin-center`, props.className)}
      xmlns="http://www.w3.org/2000/svg">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={props.fill || '#9DBCFF'}
        strokeWidth={5}
      />
      <style>{`
        .spinner {
          animation: rotate 2s linear infinite;
          transform-origin: center center;
          width: ${size}px;
          height: ${size}px;
        }
        .path {
          stroke-linecap: round;
          animation: dash 1.5s ease-in-out infinite;
        }
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
          }
        }
      `}</style>
    </svg>
  );
};
