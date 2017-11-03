import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, CanActivate } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
})
export class NotfoundComponent implements OnInit {
  pageTitle: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.pageTitle = this.route.data['value'].pageTitle;
  }

}
