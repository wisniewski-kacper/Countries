import {Component, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay, takeUntil} from 'rxjs/operators';
import {AboutMeComponent, Regions} from '@app/common';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent implements OnDestroy{
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

  private readonly destroying$ = new Subject<void>();

  constructor(private readonly breakpointObserver: BreakpointObserver, private dialog: MatDialog) {
  }

  onOpenDialog(): void {
    const dialogRef = this.dialog.open(AboutMeComponent);

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroying$))
  }

  ngOnDestroy(): void {
    this.destroying$.next();
  }
}
