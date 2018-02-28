import { Injectable } from '@angular/core';
import { ProductData } from '../product-theme/product-theme.component';

@Injectable()
export class SemService {
  SEM:ProductData;
  constructor() {
    this.SEM = 
    {
      title: 'Stakeholders Experience Management',
      description: ``,
      descriptionPoints: [],
      mainImage: 'assets/images/main-symbols/sem.png',
      features: [
        {
          title:'Commitment to Excellence',
          details: '',
          subPoints: [    
          ],
          icon:'fa-fighter-jet'
        },
        {
          title:'Uphold the image of a brand that believes in Excellence',
          details: '',
          subPoints: [ 
          ],
          icon:'fa-fort-awesome',
        },
        {
          title:'‘Word-of-mouth’ is the best marketing tool. Hence, satisfaction of the ‘customers’ is important',
          details: '',
          subPoints: [],
          icon:'fa-assistive-listening-systems'
        },
        {
          title:'Accreditation requirements',
          details: '',
          subPoints: [
          ],
          icon:'fa-graduation-cap'
        },
        {
          title:'Experience Drive',
          details: 'Well researched business concept can be applied to enhance higher education stakeholder experience.',
          subPoints: [],
          icon:'fa-binoculars'
        },
        {
          title:'What impact can have an Unhappy customer create?',
          details: '',
          subPoints: [
            'Unsatisfied Leaners',
            'Retention Issues',
            'Word of Mouth- Bad Marketing',
            'Recruitment issues',
            'Revenue issues',
            'Program viability in question'
          ],
          icon:'fa-binoculars'
        },
        {
          title:'Implementation Framework',
          details: '',
          subPoints: [
            'Assessment - Revisit Business Strategies and Performance',
            'Mapping - Develop Customer Experience, Manage Touchpoints, Transform Culture',
            'Optimization - Drive continuous Customer Experience Management'
          ],
          icon:'fa-binoculars'
        },
      ],
      color: {
        title:'#3ba935',
        color1:'#e40613',
        color1Text:'white',
        color2:'#3ba935',
        color2Text:'white'
      }
    };
    
   }

}
