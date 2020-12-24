import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationFacade } from '@simples/app-store';
import { interval, Observable } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

@Component({
  selector: 'simples-nx',
  templateUrl: './nx.component.html',
  styleUrls: ['./nx.component.scss'],
})
export class NxComponent implements OnInit {
  direction = 'column';
  navigationLoading$: Observable<boolean>;

  constructor(private store: Store, private navFacade: NavigationFacade) {
    // this.stats$ = this.store.select(fromIssue.selectStats);
    this.navigationLoading$ = this.navigationLoading$ = this.navFacade.selectLoading$.pipe(
      delayWhen((loading) => interval(loading ? 0 : 800))
    );
  }

  ngOnInit() {
    console.log('testando');
  }

  pivot() {
    this.direction = this.direction === 'row' ? 'column' : 'row';
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
