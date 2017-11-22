import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';

@Component({
  selector: 'app-enhancers',
  templateUrl: './enhancers.component.html',
  styleUrls: ['./enhancers.component.css']
})
export class EnhancersComponent implements OnInit {
  pageTitle = String;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     //comes from route data
     this.pageTitle = this.route.data['value'].pageTitle;
  }

}




