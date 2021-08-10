import {NgModule} from '@angular/core';
import {FeatureRoutingModule} from './feature-routing.module';
import {CountryModule} from './country';

@NgModule({
  imports: [
      CountryModule,
      FeatureRoutingModule
  ]
})
export class FeatureModule {}
