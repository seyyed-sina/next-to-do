import { ChangeEvent, FC, FormEvent } from 'react';
import { IconPlus, SubmitButton } from '@components';
import { useSelector } from '@hooks';

interface Props {
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAdd: (e: FormEvent) => void;
}

export const TodoForm: FC<Props> = ({ text, onChange, onAdd }) => {
  const loading = useSelector((state) => state.todo.addLoading);

  return (
    <form className="flex items-center gap-4" onSubmit={onAdd}>
      <input
        type="text"
        value={text}
        className="inputbox grow"
        placeholder="افزودن تسک جدید"
        onChange={onChange}
      />
      <SubmitButton
        type="submit"
        isSubmitting={loading}
        label="افزودن"
        savingLabel="در حال افزودن..."
        icon={<IconPlus className="size-4" />}
        className="bg-primary text-white shrink-0 border-primary min-w-32 mr-auto gap-3"
      />
    </form>
  );
};

TodoForm.displayName = 'TodoForm';
