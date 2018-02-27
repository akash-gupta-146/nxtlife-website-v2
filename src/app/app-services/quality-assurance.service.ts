import { Injectable } from '@angular/core';
import { ProductData } from '../product-theme/product-theme.component';

@Injectable()
export class QualityAssuranceService {

  QualityAssurance:ProductData;
  constructor() {

    this.QualityAssurance = 
    {
      title: 'Quality Assurance',
      description: `Approach towards quality assurance in higher education institutes has gone through remarkable evolution over last two decades.
      Many higher education institutes still have`,
      descriptionPoints: [
        `Primitive approach to quality`,
        `Non-Systematic Quality Assurance System`,
        `Quality Assurance system which is not linked with policy and planning`,
        `Focus mostly on program qualities Assurance`
      ],
      mainImage: 'assets/images/girl-boy.png',
      features: [
        {
          title:'Integrated Model',
          details: 'for Quality Assurance, Risk and Planning',
          subPoints: [
          ],
          icon:'fa-american-sign-language-interpreting'
        },
        {
          title:'Revolutionary',
          details: 'Integrates ideas from:',
          subPoints: ['Higher Education Institute Research',
          'Plus weaves in key elements of higher education'
          ],
          icon:'fa-globe',
        },
        {
          title:'Keeps learners at its center',
          details: 'Emphasis responsibility and allow ability of staff and faculty towards students',
          subPoints: [
          ],
          icon:'fa-opencart'
        },
        {
          title:'Focus',
          details: 'Focuses on both the programs and services quality',
          subPoints: [
          ],
          icon:'fa-binoculars'
        },
      ]
    };
   }

}
