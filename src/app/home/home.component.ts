import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-view',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {
  
  pageTitle = "Home";
  constructor(meta: Meta, title: Title) {

    title.setTitle('Welcome to Thisthin. Follow me to a thinner you!');
    meta.addTags([
      { name: 'author',   content: 'Lori Levy'},
      { name: 'keywords', content: 'Losing weight, keeping it off, getting started, Lori Levy, diets dont work, drop pounds'},
      { name: 'description', content: '' }
    ]);
    meta.updateTag(
      { name: 'description', content: 'Welcome to ThisThin.com. Learn how to eat to lose weight.' },
      `name='description'`
    );
 


  }
  ngOnInit() {
  }
}
