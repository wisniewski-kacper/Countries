import {Component} from '@angular/core';
import {CountryListFacade} from './store';

@Component({
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  displayedColumns: string[] = ['flag', 'name', 'actions']

  constructor(readonly facade: CountryListFacade) {
  }
}
