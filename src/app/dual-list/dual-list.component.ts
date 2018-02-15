import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dual-list',
  templateUrl: './dual-list.component.html',
  styleUrls: ['./dual-list.component.css']
})
export class DualListComponent implements OnInit {

  @Input() listData: ListData;
  constructor() {}

  ngOnInit() {
  }

}


export class ListData{
  name: string;
  description:string;
  icon:string;
  route:string;
  type:string;
}