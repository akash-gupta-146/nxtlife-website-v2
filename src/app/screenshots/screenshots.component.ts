import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.css']
})
export class ScreenshotsComponent implements OnInit {

  images: any;
  imageId: number = 0;
  constructor() { }

  ngOnInit() {
    this.images = [
      {src:"https://media.istockphoto.com/photos/strategy-concept-hand-drawn-on-blackboard-picture-id477435500?k=6&m=477435500&s=612x612&w=0&h=UHBPQm5Zp_NR7WAR33JfBR5-OnglW80Z87Rj4I-4XhU="},
      {src:"http://jasonalexis.com/wp-content/uploads/2016/10/strategy-760x498.jpg"},
      {src:"https://www.ingredientsnetwork.com/47/pdcnewsitem/04/86/26/strategy_web.jpg"},
      {src:"http://www.acetz.com/blog/wp-content/uploads/2015/02/digital-marketing-strategy.jpg"},
      {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3X_W3d0QuTEuYbOx6uLj2PzFBTv45kA_byIvx37VpV0aInnILA"},
      {src:"https://media.istockphoto.com/photos/strategy-concept-hand-drawn-on-blackboard-picture-id477435500?k=6&m=477435500&s=612x612&w=0&h=UHBPQm5Zp_NR7WAR33JfBR5-OnglW80Z87Rj4I-4XhU="},
      {src:"https://media.istockphoto.com/photos/strategy-concept-hand-drawn-on-blackboard-picture-id477435500?k=6&m=477435500&s=612x612&w=0&h=UHBPQm5Zp_NR7WAR33JfBR5-OnglW80Z87Rj4I-4XhU="},
      {src:"https://media.istockphoto.com/photos/strategy-concept-hand-drawn-on-blackboard-picture-id477435500?k=6&m=477435500&s=612x612&w=0&h=UHBPQm5Zp_NR7WAR33JfBR5-OnglW80Z87Rj4I-4XhU="},
      {src:"https://www.ingredientsnetwork.com/47/pdcnewsitem/04/86/26/strategy_web.jpg"},
      {src:"https://www.planwallpaper.com/static/images/Full-Hd-Wallpapers-1080p-1.jpg"},
    ]
  }

  setImage(i){
    this.imageId = i;
  }

  previousPic(){
    this.imageId = this.imageId - 1;
    // if(this.imageId <= 0){
    //   this.imageId = 0;
    // }
  }

  nextPic(){
    this.imageId = this.imageId + 1;
    console.log(this.images.length);  
  }
}
