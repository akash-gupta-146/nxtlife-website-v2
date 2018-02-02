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
      this.heading = { title: 'Products', paragraph: `There are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus.There
      are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus`
      }

      this.products = [
        {
          name:'Strategic Planning',
          description:'Links Today With Tomorrow',
          icon:'',
          route:''
        },
        {
          name:"Stakeholders' Experience Management",
          description:"Design and Manage Stakeholder' Journey" ,
          icon:'',
          route:''
        },

        {
          name:'Rish Management & Internal Audidt',
          description:'consectetur adipiscing elit. Etiam posuere urna in suscipit tempor',
          icon:'',
          route:''
        },
        {
          name:'Quality Assurance & Accreditation',
          description:'consectetur adipiscing elit. Etiam posuere urna in suscipit tempor',
          icon:'',
          route:''
        },
        {
          name:'Learning Experience & Management',
          description:'consectetur adipiscing elit. Etiam posuere urna in suscipit tempor',
          icon:'',
          route:''
        },
        {
          name:'International University Ranking',
          description:'consectetur adipiscing elit. Etiam posuere urna in suscipit tempor',
          icon:'',
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
