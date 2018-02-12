import { Component, OnInit } from '@angular/core';
import { Block } from '../block-heading/block-heading.component';
import { ParaImage } from '../left-image/left-image.component';

@Component({
  selector: 'app-strategic-planning',
  templateUrl: './strategic-planning.component.html',
  styleUrls: ['./strategic-planning.component.css']
})
export class StrategicPlanningComponent implements OnInit {
  heading : Block[];
  paraData: ParaImage[];
    constructor() {
      this.heading = [
        { 
          title: 'Strategic Planning in higher education', 
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
          paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta magna quis augue ornare, ut placerat nisl porta. Vivamus
          bibendum mollis sapien, vitae iaculis nibh aliquam ut. Proin tincidunt eros eu odio malesuada bibendum. Curabitur
          eget pharetra eros. Sed rutrum est ex, ut gravida tellus elementum ut. Ut fringilla pellentesque massa vel fringilla.
          Vivamus molestie malesuada mi, non interdum mi semper luctus. Ut pharetra diam quis consectetur semper.`,
        },
        {
          image: 'assets/images/product.png',
          paragraph: `Phasellus malesuada sit amet orci sit amet ultricies. Vestibulum elit tellus, rhoncus ac neque at, feugiat porttitor massa.
          Vivamus gravida eget ligula eu ullamcorper. Sed interdum sollicitudin tortor tincidunt pretium. Cras vel dapibus
          erat. Pellentesque metus erat, suscipit non felis a, sagittis pretium quam. Proin pretium a arcu ut ultricies.
          Sed porta mattis felis, ut varius arcu scelerisque eu. Praesent facilisis ornare elit. Sed ut ex a est mattis
          tincidunt. In tellus justo, aliquam sit amet libero quis, pretium bibendum massa.`,
        }
      ]


     }
  ngOnInit() {
  }

}