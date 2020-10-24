import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpLoadPage } from './up-load.page';

const routes: Routes = [
  {
    path: '',
    component: UpLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpLoadPageRoutingModule {}
