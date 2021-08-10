import {createAction, props} from '@ngrx/store';

export const getCountryList = createAction(
    '[Country][List] get country list from service',
    props<{regionCode: string}>()
);
