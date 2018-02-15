import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';
import { ParaImage } from '../left-image/left-image.component';
import { ListData } from '../dual-list/dual-list.component';
import { FabList } from '../fab-title/fab-title.component';

@Component({
  selector: 'app-strategic-planning',
  templateUrl: './strategic-planning.component.html',
  styleUrls: ['./strategic-planning.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
}
})
export class StrategicPlanningComponent implements OnInit {

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  heading : Block[];
  paraData: ParaImage[];
  listData: ListData[];
  fabList: FabList;
    constructor() {

      this.heading = [
        { 
          title: 'Why Strategic Planning', 
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
          route:'',
          type:'feature'
        },
        {
          name:'Integrates with Ellucian Banner and other ERP systems',
          description:'',
          icon:'',
          route:'',
          type:'benefit'
        },
        {
          name:'Allows for multiple plans for same institution',
          description:'',
          icon:'',
          route:'',
          type:'feature'
        },
        {
          name:'Monitor KPIs and targets',
          description:'',
          icon:'',
          route:'',
          type:'feature'
        },
        {
          name:'Upload evidence',
          description:'',
          icon:'',
          route:'',
          type:'feature'
        },
        {
          name:'Quarterly planning reports',
          description:'',
          icon:'',
          route:'',
          type:'benefit'
        },
        {
          name:'Built in approval process',
          description:'',
          icon:'',
          route:'',
          type:'benefit'
        },
        {
          name:'Built in forms to collect key data in case such a system is not available at the HEI (MOUs, student exchanges, complains etc.)',
          description:'',
          icon:'',
          route:'',
          type:'benefit'
        },
        {
          name:'Print well formatted quarterly or annual reports with a click',
          description:'',
          icon:'',
          route:'',
          type:'feature'
        },
        {
          name:'Develop action plans at KPI level, department and organization level to address issues highlighted through KPI monitoring',
          description:'',
          icon:'',
          route:'',
          type:'benefit'
        },
        {
          name:'Integrates with Internal Audit and Risk Management system',
          description:'',
          icon:'',
          route:'',
          type:'benefit'
        }
      ];
      this.fabList =
      {
        title: 'Strategic Planning',
        options: [
          'Quality Assurance in higher education',
          'Product Description',
          'Benefits'
        ]
      };


     }

     updateHeader(evt) {
      this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
      if(this.currPos >= this.changePos ) {
          this.isScrolled = true;
      } else {
          this.isScrolled = false;
      }
  }
  ngOnInit() {
  }

}