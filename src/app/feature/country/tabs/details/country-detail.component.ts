import {Component} from '@angular/core';
import {CountryDetailsFacade} from './store/country-details.facade';
import {Observable} from 'rxjs';
import {Country} from '../../../../common';

@Component({
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {
  countryDetails$: Observable<Country>

  constructor(readonly facade: CountryDetailsFacade) {
    this.countryDetails$ = facade.countryDetails$;
  }
}
