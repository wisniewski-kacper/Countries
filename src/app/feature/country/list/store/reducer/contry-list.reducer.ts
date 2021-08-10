import {combineReducers, createReducer} from '@ngrx/store';
import {countryListInitStateConst, CountryListState} from '../state';

const listReducer = createReducer(
    countryListInitStateConst.countryList
);

export const countryListReducer = combineReducers<CountryListState>({
  countryList: listReducer
});
