import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { PagesToNavigateClass } from 'src/models/pagesToNavigate.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.pagesToNavigate(1);
      }

      return this.pagesToNavigate();
    })
  );

  pagesToNavigate(breakpoint: number = 2): PagesToNavigateClass[] {
    return [
      {
        link: '/templates/home',
        title: 'Templates Home',
        p: 'Select templates to start with.<br/> Let\'s start by selecting new template.',
        cols: breakpoint, rows: 1,
        show: true
      },
      {
        link: '/dashboard',
        title: 'Saved Templates',
        p: 'We found some templates you had already used <br/> and stored on your local machine.',
        cols: 1, rows: 1,
        show: true
      },
      {
        link: '/dashboard',
        title: 'Upcoming fetures',
        p: 'Here we list out new upcoming features.<br/> Let\'s start by selecting new template.',
        cols: 1, rows: 1,
        show: false
      }];
  }

  constructor(private breakpointObserver: BreakpointObserver) { }
}
