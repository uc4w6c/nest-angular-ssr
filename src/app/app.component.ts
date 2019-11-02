import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'nest-angular-ssr';
  title:string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('ngOnInit Start');
    this.http.get('http://localhost:4200/api/cats', { responseType: 'text' }).subscribe((data) => {
      this.title = data;
    });
  }
}
