import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  heading : Block;

  constructor() {
    this.heading = { title: 'About us', paragraph: 'NxtLife Technologies (a UK Based Product Development Company) formed by group of passionate people from London Business School to develop innovative solutions that will assist people to do things right, bring a change and make an impact.'}
   }

  ngOnInit() {
  }

}
