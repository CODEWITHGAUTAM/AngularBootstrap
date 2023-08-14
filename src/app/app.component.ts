import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Send Data Child to Parent Component';
  data=10;
  name="Gautam Singh Rajput";
  address="Saharsa";

  updateChild()
  {
    this.data=Math.floor(Math.random()*10);
  }


  

}
