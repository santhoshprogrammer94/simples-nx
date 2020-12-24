import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'simples-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {

  // You will want to hide and show a back-arrow depending on navigation state, if linking to other components from within the components
  // Not handling that in this demo.  Just leaving it here for illustration purposes
  showBackArrow = true;

  opened = true;
  @Output() sideNavClosed = new EventEmitter();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onMenuClick() {
    this.sideNavClosed.emit();
  }


  onChangeProfileImage() {
    this.router.navigateByUrl('/profile/personal');
  }

}
