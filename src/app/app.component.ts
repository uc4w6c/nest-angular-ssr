import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

export const BODY_KEY = makeStateKey<string>('BODY_KEY');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'nest-angular-ssr';
  title:string;
  body:string;

  constructor(private http: HttpClient, private transferState: TransferState) {}

  ngOnInit() {
    console.log('ngOnInit Start');
    this.http.get('http://localhost:4200/api/cats', { responseType: 'text' }).subscribe((data) => {
      this.title = data;
    });

    const bodyFunction = () => {
      // 5秒waitする
      new Promise((resolve, reject) => {
        console.log('5sec wait')
        setTimeout(() => {
            resolve();
        }, 5000);
      });
      return 'This is Body';
    }
    if (this.transferState.hasKey(BODY_KEY)) {
      this.body = this.transferState.get<string>(BODY_KEY, null);
    } else {
      const body = bodyFunction();
      this.transferState.set<string>(BODY_KEY, body);
      this.body = body;
    }
  }
}
