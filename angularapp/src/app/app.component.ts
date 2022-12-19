import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';

  normalButton = true;
  oneClickButton = false;
  errorButton = false;

  onItemChange(item:any){
    const value = item.value;
    if(value == 1){
      this.normalButton = true;
      this.oneClickButton = false;
      this.errorButton = false;
    }else if(value == 2){
      this.oneClickButton = true;
      this.normalButton = false;
      this.errorButton = false;
    }else{
      this.errorButton = true;
      this.oneClickButton = false;
      this.normalButton = false;
    }
  }


}
