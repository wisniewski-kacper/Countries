import {NgModule} from '@angular/core';
import {CountryListComponent} from './country-list.component';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {CountryListStoreModule} from './store';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    CountryListStoreModule
  ],
  declarations: [CountryListComponent],
})
export class CountryListModule {
}
