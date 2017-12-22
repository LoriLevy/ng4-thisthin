import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';

@Component({
  selector: 'app-baking',
  templateUrl: './baking.component.html',
  styleUrls: ['./baking.component.css']
})
export class BakingComponent implements OnInit {
  pageTitle = String;
  constructor(private route: ActivatedRoute, private router: Router) { }
  

  ngOnInit() {
       //comes from route data
       this.pageTitle = this.route.data['value'].pageTitle;
       
  }

}