import { Component, OnInit } from '@angular/core';
import {empList} from '../employee-mock-list';


@Component({
  selector: 'app-customer-advisors',
  templateUrl: './customer-advisors.component.html',
  styleUrls: ['./customer-advisors.component.scss']
})
export class CustomerAdvisorsComponent implements OnInit {

  list: Array<any>;
  selectedCategory;
  categories = ["Select Required Expertise", "Accounting", "Marketing", "Social Media", "All"]
  constructor() {
    this.list = empList;
    this.selectedCategory = "Select Required Expertise"
  }

  ngOnInit() {
  }

  valueSelected() {
    this.list = empList.filter(item => item.category.toUpperCase().includes(this.selectedCategory.toUpperCase()) || this.selectedCategory === "All" || this.selectedCategory === "Select Required Expertise");
  }

  handleClick(event){
   
  }
}
