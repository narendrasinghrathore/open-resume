import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { TemplatesComponent } from './templates.component';

const routes: Routes = [
  {
    path: 'templates',
    component: TemplatesComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'basic', component: BasicComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
