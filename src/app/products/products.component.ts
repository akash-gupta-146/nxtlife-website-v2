import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  heading : Block;
  
    constructor() {
      this.heading = { title: 'Products', paragraph: `There are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus.There
      are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus`}
     }
  ngOnInit() {
  }

}
