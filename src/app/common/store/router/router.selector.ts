import { RouterStateUrl } from '../../custom-route-serializer';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const routerReducerState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

const routerStateUrl = createSelector(routerReducerState, state => state.state);

export const selectRouteParams = createSelector(routerStateUrl, state => state.params);

export const selectRouteParam = (key: string) => createSelector(selectRouteParams, params => params[key]);

export const selectUrl = createSelector(routerStateUrl, state => state.url);
