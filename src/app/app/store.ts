import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { listenerMiddleware } from './listenerMiddleware';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
