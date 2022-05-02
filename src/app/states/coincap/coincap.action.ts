import { createAction, props } from '@ngrx/store';

// Interfaces
import { ICoincapAsset } from '../../interfaces';

export const storeListCoins = createAction(
  '[Coincap] Store list coins',
  props<{ data: ICoincapAsset[] }>()
);

export const fetchListCoins = createAction('[Coincap] Fetch list coins');

export const fetchListCoinsSuccess = createAction(
  '[Coincap] Fetch list coins successfully',
  props<{ data: ICoincapAsset[] }>()
);

export const fetchListCoinsFailed = createAction(
  '[Coincap] Fetch list coins failed',
  props<{ error: any }>()
);