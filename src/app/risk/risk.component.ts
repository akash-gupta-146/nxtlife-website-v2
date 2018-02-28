import { Component, OnInit } from '@angular/core';
import { Objectives } from '../sem/sem.component';
import { ListData } from '../dual-list/dual-list.component';
import { RmService } from '../app-services/rm.service';
import { ProductData } from '../product-theme/product-theme.component';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {

  RM : ProductData;
  constructor(private rmService:RmService) { 
    this.RM = this.rmService.RM;
  }

  ngOnInit() {
  }

}
