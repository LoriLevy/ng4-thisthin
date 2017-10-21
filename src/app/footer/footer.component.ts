import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
 
})
export class FooterComponent implements OnInit {
  pageTitle: string = "Home";
  @Output() fromFooter = new EventEmitter<string>();

  sendToParent() {
    this.fromFooter.emit(this.pageTitle);
   }

  constructor() { }

  ngOnInit(): void {
  }
  
  setTitle($event) {
    console.log($event.target.text);
    this.pageTitle = $event.target.text;
    this.sendToParent();
  }
  
}
