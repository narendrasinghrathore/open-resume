import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { TemplatesComponent } from './templates.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'templates/home', pathMatch: 'full'

  },
  {
    path: '',
    component: TemplatesComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'basic', loadChildren: 'src/app/templates/basic/basic.module#BasicModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
