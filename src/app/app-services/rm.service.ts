import { Injectable } from '@angular/core';
import { ProductData } from '../product-theme/product-theme.component';

@Injectable()
export class RmService {
  RM:ProductData;
  constructor() {     
    this.RM = 
    {
      title: 'Risk Management and Internal Audit',
      description: `Risk assessment is not only with reference to compliance but also includes customer-focused dimension to avoid risks related to brand equity, reputation and image.`,
      descriptionPoints: [],
      mainImage: 'assets/images/main-symbols/rm.png',
      features: [
        {
          title:'',
          details: 'Designed specifically to address the risk management and internal audit needs of higher education.',
          subPoints: [    
          ],
          icon:'fa-fighter-jet'
        },
        {
          title:'',
          details: 'Transparent platform to display to your stakeholders all current activities and their alignment with the institutional objectives. Additional layers are then built on top to effectively plan for future.',
          subPoints: [ 
          ],
          icon:'fa-fort-awesome',
        },
        {
          title:'',
          details: 'Risk management and internal audit modules are seamlessly integrated and fulfill requirements of accrediting agencies.',
          subPoints: [],
          icon:'fa-assistive-listening-systems'
        },
        {
          title:'',
          details: 'Risk management and internal audit includes a strong customer experience journey focus.',
          subPoints: [
          ],
          icon:'fa-graduation-cap'
        },
        {
          title:'',
          details: 'Capacity to cover multiple campuses.',
          subPoints: [],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Develop, assign and follow-up action plans related to objectives that could not reach the target',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Touchpoints where a problem is identified as high risk, the action step is automatically likned with the planning cycle',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Time-resource effective solution that links planning, risk and QA.',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Manage, organize and track all your QA activities in a central places',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Flexible enough to handle multiple campuses hierarchy',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Easily access for entire QA team – either hosted on cloud or your own servers.',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Run surveys and polls and link data directly with the Risk Management Systen and/Or Stakeholder Management System',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Identify areas of improvement and develop action plans to address issues.',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Integrates with ERPs including Ellucian Banner',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
        {
          title:'',
          details: 'Effectively monitor program health indicators',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
      ],
      color: {
        title:'#e40613',
        color1:'#e40613',
        color1Text:'white',
        color2:'#c3c3c1',
        color2Text:'black'
      }
    };
    }

}
