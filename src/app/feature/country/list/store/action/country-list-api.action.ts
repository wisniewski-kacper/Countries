import {createAction} from '@ngrx/store';

export const getCountryListSuccess = createAction(
    '[Country][List] load country list from service success',
);

export const getCountryListFail = createAction(
  '[Country][List] load country list from service fail'
);
