import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';

@Component({
  selector: 'app-enhancers',
  templateUrl: './enhancers.component.html',
  styleUrls: ['./enhancers.component.css']
})
export class EnhancersComponent implements OnInit {
  pageTitle = String;
  constructor(private route: ActivatedRoute, private router: Router, public meta: Meta, public title: Title) { 
  title.setTitle('ThisThin - Getting Started');
  meta.updateTag(
    { name: 'description', content: 'ThisThin.com shows you how you can enhance low-fat food to lose the fat - not the taste!' },
    `name='description'`
  );
  }
  ngOnInit() {
     //comes from route data
     this.pageTitle = this.route.data['value'].pageTitle;
  }

}




