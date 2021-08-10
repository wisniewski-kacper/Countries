import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CountryListSelectors} from './selector';

@Injectable()
export class CountryListFacade {
  constructor(private readonly store$: Store) {
  }

  get countryList$(): Observable<object[]> {
    return this.store$.select(CountryListSelectors.countryListState);
  }
}
