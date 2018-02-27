import { Component, OnInit } from '@angular/core';
import { ProductData } from '../product-theme/product-theme.component';
import { QualityAssuranceService } from '../app-services/quality-assurance.service';

@Component({
  selector: 'app-quality-assurance',
  templateUrl: './quality-assurance.component.html',
  styleUrls: ['./quality-assurance.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class QualityAssuranceComponent implements OnInit {

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 140;

  QualityAssurance:ProductData;
  constructor(public qaService:QualityAssuranceService) {

    // this.fabList =
    //   {
    //     title: 'Quality Assurance',
    //     options: [
    //       'Quality Assurance in higher education',
    //       'Product Description',
    //       'Benefits'
    //     ]
    //   };

    // this.heading = [
    //   {
    //     title: 'Quality Assurance in higher education',
    //     paragraph: ''
    //   },
    //   {
    //     title: 'Product Details',
    //     paragraph: ''
    //   },
    //   {
    //     title: 'Benefits',
    //     paragraph: ''
    //   },
    // ];

    // this.paraData = [
    //   {
    //     image: 'assets/images/carousel/sp/higher-education.png',
    //     paragraph: `Over last two decades while QA approaches in higher education has gone through remarkable evolution, many higher education institutions still have primitive approach to quality and/or have a non-systematic QA system or a QA system which is not linked with policy and planning.
        
    //     After a careful consideration of various Higher Education Quality Assurance models from around the world, we developed an integrated model for QA, Risk and planning. Our software solution for QA is based on that model and is revolutionary as it does not only integrates ideas from higher education research but also weaves in key elements of higher education which have strong influence on quality of teaching and learning environment, processes and intended outcomes. The model keep learners at its centre and emphasizes responsibility and accountability of staff and faculty towards students who are the key customers.`,
    //   },
    //   {
    //     image: 'assets/images/product.png',
    //     paragraph: `There is a dearth of software solutions when it comes to the QA in higher education. Even the ones that are available in the focus mostly on program quality assurance. Our solution is unique as it focuses on both the programs and services quality.

    //     It satisfies the requirements of almost all accrediting and QA agencies.`,
    //   }
    // ];

    

    // this.productDesc = [
    //   {
    //     name: 'Manage, Organize and track all your QA activities in a central place.',
    //     description: '',
    //     icon: '',
    //     route: '',
    //     type: ''
    //   },
    //   {
    //     name: 'Flexible enough to handle multiple campuses hierarchy.',
    //     description: '',
    //     icon: '',
    //     route: '',
    //     type: ''
    //   },
    //   {
    //     name: 'Satisfy the requirment of almost all accredity and quality assurance agencies.',
    //     description: '',
    //     icon: '',
    //     route: '',
    //     type: ''
    //   },
    //   {
    //     name: 'Easy access for entire Quality Assurance team.',
    //     description: '',
    //     icon: '',
    //     route: '',
    //     type: ''
    //   },
    //   {
    //     name: 'Run surveys and polls; Link data directly with Risk Management System and/or Stakeholder Management System.',
    //     description: '',
    //     icon: '',
    //     route: '',
    //     type: ''
    //   },
    //   {
    //     name: ' Effectively monitor program health indicators',
    //     description: '',
    //     icon: '',
    //     route: '',
    //     type: ''
    //   },
    //   {
    //     name: 'Identify area of improvement and develop action plans to address issues.',
    //     description: '',
    //     icon: '',
    //     route: '',
    //     type: ''
    //   },
    //   {
    //     name: 'Integrates with ERPs including Ellucian Banner',
    //     description: '',
    //     icon: '',
    //     route: '',
    //     type: ''
    //   },
    // ];

    // this.ourSol = [
    //   {
    //     title:'Integrated Model',
    //     details: 'for Quality Assurance, Risk and Planning',
    //     subPoints: [
    //     ],
    //     icon:'fa-american-sign-language-interpreting'
    //   },
    //   {
    //     title:'Revolutionary',
    //     details: 'Integrates ideas from:',
    //     subPoints: ['Higher Education Institute Research',
    //     'Plus weaves in key elements of higher education'
    //     ],
    //     icon:'fa-globe',
    //   },
    //   {
    //     title:'Keeps learners at its center',
    //     details: 'Emphasis responsibility and allow ability of staff and faculty towards students',
    //     subPoints: [
    //     ],
    //     icon:'fa-opencart'
    //   },
    //   {
    //     title:'Focus',
    //     details: 'Focuses on both the programs and services quality',
    //     subPoints: [
    //     ],
    //     icon:'fa-binoculars'
    //   },
    // ];
    this.QualityAssurance = this.qaService.QualityAssurance;
    
  }

  updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  ngOnInit() {
  this.scrollToBottom();
}
scrollToBottom = () => {
  setTimeout(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
}

