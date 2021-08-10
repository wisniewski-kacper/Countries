import {Injectable} from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {routerNavigatedAction} from '@ngrx/router-store';
import {RouterSelectors} from '../../../../../../common';
import {filter, map} from 'rxjs/operators';
import {CountryDetailsPageAction} from '../action';

@Injectable()
export class CountryDetailsPageEffect {
  constructor(private readonly store$: Store, private readonly actions$: Actions) {}

  onEnterDetailsPage$ = createEffect(() =>
    this.actions$.pipe(
        ofType(routerNavigatedAction),
        concatLatestFrom(() => this.store$.select(RouterSelectors.selectRouteParam('countryName'))),
        filter(([{payload}, countryName]) =>
            payload.routerState.url ===
            `/country/${countryName}`
        ),
        map(([, countryName]) => countryName),
        map(countryName => CountryDetailsPageAction.getCountryDetails({countryName}))
    )
  );
}
