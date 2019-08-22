import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { ToolbarTitleComponent } from './shared/components/toolbar-title/toolbar-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatIconModule,MatListModule,MatInputModule,MatCardModule,MatButtonModule} from '@angular/material';
import { EmployeeListElementComponent } from './shared/components/employee-list-element/employee-list-element.component'
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ToolbarTitleComponent,
    EmployeeListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
