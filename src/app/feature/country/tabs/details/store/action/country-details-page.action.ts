import {createAction, props} from '@ngrx/store';

export const getCountryDetails = createAction(
    '[Country][Details] Get country details from service',
    props<{alphaCode: string}>()
);
