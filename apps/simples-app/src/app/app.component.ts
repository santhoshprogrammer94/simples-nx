import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  onShowHideSideBar() {
    console.log('clicou', this.isExpanded);

    this.isExpanded = !this.isExpanded;

    if (!this.isExpanded) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
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
