import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  heading : Block;
  products: Product[];
    constructor() {
      this.heading = { title: 'Products', paragraph: ``
      }

      this.products = [
        {
          name:'Strategic Plan',
          description:'',
          icon:'fa-code',
          route:''
        },
        {
          name:"Stakeholders' Experience Management",
          description:"" ,
          icon:'fa-handshake-o',
          route:''
        },

        {
          name:'Risk Management & Internal Audit',
          description:'',
          icon:'fa-balance-scale',
          route:''
        },
        {
          name:'Quality Assurance & Accreditation',
          description:'',
          icon:'fa-check',
          route:'qa'
        },     
      ]


     }
  ngOnInit() {
  }

}
export class Product{
  name: string;
  description: string;
  icon: string;
  route:string;
}
