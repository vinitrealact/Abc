import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { empComponet } from './employee/employee.component';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, empComponet, EmployeeCountComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
