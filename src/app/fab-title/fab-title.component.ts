import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fab-title',
  templateUrl: './fab-title.component.html',
  styleUrls: ['./fab-title.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
}
})
export class FabTitle implements OnInit {

  @Input() fabList: FabList;

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  constructor() {}

  ngOnInit() {
  }

  updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
}

}

export class FabList{
  title:string;
  options: string[];
}