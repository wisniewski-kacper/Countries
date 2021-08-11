import {NgModule} from '@angular/core';
import {PageNavigationComponent} from './page-navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [PageNavigationComponent],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    MatDialogModule
  ],
  exports: [PageNavigationComponent]
})
export class PageNavigationModule {
}
