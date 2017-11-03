import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';

@Component({
  selector: 'app-gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.css'],
  
})
export class GettingstartedComponent implements OnInit {
  pageTitle = "Getting Started";
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //comes from route data
    this.pageTitle = this.route.data['value'].pageTitle;
  }
}