import {NgModule} from '@angular/core';
import {CountryListComponent} from './country-list.component';

@NgModule({
  declarations: [CountryListComponent],
  exports: [CountryListComponent]
})
export class CountryListModule {}
