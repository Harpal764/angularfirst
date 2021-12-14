import { Component, OnInit } from '@angular/core';
import { customerdata } from 'src/assets/data/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customer = customerdata;
  public btntext = "SignUp";
  public islogin = true;
  public gcode = 4;
  public searchtext = "";

  Handle(){
    this.islogin = !this.islogin;
    this.btntext =this.islogin?"SignUp":"SignIn";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
