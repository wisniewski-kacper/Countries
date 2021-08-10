import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {countryListKey} from './country-list-key.const';
import {countryListReducer} from './reducer';
import {CountryListApiEffect, CountryListPageEffect} from './effect';
import {CountryListFacade} from "./country-list.facade";

@NgModule({
  imports: [
      StoreModule.forFeature(countryListKey, countryListReducer),
      EffectsModule.forFeature([CountryListPageEffect, CountryListApiEffect])
  ],
  providers: [CountryListFacade]
})
export class CountryListStoreModule {}
