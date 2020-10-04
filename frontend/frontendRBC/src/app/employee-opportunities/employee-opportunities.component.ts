import { Component, OnInit } from '@angular/core';
import { tempList } from '../customer-mock-list';

@Component({
  selector: 'app-employee-opportunities',
  templateUrl: './employee-opportunities.component.html',
  styleUrls: ['./employee-opportunities.component.scss']
})
export class EmployeeOpportunitiesComponent implements OnInit {

  list: Array<any>;
  selectedCategory;
  categories = ["Web", "All"]
  constructor() {
    this.list = tempList;
    this.selectedCategory = "By Categories"
  }

  ngOnInit() {
  }

  valueSelected() {
    this.list = tempList.filter(item => item.name.toUpperCase().includes(this.selectedCategory.toUpperCase()) || this.selectedCategory === "All" || this.selectedCategory === "By Categories");
  }

}
