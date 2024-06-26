'use client';
import { FC, PropsWithChildren, useRef } from 'react';
import { Provider } from 'react-redux';

import { initTodo } from '@actions';
import { AppStore, makeStore } from '../../store';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(initTodo());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

StoreProvider.displayName = 'StoreProvider';
