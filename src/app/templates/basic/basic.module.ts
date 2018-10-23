import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic.routing';
import { BasicComponent } from './basic.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicRoutingModule,
    SharedModule,
  ],
  declarations: [BasicComponent, ]
})
export class BasicModule { }
