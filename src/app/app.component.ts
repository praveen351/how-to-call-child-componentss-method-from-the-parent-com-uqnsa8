import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  data:String;
  ngOnInit() {
    this.data="";
  }
  constructor() { }

  onClickEvent(obj: any) {
    console.log(this.data);
    obj.callMethod(this.data);
  }
}
