import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-heading',
  templateUrl: './block-heading.component.html',
  styleUrls: ['./block-heading.component.css']
})


export class BlockHeadingComponent implements OnInit {

  @Input() blockData:Block;

  constructor() { }

  ngOnInit() {
  }

}
export class Block{
  title:string;
  paragraph:string;
}