import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 140;

  constructor() { }
  scrollToBottom = () => {
    setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
}
