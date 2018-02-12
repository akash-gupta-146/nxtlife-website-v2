import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';
import { ParaImage } from '../left-image/left-image.component';
import { ListData } from '../dual-list/dual-list.component';

@Component({
  selector: 'app-strategic-planning',
  templateUrl: './strategic-planning.component.html',
  styleUrls: ['./strategic-planning.component.css']
})
export class StrategicPlanningComponent implements OnInit {
  heading : Block[];
  paraData: ParaImage[];
  listData: ListData[];
    constructor() {
      this.heading = [
        { 
          title: 'Strategic Planning in higher education', 
          paragraph: ''
        },
        { 
          title: 'Product Description', 
          paragraph: ''
        },
        { 
          title: 'Benefits', 
          paragraph: ''
        },
      ];

      this.paraData = [
        {
          image: 'assets/images/carousel/sp/higher-education.png',
          paragraph: `Strategic planning is a bridge that links an organization’s today with tomorrow.  A properly developed, implemented and monitored plan keeps an organization focused on its priorities by ensuring that all resources are spent in line with the goals and objectives. Strategic planning has to be a disciplined effort that is monitored regularly to ensure all stakeholders are working towards common goals to achieve intended outcomes. `,
        },
        {
          image: 'assets/images/product.png',
          paragraph: `Our strategic planning software has been developed in consultation with senior higher education administrators with 15-20 years of experience each.  There are many solutions available in the market, which can be used for planning, but most of them mostly cater the industry or are too expensive to be affordable for higher education institutions with small budgets. Our solution is a cost effective solution for higher education institutions with budget of any size. `,
        }
      ],

      this.listData = [
        {
          name:'Cloud based solution designed particularly for higher education',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Integrates with Ellucian Banner and other ERP systems',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Allows for multiple plans for same institution',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Monitor KPIs and targets',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Upload evidence',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Quarterly planning reports',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Built in approval process',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Built in forms to collect key data in case such a system is not available at the HEI (MOUs, student exchanges, complains etc.)',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Print well formatted quarterly or annual reports with a click',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Develop action plans at KPI level, department and organization level to address issues highlighted through KPI monitoring',
          description:'',
          icon:'',
          route:''
        },
        {
          name:'Integrates with Internal Audit and Risk Management system',
          description:'',
          icon:'',
          route:''
        }
      ]


     }
  ngOnInit() {
  }

}