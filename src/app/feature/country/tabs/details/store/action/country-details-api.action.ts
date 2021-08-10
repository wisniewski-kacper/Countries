import {createAction, props} from '@ngrx/store';
import {ApiError, Country} from '../../../../../../common';

export const getCountryDetailsSuccess = createAction(
    '[Country][Details] Get country details from service success',
    props<{countryDetails: Country}>()
);

export const getCountryDetailsFail = createAction(
    '[Country][Details] Get country details from service fail',
    props<ApiError>()
);
