'use client';
import { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from '@hooks';
import { TodoFilter, TodoForm, TodoItem } from '@components';
import {
  addTodoAsync,
  removeTodoAsync,
  toggleTodoAsync,
} from '@/src/store/todo/todo.thunk';

type Filter = 'all' | 'completed' | 'incomplete';

export const TodoList: FC = () => {
  const [text, setText] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const { list: todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addTodoAsync(text));
    setText('');
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodoAsync(id));
  };

  const handleRemoveTodo = async (id: string) => {
    dispatch(removeTodoAsync(id));
  };

  const handleFilterChange = (filter: Filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    }
    if (filter === 'incomplete') {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div className="flex flex-col gap-12">
      <TodoFilter filter={filter} onFilterChange={handleFilterChange} />
      <TodoForm
        text={text}
        onAdd={handleAddTodo}
        onChange={(e) => setText(e.target.value)}
      />
      <ul className="flex flex-col gap-8">
        {filteredTodos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onRemove={handleRemoveTodo}
          />
        ))}
        {filteredTodos?.length === 0 && (
          <li className="text-center text-gray-5000">هیچ تسکی وجود ندارد</li>
        )}
      </ul>
    </div>
  );
};
