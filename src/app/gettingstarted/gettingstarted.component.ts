import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';

@Component({
  selector: 'app-gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.css'],
  
})
export class GettingstartedComponent implements OnInit {
  pageTitle = "Getting Started";
  
  constructor(private route: ActivatedRoute, private router: Router, public meta: Meta, public title: Title) { 
    title.setTitle('ThisThin - Getting Started');
    meta.updateTag(
      { name: 'description', content: 'Getting started on ThisThin.com to learn how to eat to lose weight.' },
      `name='description'`
    );

  }
  ngOnInit() {
    //comes from route data
    this.pageTitle = this.route.data['value'].pageTitle;
  }
}