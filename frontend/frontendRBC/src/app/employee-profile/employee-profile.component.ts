import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {empList} from '../employee-mock-list';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

employee

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id!==null){
      this.employee=empList[id-1];
      
    }
   
  }
}
