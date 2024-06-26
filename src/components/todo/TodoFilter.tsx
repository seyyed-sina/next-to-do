import { FC, memo } from 'react';
import { Button } from '@components';
import { clx } from '@helpers';

type Filter = 'all' | 'completed' | 'incomplete';
interface Props {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export const TodoFilter: FC<Props> = ({ filter, onFilterChange }) => {
  const buttonClassName = 'flex-1 border-gray-2000';
  const activeClassName = 'border-primary bg-primary/30';
  return (
    <div className="flex items-center gap-4">
      <Button
        label="همه"
        className={clx(buttonClassName, filter === 'all' && activeClassName)}
        onClick={() => onFilterChange('all')}
      />
      <Button
        label="انجام شده"
        className={clx(
          buttonClassName,
          filter === 'completed' && activeClassName,
        )}
        onClick={() => onFilterChange('completed')}
      />
      <Button
        label="انجام نشده"
        className={clx(
          buttonClassName,
          filter === 'incomplete' && activeClassName,
        )}
        onClick={() => onFilterChange('incomplete')}
      />
    </div>
  );
};

TodoFilter.displayName = 'TodoFilter';
