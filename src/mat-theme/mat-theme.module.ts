import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
    imports: [MatToolbarModule, MatChipsModule, MatButtonModule, MatFormFieldModule,
        MatInputModule, DragDropModule],
    exports: [MatToolbarModule, MatChipsModule, MatButtonModule, MatFormFieldModule,
        MatInputModule, DragDropModule]
})
export class MatThemeModule { }
