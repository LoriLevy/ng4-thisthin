import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {
  
  pageTitle = "This Thin Home Page";

  ngOnInit() {
   // this.route.parent.paramMap.subscribe(params => { debugger; this.strTitle = params.get('title') });
   // this.strTitle = this.route.snapshot.data.title;
  }
}
