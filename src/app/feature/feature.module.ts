import {NgModule} from '@angular/core';
import {FeatureRoutingModule} from './feature-routing.module';
import {CountryModule} from './country';
import {CreditsModule} from './credits';

@NgModule({
  imports: [
      CountryModule,
      FeatureRoutingModule,
      CreditsModule
  ]
})
export class FeatureModule {}
