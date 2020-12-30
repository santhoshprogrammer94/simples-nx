import { ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationFacade, SettingsFacade } from '@simples/app-store';
import { Observable } from 'rxjs';

import { onMainContentChange, sideNavAnimation, sideNavContainerAnimation } from './app.animations';
import { navigation } from './menu';

// import * as fromIssue from './store/issue/issue.selectors';
// import { reset } from './store/meta-reducers';
@Component({
  selector: 'simples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {


  appitems = navigation;

  @ViewChild('sidenav') sidenav: MatSidenav;
  navigationLoading$: Observable<boolean>;
  leftSideNav$ = this.settingsFacade.selectSidenav$;

  public onSideNavChange: boolean;

  constructor(
    private navFacade: NavigationFacade,
    private settingsFacade: SettingsFacade,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.navigationLoading$ = this.navFacade.selectLoading$;

    this.navigationLoading$.subscribe((res) => {
      console.log('SideNav', res);
      this.onSideNavChange = res;
    });
  }

  ngOnInit() {
    console.log('ngOnInit AppComponent');
  }

  onChangeLeftSideNav() {
    const sideNavPayload = !this.sidenav?.opened;
    this.settingsFacade.changeLeftSidenav(sideNavPayload);
  }

  mouseenter() {
    console.log('mouse entrou');
  }

  mouseleave() {
    console.log('mouse saiu');
  }

  ngOnDestroy(): void {
    console;
  }

  // tslint:disable-next-line: member-ordering
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
    h.test(window.location.host)
  );
}
