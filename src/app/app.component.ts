import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import schedule from 'node-schedule';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    schedule.scheduleJob('* * * * * *', (evt) => {
      console.log('CURRENT TIME', evt);
      // loop for asking user to enter time
    });

  }
}
