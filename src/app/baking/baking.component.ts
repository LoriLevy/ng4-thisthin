import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-baking',
  templateUrl: './baking.component.html',
  styleUrls: ['./baking.component.css']
})
export class BakingComponent implements OnInit {
  pageTitle = String;
  constructor(private route: ActivatedRoute, private router: Router,
    meta: Meta, title: Title) { 

      title.setTitle('ThisThin - Baking');
      meta.updateTag(
        { name: 'description', content: 'ThisThin.com Learn how to bake the Low-Fat way. Lose and fat! Not the flavor!' },
        `name='description'`
      );

  }
  

  ngOnInit() {
       //comes from route data
       this.pageTitle = this.route.data['value'].pageTitle;
       
  }

}
