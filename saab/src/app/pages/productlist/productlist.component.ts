import { Component, OnInit } from '@angular/core';
import { productList } from 'src/assets/data/productlist';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList =productList
  constructor(private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(p=>{
      let cid = p["id"];
      if(cid=="" || cid== undefined){

      }else{
     this.productList =  productList.filter(e=>e.catid==cid)
    }
    })
  }

}
