import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css';

})

export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    
  }
 
 @Input() pageTitle: string;
  setTitle($event) {
    console.log($event.target.text);
  }
 
  setActiveLi(activeRoute) {
    //console.log('activeRoute is: ' + activeRoute.target.text);
    if(activeRoute === this.pageTitle) {
      return "active";
    }
  }

}
