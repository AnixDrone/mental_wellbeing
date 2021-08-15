import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    TestingsComponent,
    ToolbarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
