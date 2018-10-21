import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './home/home.component';
import { TemplatesComponent } from './templates.component';

@NgModule({
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ],
  declarations: [TemplatesComponent, HomeComponent, BasicComponent, ]
})
export class TemplatesModule { }
