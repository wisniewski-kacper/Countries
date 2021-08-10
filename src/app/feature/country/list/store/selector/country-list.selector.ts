import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CountryListState} from '../state';
import {countryListKey} from '../country-list-key.const';

export const countryListFeatureState = createFeatureSelector<CountryListState>(countryListKey);

export const countryListState = createSelector(countryListFeatureState, state => state.countryList);
