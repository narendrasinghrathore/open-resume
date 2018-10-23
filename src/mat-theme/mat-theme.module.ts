import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatListModule, } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
    imports: [MatToolbarModule, MatChipsModule, MatButtonModule, MatFormFieldModule,
        MatInputModule, DragDropModule, MatSelectModule, MatGridListModule, MatCardModule,
        MatMenuModule, MatIconModule, MatButtonModule, LayoutModule,
        MatBottomSheetModule, MatSliderModule, MatListModule],
    exports: [MatToolbarModule, MatChipsModule, MatButtonModule, MatFormFieldModule,
        MatInputModule, DragDropModule, MatSelectModule, MatGridListModule, MatCardModule,
        MatMenuModule, MatIconModule, MatButtonModule, LayoutModule,
        MatBottomSheetModule, MatSliderModule, MatListModule]
})
export class MatThemeModule { }
