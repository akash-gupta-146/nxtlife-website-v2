import { Component, OnInit } from '@angular/core';
import { Features } from '../lem/lem.component';
import { ProductData } from '../product-theme/product-theme.component';
import { SemService } from '../app-services/sem.service';

@Component({
  selector: 'app-sem',
  templateUrl: './sem.component.html',
  styleUrls: ['./sem.component.css']
})
export class SemComponent implements OnInit {

  SEM:ProductData;
  constructor(private semService:SemService) {
    this.SEM = this.semService.SEM;
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

}

export class Objectives{
  title:string;
  details:string;
  icon:string;
}
