import {NgModule} from '@angular/core';
import {CountryListModule} from './list';
import {CountryRoutingModule} from './country-routing.module';

@NgModule({
  imports: [CountryListModule, CountryRoutingModule]
})
export class CountryModule {}
