import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
Categories = [
  {id:1,name:"Fashion"},
  {id:2,name:"Education"},
  {id:3,name:"Kids"},
  {id:4,name:"Electronics"},
  {id:5,name:"Automobile"},
  {id:6,name:"Furniture"},
  {id:7,name:"Beauty"},
  {id:8,name:"Sports"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
