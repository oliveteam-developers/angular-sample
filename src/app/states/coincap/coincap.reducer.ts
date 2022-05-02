import { Action, createReducer, on } from '@ngrx/store';
import * as coincapActions from './coincap.action';
import { initialState, CoincapState } from './coincap.state';

const coincapReducer = createReducer(
  initialState,
  on(coincapActions.fetchListCoinsSuccess, (state, { data }) => ({
    ...state,
    data,
  })),
);

export function reducer(state: CoincapState | undefined, action: Action) {
  return coincapReducer(state, action);
}