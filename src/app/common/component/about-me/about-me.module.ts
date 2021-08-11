import {NgModule} from '@angular/core';
import {AboutMeComponent} from './about-me.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [AboutMeComponent]
})
export class AboutMeModule {
}
