import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {CountryDetailsSelector} from './selector';
import {Country} from '@app/common';

@Injectable()
export class CountryDetailsFacade {
  constructor(private readonly store$: Store) {}

  get countryDetails$(): Observable<Country> {
    return this.store$.select(CountryDetailsSelector.countryDetailsState);
  }
}
