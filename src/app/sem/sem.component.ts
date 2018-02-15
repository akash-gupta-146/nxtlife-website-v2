import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem',
  templateUrl: './sem.component.html',
  styleUrls: ['./sem.component.css']
})
export class SemComponent implements OnInit {

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
