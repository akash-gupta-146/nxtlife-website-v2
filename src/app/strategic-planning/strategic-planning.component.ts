import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';
import { ParaImage } from '../left-image/left-image.component';

@Component({
  selector: 'app-strategic-planning',
  templateUrl: './strategic-planning.component.html',
  styleUrls: ['./strategic-planning.component.css']
})
export class StrategicPlanningComponent implements OnInit {
  heading : Block[];
  paraData: ParaImage[];
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
      ]


     }
  ngOnInit() {
  }

}