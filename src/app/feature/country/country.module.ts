import {NgModule} from '@angular/core';
import {CountryListModule} from './list';
import {CountryRoutingModule} from './country-routing.module';
import {CountryCommonModule} from './common';

@NgModule({
  imports: [CountryListModule, CountryRoutingModule, CountryCommonModule]
})
export class CountryModule {}
