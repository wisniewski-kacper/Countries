import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditsComponent} from '@app/feature/credits';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'credits'},
  {path: 'credits', component: CreditsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
