import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';

import { Button, IconLoadingSpinner } from '@components';
import { XOR } from '@/src/types/global';
import { clx } from '@/src/helpers/utils';

type Props = {
  type?: 'submit' | 'button';
  label?: string;
  savingLabel?: string;
  icon?: ReactNode;
  isSubmitting: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  XOR<{ children: ReactNode }, { label: string }>;

export const SubmitButton: FC<Props> = memo(
  ({
    type = 'submit',
    label,
    savingLabel,
    icon,
    className,
    isSubmitting,
    ...props
  }) => {
    return (
      <Button
        type={type}
        disabled={props.disabled || isSubmitting}
        className={clx('gap-2', className)}
        {...props}>
        {isSubmitting && <IconLoadingSpinner size={20} />}
        {!isSubmitting && icon}
        {isSubmitting && savingLabel ? savingLabel : label}
      </Button>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';
