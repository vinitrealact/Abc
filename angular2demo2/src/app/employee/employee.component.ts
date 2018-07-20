import { Component } from "@angular/core";

@Component({
    selector: 'my-emp',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class empComponet {

    employees: any[] = [];
    constructor() {
        this.employees = [
            { code: 'emp101', name: 'name1', gender: 'male', annualsal:2000,dob:'20-jan-2018'},
            { code: 'emp102', name: 'name2', gender: 'female', annualsal:21000,dob:'20-feb-2018'},
            { code: 'emp103', name: 'name3', gender: 'male', annualsal:22000,dob:'20-jan-2038'},
            { code: 'emp104', name: 'name4', gender: 'female', annualsal:23000,dob:'20-jan-1018'},
            { code: 'emp105', name: 'name5', gender: 'male', annualsal:24000,dob:'20-jan-2048'},
            { code: 'emp106', name: 'name6', gender: 'male', annualsal:24000,dob:'20-jan-2048'}
        ];
    }

    getTotalMFCount(): number{
        return this.employees.length;
    }

    getTotalMaleCount(): number {
        return this.employees.filter(e => e.gender == "male").length;
    }

    getTotalFemaleCount(): number {
        return this.employees.filter(e => e.gender == "female").length;
    }
}