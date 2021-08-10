import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Regions} from '../../common';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
      shareReplay()
  );

  regions: Regions[] = [
    {
      id: 1,
      code: 'europe',
      name: 'Europe'
    },
    {
      id: 2,
      code: 'asia',
      name: 'Asia'
    },
    {
      id: 3,
      code: 'americas',
      name: 'Americas'
    },
    {
      id: 4,
      code: 'oceania',
      name: 'Oceania'
    },
    {
      id: 5,
      code: 'africa',
      name: 'Africa'
    }
  ];

  constructor(private readonly breakpointObserver: BreakpointObserver) {}
}
