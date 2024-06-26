import { FC } from 'react';
import {
  Button,
  IconDelete,
  IconLoadingSpinner,
  SubmitButton,
} from '@components';
import { clx } from '@helpers';
import { IToDo } from './todo.types';
import { useSelector } from '@/src/hooks/useRedux';

interface Props {
  todo: IToDo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export const TodoItem: FC<Props> = ({ todo, onRemove, onToggle }) => {
  const loadingToggle = useSelector(
    (state) => state.todo.toggleLoading[todo.id],
  );
  const loadingRemove = useSelector(
    (state) => state.todo.removeLoading[todo.id],
  );

  return (
    <li>
      <div className="flex items-center gap-4">
        <span
          className={clx(
            'flex-1 cursor-pointer select-none',
            todo.completed && 'line-through text-gray-5000',
          )}
          onClick={() => onToggle(todo.id)}>
          {loadingToggle ? <IconLoadingSpinner size={20} /> : todo.title}
        </span>
        <SubmitButton
          isSubmitting={loadingRemove}
          label="حذف"
          savingLabel="در حال حذف کردن..."
          icon={<IconDelete className="size-4" />}
          className="min-w-32 shrink-0 gap-3 text-red hover:bg-gray-1000"
          onClick={() => onRemove(todo.id)}
        />
      </div>
    </li>
  );
};

TodoItem.displayName = 'TodoItem';
