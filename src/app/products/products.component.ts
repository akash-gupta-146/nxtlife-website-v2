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
          icon:'fa-linode',
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
          icon:'fa-sticky-note-o',
          route:''
        },
        {
          name:'Quality Assurance & Accreditation',
          description:'',
          icon:'fa-check-square-o',
          route:'qa'
        },
        {
          name:'Learning Experience Management',
          description:'',
          icon:'fa-area-chart',
          route:''
        },
        {
          name:'International University Ranking',
          description:'',
          icon:'fa-university',
          route:''
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
