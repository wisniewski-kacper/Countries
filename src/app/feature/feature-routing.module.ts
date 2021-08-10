import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutMeComponent} from './about-me';

const routes: Routes = [
  {path: 'about', component: AboutMeComponent},
  {path: ':regionCode', loadChildren: () => import('./country/country.module').then(m => m.CountryModule)}
]

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
