import {combineReducers, createReducer, on} from '@ngrx/store';
import {countryListInitStateConst, CountryListState} from '../state';
import {CountryListApiAction} from '../action';

const listReducer = createReducer(
    countryListInitStateConst.countryList,
    on(CountryListApiAction.getCountryListSuccess, (state, {countryList}) => (countryList))
);

export const countryListReducer = combineReducers<CountryListState>({
  countryList: listReducer
});
