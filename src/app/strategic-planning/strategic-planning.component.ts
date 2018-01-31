import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';
@Component({
  selector: 'app-strategic-planning',
  templateUrl: './strategic-planning.component.html',
  styleUrls: ['./strategic-planning.component.css']
})
export class StrategicPlanningComponent implements OnInit {
  heading : Block[];
  
    constructor() {
      this.heading = [
        { 
          title: 'Strategic Planning in higher education', 
          paragraph: ''
        },
        { 
          title: 'Product Description', 
          paragraph: ''
        },
        { 
          title: 'Benefits', 
          paragraph: ''
        },
      ]
     }
  ngOnInit() {
  }

}