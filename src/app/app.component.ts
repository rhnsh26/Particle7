import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'P7';
  filter = true;
  ngOnInit(){
    setTimeout( () => {
      this.filter = false;
    } , 2000 );
  }
}
