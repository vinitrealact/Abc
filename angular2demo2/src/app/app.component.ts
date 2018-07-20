import { Component } from '@angular/core';

@Component({
    selector: 'my-app',

    template: `<h1>Hello {{pageHeader}} </h1> <my-emp></my-emp>`,
})
export class AppComponent  {

    name = 'Angular wsew';
    pageHeader: string = "employee details";
}
