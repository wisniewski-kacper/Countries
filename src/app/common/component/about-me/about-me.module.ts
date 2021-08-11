import {NgModule} from '@angular/core';
import {AboutMeComponent} from './about-me.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [AboutMeComponent]
})
export class AboutMeModule {
}
