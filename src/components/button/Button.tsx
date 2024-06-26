import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';

import { clx } from '@helpers';
import { XOR } from '@types';

type Props = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  XOR<{ children: ReactNode }, { label: string }>;

export const Button: FC<Props> = memo(
  ({ className, label, children, ...props }) => {
    return (
      <button
        type="button"
        className={clx(
          'flex items-center justify-center text-center py-3 px-4 min-h-[50px] rounded-md text-sm border shrink-0',
          props.disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
        {...props}>
        {label || children}
      </button>
    );
  },
);

Button.displayName = 'Button';
