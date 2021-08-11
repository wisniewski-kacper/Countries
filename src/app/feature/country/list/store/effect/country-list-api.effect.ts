import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CountryService} from "@app/feature/country/common";
import {CountryListApiAction, CountryListPageAction} from '../action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable()
export class CountryListApiEffect {
  constructor(
      private readonly actions$: Actions,
      private readonly store$: Store,
      private readonly service: CountryService) {
  }

  onGetCountryList$ = createEffect(() =>
      this.actions$.pipe(
          ofType(CountryListPageAction.getCountryList),
          switchMap(({regionCode}) =>
              this.service.getCountryList$(regionCode).pipe(
                  map(countryList => CountryListApiAction.getCountryListSuccess({countryList})),
                  catchError((error: HttpErrorResponse) =>
                    of(CountryListApiAction.getCountryListFail({msg: error.message, status: error.status}))
                  )
              )
          )
      )
  );
}
