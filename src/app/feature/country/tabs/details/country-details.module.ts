import {NgModule} from '@angular/core';
import {CountryDetailsComponent} from './country-detail.component';
import {CommonModule} from '@angular/common';
import {CountryDetailsStoreModule} from './store/country-details-store.module';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    CountryDetailsStoreModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [CountryDetailsComponent]
})
export class CountryDetailsModule {
}
