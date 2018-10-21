import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic.routing';
import { BasicComponent } from './basic.component';

@NgModule({
  imports: [
    CommonModule,
    BasicRoutingModule
  ],
  declarations: [BasicComponent, ]
})
export class BasicModule { }
