import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';
import { ParaImage } from '../left-image/left-image.component';
import { ListData } from '../dual-list/dual-list.component';
import { FabList } from '../fab-title/fab-title.component';

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

  heading: Block[];
  paraData: ParaImage[];
  listData: ListData[];
  fabList: FabList;
  constructor() {

    this.fabList =
      {
        title: 'Quality Assurance',
        options: [
          'Quality Assurance in higher education',
          'Product Description',
          'Benefits'
        ]
      };

    this.heading = [
      {
        title: 'Quality Assurance in higher education',
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
        paragraph: `Over last two decades while QA approaches in higher education has gone through remarkable evolution, many higher education institutions still have primitive approach to quality and/or have a non-systematic QA system or a QA system which is not linked with policy and planning.
        
        After a careful consideration of various Higher Education Quality Assurance models from around the world, we developed an integrated model for QA, Risk and planning. Our software solution for QA is based on that model and is revolutionary as it does not only integrates ideas from higher education research but also weaves in key elements of higher education which have strong influence on quality of teaching and learning environment, processes and intended outcomes. The model keep learners at its centre and emphasizes responsibility and accountability of staff and faculty towards students who are the key customers.`,
      },
      {
        image: 'assets/images/product.png',
        paragraph: `There is a dearth of software solutions when it comes to the QA in higher education. Even the ones that are available in the focus mostly on program quality assurance. Our solution is unique as it focuses on both the programs and services quality.

        It satisfies the requirements of almost all accrediting and QA agencies.`,
      }
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

  updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  ngOnInit() {
  }

}
