import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'simples-nx',
  templateUrl: './nx.component.html',
  styleUrls: ['./nx.component.scss'],
})
export class NxComponent implements OnInit {
  direction = 'column';

  constructor() {}

  ngOnInit() {}

  pivot() {
    this.direction = this.direction === 'row' ? 'column' : 'row';
  }
  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
