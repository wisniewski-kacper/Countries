import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {PageNavigationModule, PageStructureModule} from './page-structure';
import {FeatureModule} from './feature';
import {EffectsModule} from '@ngrx/effects';
import {
  NavigationActionTiming,
  routerReducer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import {CustomSerializer} from './common/custom-route-serializer';
import {routerKey} from './common';
import {HttpClientModule} from "@angular/common/http";

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
    HttpClientModule,
    StoreModule.forRoot(
        {
          router: routerReducer
        },
        {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
            strictStateSerializability: true,
            strictActionSerializability: true,
            strictActionWithinNgZone: true,
            strictActionTypeUniqueness: true
          }
        }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
      stateKey: routerKey
    }),
    PageNavigationModule,
    EffectsModule.forRoot([]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
