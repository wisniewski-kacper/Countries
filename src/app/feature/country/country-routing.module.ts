import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CountryListComponent} from './list';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CountryListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule {}
