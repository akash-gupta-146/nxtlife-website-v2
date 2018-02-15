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
      this.heading = { title: 'Services', 
      paragraph: ``}     }
  ngOnInit() {
  }

}
