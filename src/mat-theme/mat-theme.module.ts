import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatListModule, MatRippleModule, } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
    imports: [MatToolbarModule, MatChipsModule, MatButtonModule, MatFormFieldModule,
        MatInputModule, DragDropModule, MatSelectModule, MatGridListModule, MatCardModule,
        MatMenuModule, MatIconModule, LayoutModule,
        MatBottomSheetModule, MatSliderModule, MatListModule, MatTooltipModule,
        MatSlideToggleModule, MatRippleModule],
    exports: [MatToolbarModule, MatChipsModule, MatButtonModule, MatFormFieldModule,
        MatInputModule, DragDropModule, MatSelectModule, MatGridListModule, MatCardModule,
        MatMenuModule, MatIconModule, LayoutModule,
        MatBottomSheetModule, MatSliderModule, MatListModule, MatTooltipModule,
        MatSlideToggleModule, MatRippleModule]
})
export class MatThemeModule { }
