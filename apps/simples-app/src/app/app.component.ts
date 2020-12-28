import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { NavigationFacade, SettingsFacade } from '@simples/app-store';
import { interval, Observable } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

// import * as fromIssue from './store/issue/issue.selectors';
// import { reset } from './store/meta-reducers';
@Component({
  selector: 'simples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appitems = [
    {
      label: 'Item 1 (with Font awesome icon)',
      faIcon: 'fab fa-500px',
      items: [
        {
          label: 'Item 1.1',
          faIcon: 'fab fa-accusoft',
        },
        {
          label: 'Item 1.2',
          faIcon: 'fab fa-accessible-icon',
          items: [
            {
              label: 'Item 1.2.1',
              faIcon: 'fas fa-allergies',
            },
            {
              label: 'Item 1.2.2',
              faIcon: 'fas fa-ambulance',
              items: [
                {
                  label: 'Item 1.2.2.1',
                  faIcon: 'fas fa-anchor',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Item 2',
      icon: 'alarm',
      items: [
        {
          label: 'Item 2.1',
          icon: 'favorite',
        },
        {
          label: 'Item 2.2',
          icon: 'favorite_border',
        },
      ],
    },
    {
      label: 'Item 3',
      icon: 'offline_pin',
    },
    {
      label: 'Item 4',
      icon: 'star_rate',
      hidden: true,
    },
  ];
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  isExpanded = true;
  @ViewChild('sidenav') sidenav: MatSidenav;
  // showSubmenu: boolean = false;
  isShowing = false;
  // showSubSubMenu: boolean = false;
  navigationLoading$: Observable<boolean>;
  leftSideNav$ = this.settingsFacade.selectSidenav$;

  constructor(
    private store: Store,
    private navFacade: NavigationFacade,
    private settingsFacade: SettingsFacade,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    // this.stats$ = this.store.select(fromIssue.selectStats);
    // this.navigationLoading$ = this.navFacade.selectLoading$;
    console.log('constructor AppComponent');

    this.navigationLoading$ = this.navFacade.selectLoading$.pipe(
      // tap((val) => console.log(`initial emit:${val}`)),
      delayWhen((loading) => interval(loading ? 0 : 800))
    );

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    console.log('ngOnInit AppComponent');
  }

  onChangeLeftSideNav() {
    const sideNavPayload = !this.sidenav?.opened;
    this.settingsFacade.changeSidenav(sideNavPayload);
  }


  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
    h.test(window.location.host)
  );
}
