import { Injectable } from '@angular/core';
import { ProductData } from '../product-theme/product-theme.component';

@Injectable()
export class StrategicPlanningService {

  StrategicPlanning:ProductData;
  constructor() { 

    this.StrategicPlanning = 
    {
      title: 'Strategic Planning',
      description: `Strategic planning is a bridge that links an organization’s today with tomorrow. A properly
      developed, implemented and monitored plan keeps an organization focused on its priorities by
      ensuring that all resources are spent in line with the goals and objectives. Strategic planning
      has to be a disciplined effort that is monitored regularly to ensure all stakeholders are working
      towards common goals to achieve intended outcomes.
      
      Our strategic planning software has been developed in consultation with senior higher education
      administrators with 15-20 years of experience each. There are many solutions available in the
      market, which can be used for planning, but most of them mostly cater the industry or are too
      expensive to be affordable for higher education institutions with small budgets. Our solution is a
      cost effective solution for higher education institutions with budget of any size.
      `,
      descriptionPoints: [
      ],
      mainImage: 'assets/images/main-symbols/sp.png',
      features: [
        {
          title:'xyz',
          details: 'Cloud based solution designed particularly for higher education',
          subPoints: [
          ],
          icon:'fa-american-sign-language-interpreting'
        },
        {
          title:'xyz',
          details: 'Integrates with Ellucian Banner and other ERP systems',
          subPoints: [],
          icon:'fa-globe',
        },
        {
          title:'xyz',
          details: 'Allows for multiple plans for same institution.',
          subPoints: [
          ],
          icon:'fa-opencart'
        },
        {
          title:'xyz',
          details: 'Quarterly planning reports',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'xyz',
          details: 'Built in approval process',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'xyz',
          details: 'Built in forms to collect key data in case such a system is not available at the HEI',
          subPoints: [
            'MOUs','Students Exchanges', 'Complains etc'
          ],
          icon:'fa-binoculars'
        },
        {
          title:'xyz',
          details: 'Print well formatted quarterly or annual reports with a click',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'xyz',
          details: `Develop action plans at KPI level, department and organization level to address issues
          highlighted through KPI monitoring`,
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'xyz',
          details: 'Integrates with Internal Audit and Risk Management system',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
      ],
      color: {
        title:'#a78965',
        color1:'#c0c0c0',
        color1Text:'black',
        color2:'#2e2e2e',
        color2Text:'white'
      }
    };
  }

}
