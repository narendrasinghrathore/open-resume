import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { Page404Component } from 'src/app/page404/page404.component';
import { EditComponent } from 'src/app/edit/edit.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/home',
    },
    {
        path: 'templates',
        loadChildren: 'src/app/templates/templates.module#TemplatesModule'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'edit',
        component: EditComponent

    },
    {
        path: '**',
        component: Page404Component
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
