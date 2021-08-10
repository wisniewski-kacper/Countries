import {NgModule} from '@angular/core';
import {CountryListModule} from './list';
import {CountryRoutingModule} from './country-routing.module';
import {CountryCommonModule} from './common';
import {CountryTabsModule} from './tabs';

@NgModule({
  imports: [
    CountryListModule,
    CountryRoutingModule,
    CountryCommonModule,
    CountryTabsModule,
  ]
})
export class CountryModule {
}
