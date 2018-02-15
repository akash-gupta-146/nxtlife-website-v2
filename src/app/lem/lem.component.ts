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
          ''
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
