import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from '@simples/app-core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * If there is a Child component that:
 * - extends this BaseComponent
 * - implement ngOnDestroy,
 *
 * then it should manually unsubscribe via `this.sub.unsubscribe()`
 */

@Component({
  selector: 'inheritance',
  template: 'Inheritance: See in logs',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent
  implements OnInit, AfterViewInit, OnDestroy, DoCheck {
  private isAlive$ = new Subject<any>();
  protected cdRef: ChangeDetectorRef;
  protected router: Router;
  protected subscription: Subscription;
  subscriptions: Subscription[] = [];

  isDev = false;
  log = new Logger();

  constructor(
    protected injectorObj?: Injector,
    @Inject('environment') env?: any
  ) {
    this.isDev = !env.production;

    this.cdRef = this.injectorObj.get(ChangeDetectorRef);
    this.router = this.injectorObj.get(Router);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log('base ngAfterViewInit')
    this.ngDoCheck();
  }

  ngDoCheck(): void {
    this.cdRef.detectChanges();
  }

  /**
   * Auto-unsubscribe all subscriptions
   */
  public ngOnDestroy(): void {
    this.isAlive$.next();
    this.isAlive$.complete();

    if (this.subscriptions) {
      this.subscriptions.forEach((s) => s.unsubscribe());
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.isDev) {
    }
  }

  protected unsubsribeOnDestroy = (
    source: Observable<any>
  ): Observable<any> => {
    return source.pipe(takeUntil(this.isAlive$));
  };
}
