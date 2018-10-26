import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TemplatesRoutingModule } from './templates-routing.module';
import { HomeComponent } from './home/home.component';
import { TemplatesComponent } from './templates.component';
import { MatThemeModule } from 'src/mat-theme/mat-theme.module';


@NgModule({
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    MatThemeModule
  ],
  declarations: [TemplatesComponent, HomeComponent,]
})
export class TemplatesModule { }
