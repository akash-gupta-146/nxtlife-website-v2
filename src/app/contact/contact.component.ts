import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // lat: number = 29.690900;
  // lng: number = 77.151907;
  lat: number = 51.5292013;
  lng: number = -0.3785563;
  heading : Block;
  
    constructor() {
      this.heading = { title: 'Contact us', paragraph: ''}
     }
  ngOnInit() {

  }

}
