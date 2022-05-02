import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './state';
import * as CoincapReducer from './coincap/coincap.reducer';

export const reducers: ActionReducerMap<State> = {
  coincap: CoincapReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];