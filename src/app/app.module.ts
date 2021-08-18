import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatRadioModule} from "@angular/material/radio";
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button"
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestingsComponent } from './testings/testings.component';
import { ToolbarsComponent } from './toolbars/toolbars.component';
import { CitatiComponent } from './citati/citati.component';
import { PrikazniComponent } from './prikazni/prikazni.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DepresijaComponent } from './depresija/depresija.component';


@NgModule({
  declarations: [
    AppComponent,
    TestingsComponent,
    ToolbarsComponent,
    CitatiComponent,
    PrikazniComponent,
    MyProfileComponent,
    DepresijaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    MatMenuModule,
    MatStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
