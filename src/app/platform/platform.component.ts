import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  msg: String;
  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    console.log('this is ' + ((this.isBrowser)? 'Browser': 'Server'))
    this.msg = 'platform';
    if (this.isBrowser) {
      alert('Hello!!')
    }
  }

}
