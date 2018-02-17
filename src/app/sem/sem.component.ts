import { Component, OnInit } from '@angular/core';
import { Features } from '../lem/lem.component';

@Component({
  selector: 'app-sem',
  templateUrl: './sem.component.html',
  styleUrls: ['./sem.component.css']
})
export class SemComponent implements OnInit {

  customer:Features[];
  framework:Features[];
 

  objectives : Objectives[];
  constructor() {
    this.objectives = [
      {
        title:'',
        details:'Commitment to Excellence',
        icon:'fa-fighter-jet'
      },
      {
        title:'',
        details:'Uphold the image of a brand that believes in Excellence',
        icon:'fa-fort-awesome'
      },
      {
        title:'',
        details:`‘Word-of-mouth’ is the best marketing tool. Hence, satisfaction of the ‘customers’ is important`,
        icon:'fa-assistive-listening-systems'
      },
      {
        title:'',
        details:`Accreditation requirements`,
        icon:'fa-graduation-cap'
      },
    ];

    this.customer = [
      {
        title:'Unsatisfied Leaners',
        details: '',
        subPoints: [
        ]
      },
      {
        title:'Retention Issues',
        details: '',
        subPoints: [
        ]
      },
      {
        title:'Word of Mouth- Bad Marketing',
        details: '',
        subPoints: [
        ]
      },
      {
        title:'Recruitment issues',
        details: '',
        subPoints: [
        ]
      },
      {
        title:'Revenue issues',
        details: '',
        subPoints: [
        ]
      },      {
        title:'Program viability in question',
        details: '',
        subPoints: [
        ]
      },
    ];

    this.framework = [
      {
        title:'Assessment - Revisit Business Strategies and Performance',
        details: 'Revisit Business Strategies and Performance',
        subPoints: [
          'Stakeholders Analysis','Process Audit','Experience Audit'
        ]
      },
      {
        title:'Mapping - Develop Customer Experience, Manage Touchpoints, Transform Culture',
        details: 'Develop Customer Experience, Manage Touchpoints, Transform Culture',
        subPoints: [
          'Brand Value Alignment','Service deployment','Standards and systems development','Mindset and competence development','Reward and recognition'
        ]
      },
      {
        title:'Optimization - Drive continuous Customer Experience Management ',
        details: 'Drive continuous Customer Experience Management ',
        subPoints: [
          'Service Performance tracking','Service Innovation ','Process improvement','Continuous Learning '
        ]
      },
    ];
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

export class Objectives{
  title:string;
  details:string;
  icon:string;
}
