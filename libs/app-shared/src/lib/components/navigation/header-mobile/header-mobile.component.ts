import { SettingsFacade } from '@simples/app-store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Component({
  selector: 'simples-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
  // You will want to hide and show a back-arrow depending on navigation state, if linking to other components from within the components
  // Not handling that in this demo.  Just leaving it here for illustration purposes
  showBackArrow = true;
  leftSideNav$ = this.settingsFacade.selectSidenav$;
  // outro1$ = this.navFacade.outro1$;
  // outro2$ = this.navFacade.outro2$;

  @Output() sideNavClosed = new EventEmitter();
  @Input() windowTitle = 'Janela Sem Título Configurado'

  constructor(private router: Router, private settingsFacade: SettingsFacade) {}

  ngOnInit(): void {}

  onLeftSideNavBackClick() {
    this.sideNavClosed.emit();
  }

  onMenuClick() {
    console.log('Clicou no menu da janela', this.windowTitle);
  }

  onChangeProfileImage() {
    this.router.navigateByUrl('/profile/personal');
  }

  open(menu) {
    menu.openMenu();
  }
}
