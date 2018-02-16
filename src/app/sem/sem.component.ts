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
  learningExp:Features[];

  objectives : Objectives[];
  constructor() {
    this.objectives = [
      {
        title:'',
        details:'Commitment to Excellence',
        icon:'fa-binoculars'
      },
      {
        title:'',
        details:'Uphold the image of a brand that believes in Excellence',
        icon:'fa-binoculars'
      },
      {
        title:'',
        details:`‘Word-of-mouth’ is the best marketing tool. Hence, satisfaction of the ‘customers’ is important`,
        icon:'fa-binoculars'
      },
      {
        title:'',
        details:`Accreditation requirements`,
        icon:'fa-binoculars'
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
        title:'CE Assessment',
        details: 'Revisit Business Strategies and Performance',
        subPoints: [
          'Stakeholders Analysis','Process Audit','Experience Audit'
        ]
      },
      {
        title:'CE Mapping',
        details: 'Develop Customer Experience, Manage Touchpoints, Transform Culture',
        subPoints: [
          'Brand Value Alignment','Service deployment','Standards and systems development','Mindset and competence development','Reward and recognition'
        ]
      },
      {
        title:'CE Optimization',
        details: 'Drive continuous Customer Experience Management ',
        subPoints: [
          'Service Performance tracking','Service Innovation ','Process improvement','Continuous Learning '
        ]
      },
    ];

    this.learningExp = [
      {
        title:'Real time unadultered overview of all departments performance',
        details: null,
        subPoints: []
      },
      {
        title:'Notified before any issue becomes a problem',
        details: null,
        subPoints: []
      },
      {
        title:'Better prepared in fulfilling accreditation, ministry and audit requirments',
        details: null,
        subPoints: []
      },
      {
        title:'Make your team more efficient and productive',
        details: null,
        subPoints: []
      },
      {
        title:'Make your team more efficient and productive',
        details: null,
        subPoints: []
      },
      {
        title:'Reduce workload',
        details: null,
        subPoints: []
      },
      {
        title:'Direct communication channel with all stakeholders (students,college staff and management)',
        details: null,
        subPoints: []
      },
      {
        title:'All the communication gets screened categorised and prioritised',
        details: null,
        subPoints: []
      },
      {
        title:'Informed decision making based on real authenticated data',
        details: null,
        subPoints: []
      },
    ]
   }

  ngOnInit() {
  }

}

export class Objectives{
  title:string;
  details:string;
  icon:string;
}
