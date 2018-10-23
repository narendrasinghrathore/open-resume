import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/routing/app.routing';
import { Page404Component } from './page404/page404.component';
import { MatThemeModule } from 'src/mat-theme/mat-theme.module';
import { EditComponent } from './edit/edit.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from 'src/helpers/error-state-matcher';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormBuilderComponent } from './dynamic-form-builder/dynamic-form-builder.component';
import { ShowOnlyPipe } from 'src/pipes/dashboard-cards.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    EditComponent,
    DashboardComponent,
    DynamicFormComponent,
    DynamicFormBuilderComponent,
    ShowOnlyPipe,
    BottomMenuComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatThemeModule, ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    BottomMenuComponent
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: MyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
