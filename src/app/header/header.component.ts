import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css';

})

export class HeaderComponent implements OnInit {
 // @Input() pageName: String; 
  ngOnInit(): void {
    
  }
 
 @Input() pageTitle: string;
  setTitle($event) {
    console.log($event.target.text);
    if( $event.target.text != '' ) {
      this.pageTitle = $event.target.text;
      console.log('target text is: ' + $event.target.text);
    }
  }

}
