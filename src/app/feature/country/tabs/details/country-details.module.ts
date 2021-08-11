import {NgModule} from '@angular/core';
import {CountryDetailsComponent} from './country-detail.component';
import {CommonModule} from '@angular/common';
import {CountryDetailsStoreModule} from './store/country-details-store.module';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    CountryDetailsStoreModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [CountryDetailsComponent]
})
export class CountryDetailsModule {
}
