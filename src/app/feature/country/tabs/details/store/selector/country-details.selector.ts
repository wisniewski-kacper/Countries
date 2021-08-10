import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CountryDetailsState} from '../state';
import {countryDetailsKey} from '../country-details-key.const';

export const countryDetailsFeatureState = createFeatureSelector<CountryDetailsState>(countryDetailsKey);

export const countryDetailsState = createSelector(countryDetailsFeatureState, state => state.countryDetails);
