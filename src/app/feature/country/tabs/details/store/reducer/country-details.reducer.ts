import {combineReducers, createReducer, on} from '@ngrx/store';
import {countryDetailsInitStateConst, CountryDetailsState} from '../state';
import {CountryDetailsApiAction, CountryDetailsPageAction} from '../action';

const detailsReducer = createReducer(
    countryDetailsInitStateConst.countryDetails,
    on(CountryDetailsPageAction.getCountryDetails, () => null),
    on(CountryDetailsApiAction.getCountryDetailsSuccess, (state, {countryDetails}) => (countryDetails))
);

export const countryDetailsReducer = combineReducers<CountryDetailsState>({
  countryDetails: detailsReducer
});
