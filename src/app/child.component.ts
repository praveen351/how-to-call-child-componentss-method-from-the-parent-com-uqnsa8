import { Component } from '@angular/core';

@Component({
  selector: 'child',
  template: `<h3>Hiii {{test}}</h3>`,
})
export class ChildComponent {
  test: String;
  callMethod(s: String) {
    this.test = s;
    console.log(s);
  }
}
