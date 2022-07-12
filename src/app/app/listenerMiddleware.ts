import {
  addListener,
  createListenerMiddleware,
  TypedAddListener,
  TypedStartListening,
} from '@reduxjs/toolkit';
import { RootState } from './reducer';
import { AppDispatch } from './store';

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;
