import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-image',
  templateUrl: './left-image.component.html',
  styleUrls: ['./left-image.component.css']
})
export class LeftImageComponent implements OnInit {

  @Input() paraData:ParaImage;
  
  constructor() { }

  ngOnInit() {
  }

}

export class ParaImage{
  image: string;
  paragraph: string;
}
