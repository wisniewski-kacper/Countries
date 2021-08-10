import {createAction, props} from '@ngrx/store';
import {ApiError} from '../../../../../common';

export const getCountryListSuccess = createAction(
    '[Country][List] load country list from service success',
    props<{countryList: object[]}>()
);

export const getCountryListFail = createAction(
  '[Country][List] load country list from service fail',
    props<ApiError>()
);
