import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Name:any;
  
  public str="Marvellous"
  public value:any;
  public Send(data:any)
  {
   this.value=data;
   console.log(this.value);
  }


}
