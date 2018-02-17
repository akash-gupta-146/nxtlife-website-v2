import { Component, OnInit } from '@angular/core';
import { Objectives } from '../sem/sem.component';
import { ListData } from '../dual-list/dual-list.component';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {
  listData: ListData[];
  features: Objectives[];
  constructor() { 
    this.features = [
      {
        title:'Risk management and internal audit includes a strong customer experience journey focus.',
        details: null,
        icon: 'fa-book'
      },
      {
        title:'Capacity to cover multiple campuses.',
        details: null,
        icon: 'fa-university'
      },
      {
        title:'Develop, assign and follow-up action plans related to objectives that could not reach the target',
        details: null,
        icon: 'fa-bullseye'
      },
      {
        title:'Touchpoints where a problem is identified as high risk, the action step is automatically likned with the planning cycle',
        details: null,
        icon: 'fa-certificate'
      },
    ];
    this.listData = [
      {
        name: 'Time-resource effective solution that links planning, risk and QA.',
        description: '',
        icon: '',
        route: '',
        type: ''
      },
      {
        name: 'Manage, organize and track all your QA activities in a central places',
        description: '',
        icon: '',
        route: '',
        type: ''
      },
      {
        name: 'Flexible enough to handle multiple campuses hierarchy',
        description: '',
        icon: '',
        route: '',
        type: ''
      },
      {
        name: 'Easily access for entire QA team – either hosted on cloud or your own servers.',
        description: '',
        icon: '',
        route: '',
        type: ''
      },
      {
        name: `Run surveys and polls and link data directly with the Risk Management Systen and/Or
        Stakeholder Management System`,
        description: '',
        icon: '',
        route: '',
        type: ''
      },
      {
        name: 'Identify areas of improvement and develop action plans to address issues.',
        description: '',
        icon: '',
        route: '',
        type: ''
      },
      {
        name: 'Effectively monitor program health indicators',
        description: '',
        icon: '',
        route: '',
        type: ''
      },
      {
        name: 'Integrates with ERPs including Ellucian Banner',
        description: '',
        icon: '',
        route: '',
        type: ''
      }
    ];
  }

  ngOnInit() {
  }

}
