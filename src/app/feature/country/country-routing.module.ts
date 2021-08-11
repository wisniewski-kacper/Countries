import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CountryListComponent} from './list';
import {CountryDetailsComponent} from './tabs';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CountryListComponent
  },
  {
    path: 'country',
    children: [
      {
        path: ':alphaCode',
        component: CountryDetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule {}
