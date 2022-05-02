// Interfaces
import { ICoincapAsset } from '../../interfaces';

export interface CoincapState {
  data: ICoincapAsset[];
}

export const initialState: CoincapState = {
  data: [],
};