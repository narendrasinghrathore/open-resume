import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic.routing';
import { BasicComponent } from './basic.component';
import { MatThemeModule } from 'src/mat-theme/mat-theme.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  imports: [
    MatThemeModule,
    CommonModule,
    BasicRoutingModule,
    SharedModule,
  ],
  declarations: [BasicComponent, ]
})
export class BasicModule { }
