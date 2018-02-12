import { Component, OnInit, Input } from '@angular/core';
import { ParaImage } from '../left-image/left-image.component';

@Component({
  selector: 'app-right-image',
  templateUrl: './right-image.component.html',
  styleUrls: ['./right-image.component.css']
})
export class RightImageComponent implements OnInit {

  @Input() paraData:ParaImage;

  constructor() {}

  ngOnInit() {
  }

}
