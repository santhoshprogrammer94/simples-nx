import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationFacade } from '@simples/app-store';
import { Observable, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'simples-nx',
  templateUrl: './nx.component.html',
  styleUrls: ['./nx.component.scss'],
})
export class NxComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject();
  private timer;
  private readonly onDestroy = new Subject<void>();

  direction = 'column';
  navigationLoading$: Observable<boolean>;
  isLoading = true;
  count = 0;

  constructor(private store: Store, private navFacade: NavigationFacade) {
   this.navFacade.selectLoading$
      .pipe(takeUntil(this.onDestroy))
      .subscribe((loading) => {
        timer(800)
          .pipe(takeUntil(this.onDestroy))
          .subscribe((t) => {
            this.isLoading = loading;
            console.log(this.count++);
          });
      });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  pivot(): void {
    this.direction = this.direction === 'row' ? 'column' : 'row';
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
