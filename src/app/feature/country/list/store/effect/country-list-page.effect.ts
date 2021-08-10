import {Injectable} from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {routerNavigatedAction} from '@ngrx/router-store';
import {Store} from '@ngrx/store';
import {RouterSelectors} from '../../../../../common';
import {filter, map} from "rxjs/operators";
import {CountryListPageAction} from "../action";

@Injectable()
export class CountryListPageEffect {
  constructor(private readonly actions$: Actions, private readonly store$: Store) {
  }

  onCountryListPageEffect$ = createEffect(() =>
      this.actions$.pipe(
          ofType(routerNavigatedAction),
          concatLatestFrom(() => this.store$.select(RouterSelectors.selectRouteParam('regionCode'))),
          filter(([{payload}, regionCode]) =>
              payload.routerState.url ===
              `/${regionCode}`
          ),
          map(([, regionCode]) => regionCode),
          map(regionCode => CountryListPageAction.getCountryList({regionCode}))
      )
  );
}
