import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { EditFormTemplateComponent } from 'src/app/edit-form-template/edit-form-template.component';
import { MatThemeModule } from 'src/mat-theme/mat-theme.module';

@NgModule({
    imports: [CommonModule, MatThemeModule, ReactiveFormsModule],
    declarations: [EditFormTemplateComponent, ],
    exports: [ReactiveFormsModule, EditFormTemplateComponent,
        CommonModule]
})
export class SharedModule { }
