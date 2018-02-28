import { Injectable } from '@angular/core';
import { ProductData } from '../product-theme/product-theme.component';

@Injectable()
export class LemService {

  LEM:ProductData;
  constructor() { 
    this.LEM = 
    {
      title: 'Learning Experience Management',
      description: `Streamline Communication
      All the stakeholders are emerged to speak up
      Increase transparency and accountability
      Increase students retention and enrollment
      Decrease Staff attrition
      `,
      descriptionPoints: [],
      mainImage: 'assets/images/main-symbols/lem.png',
      features: [
        {
          title:'Open Communication Channel',
          details: 'Send a strong message to students that their opinion matters.',
          subPoints: [         'Grievances',
                  'Suggestions',
                  'Appreciations',
                  'Messaging',
                  'Requests'
          ],
          icon:'fa-american-sign-language-interpreting'
        },
        {
          title:'Important information in finger tips',
          details: '',
          subPoints: [ 
                'Calander',
                'Circular',
                'Assessments',
                'Assignments'
          ],
          icon:'fa-globe',
        },
        {
          title:'Module and Lecture Evaluation',
          details: '',
          subPoints: [],
          icon:'fa-opencart'
        },
        {
          title:'Academic Advisory',
          details: '',
          subPoints: [
                      'Faculty advisor identifies at-risk students',
          'Rating per module per term',
          'Faculty teaching the module gets view of all students rating',
          'Students does not get to see there rating'
          ],
          icon:'fa-binoculars'
        },
        {
          title:'Alumni and Employer Feedback',
          details: '',
          subPoints: [],
          icon:'fa-binoculars'
        },
        {
          title:'Unique combination of anonymity with authenticity',
          details: '',
          subPoints: [],
          icon:'fa-binoculars'
        },
        {
          title:'Customised real time reporting',
          details: '',
          subPoints: [],
          icon:'fa-binoculars'
        },
      ],
      color: {
        title:'#953786',
        color1:'#86ad31',
        color1Text:'white',
        color2:'#953786',
        color2Text:'white'
      }
    };
   }
}

