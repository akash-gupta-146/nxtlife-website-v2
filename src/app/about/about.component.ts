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
    this.heading = { title: 'About us', paragraph: `Who are we? We are all about education and technology. Well, not exactly ‘educational technology’ but that’s only a part of what we do. 
    What we are good at is helping you build a world class university using the latest technological tools both on academic and operational side. Most of the companies working in the field cover either academic or operational side.  We build the bridges between these two sides to improve the overall efficiency of the higher education institutions. That’s what makes us unique!
    We strongly believe in the value of education as a catalyst which helps build a nation’s future and changes lives. We also believe that technology will become even more crucial in building quality educational institutions.  Technology helps make education more accessible, flexible and affordable. The tools we provide help the institution turn any higher education institution into a world class institution in a very short time.`}
   }

  ngOnInit() {
  }

}
