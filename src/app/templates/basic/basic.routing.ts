import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic.component';

const routes: Routes = [
    {
        path: '',
        component: BasicComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BasicRoutingModule { }
