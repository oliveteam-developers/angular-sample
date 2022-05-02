import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoincapState } from './coincap.state';

export const selectCoincap = createFeatureSelector<CoincapState>('coincap');

export const selectCoincapData = createSelector(
  selectCoincap,
  (state: CoincapState) => state.data
);
