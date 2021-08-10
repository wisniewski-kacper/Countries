import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {countryDetailsKey} from './country-details-key.const';
import {countryDetailsReducer} from './reducer/country-details.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CountryDetailsApiEffect, CountryDetailsPageEffect} from './effect';
import {CountryDetailsFacade} from './country-details.facade';

@NgModule({
  imports: [
      StoreModule.forFeature(countryDetailsKey, countryDetailsReducer),
      EffectsModule.forFeature([CountryDetailsPageEffect, CountryDetailsApiEffect])
  ],
  providers: [CountryDetailsFacade]
})
export class CountryDetailsStoreModule {}
