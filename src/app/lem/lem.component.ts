import { Component, OnInit } from '@angular/core';
import { Feature } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-lem',
  templateUrl: './lem.component.html',
  styleUrls: ['./lem.component.css']
})
export class LemComponent implements OnInit {

  features:Features[];
  benefits:Features[];
  learningExp:Features[];
  constructor() {
    this.features = [
      {
        title:'Open Communication Channel',
        details: 'Send a strong message to students that their opinion matters.',
        subPoints: [
          'Grievances',
          'Suggestions',
          'Appreciations',
          'Messaging',
          'Requests'
        ]
      },
      {
        title:'Important information in finger tips',
        details: '',
        subPoints: [
          'Calander',
          'Circular',
          'Assessments',
          'Assignments'
        ]
      },
      {
        title:'Module and Lecture Evaluation',
        details: '',
        subPoints: [
        ]
      },
      {
        title:'Academic Advisory',
        details: '',
        subPoints: [
          'Faculty advisor identifies at-risk students',
          'Rating per module per term',
          'Faculty teaching the module gets view of all students rating',
          'Students does not get to see there rating'
        ]
      },
      {
        title:'Alumni and Employer Feedback',
        details: '',
        subPoints: [
        ]
      },
      {
        title:'Unique combination of anonymity with authenticity',
        details: '',
        subPoints: [
        ]
      },
      {
        title:'Customised real time reporting',
        details: '',
        subPoints: [
        ]
      },
    ]

    this.benefits = [
      {
        title:'Streamline Communication',
        details: '',
        subPoints: []
      },
      {
        title:'Increased engagement between students and college staff',
        details: '',
        subPoints: []
      },
      {
        title:'All the stakeholders are emerged to speak up',
        details: '',
        subPoints: []
      },
      {
        title:'Increase transparency and accountability',
        details: '',
        subPoints: []
      },
      {
        title:'Increase students retention and enrollment',
        details: '',
        subPoints: []
      },
      {
        title:'Decrease Staff attrition',
        details: '',
        subPoints: []
      },
      {
        title:'Private and Dedicated space between students and college staff',
        details: '',
        subPoints: []
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


export class Features{
  title:string;
  details:string;
  subPoints:string[];
}
