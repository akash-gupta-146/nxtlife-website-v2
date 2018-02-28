import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';
import { ParaImage } from '../left-image/left-image.component';
import { ListData } from '../dual-list/dual-list.component';
import { FabList } from '../fab-title/fab-title.component';
import { Features } from '../lem/lem.component';

@Component({
  selector: 'app-product-theme',
  templateUrl: './product-theme.component.html',
  styleUrls: ['./product-theme.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})

export class ProductThemeComponent implements OnInit {

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 140;

  @Input() productData:ProductData;

  constructor() {
  }


  updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  ngOnInit() {
this.scrollToBottom();

}
scrollToBottom = () => {
  setTimeout(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

scrollRight(){
  window.scrollBy(100, 0);
}
}

export class FeaturesIcon{
  title:string;
  details:string;
  subPoints:string[];
  icon: string;
}

export class ProductData{
  title:string;
  description:string;
  mainImage:string;
  descriptionPoints:string[];
  features:FeaturesIcon[];
  color:colorSchema;
}

export class colorSchema{
  title:string;
  color1:string;
  color1Text:string;
  color2:string;
  color2Text:string;
}