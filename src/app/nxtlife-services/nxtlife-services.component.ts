import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';

@Component({
  selector: 'app-nxtlife-services',
  templateUrl: './nxtlife-services.component.html',
  styleUrls: ['./nxtlife-services.component.css']
})
export class NxtlifeServicesComponent implements OnInit {
  heading : Block;
  
    constructor() {
      this.heading = { title: 'Services', paragraph: `There are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus.There
      are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus`}     }
  ngOnInit() {
  }

}
