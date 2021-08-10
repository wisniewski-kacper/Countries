import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {PageNavigationModule, PageStructureModule} from './page-structure';
import {FeatureModule} from './feature';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PageStructureModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatureModule,
    StoreModule.forRoot({}, {}),
    PageNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
