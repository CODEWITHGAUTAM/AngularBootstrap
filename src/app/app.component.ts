import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reusable Component';
  userDetails=[
    {
      name:'Anil Sidhu',email:'anil@test.com'


    },{
      name:'Gautam Singh Rajput',email:'gautam@rajput.com'
    },
    {
      name:'Raushan Singh Rajput',email:'raushan@rajput.com'
    },
    {
      name:'Love Singh Rajput',email:'love@rajput.com'
    }
  ]

  


  

}
