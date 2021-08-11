import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'region/:regionCode', loadChildren: () => import('./country/country.module').then(m => m.CountryModule)}
]

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
