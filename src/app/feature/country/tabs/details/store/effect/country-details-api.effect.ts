import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {CountryService} from '@app/feature/country/common';
import {CountryDetailsApiAction, CountryDetailsPageAction} from "../action";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class CountryDetailsApiEffect {
  constructor(private readonly actions$: Actions, private readonly store$: Store, private readonly service: CountryService) {}

  onGetCountryDetails = createEffect(() =>
    this.actions$.pipe(
        ofType(CountryDetailsPageAction.getCountryDetails),
        switchMap(({countryName}) =>
          this.service.getCountryDetails$(countryName).pipe(
              map( countryDetails => CountryDetailsApiAction.getCountryDetailsSuccess({countryDetails})),
              catchError((error: HttpErrorResponse) =>
                of(CountryDetailsApiAction.getCountryDetailsFail({msg: error.message, status: error.status}))
              )
          )
        )
    )
  );
}
