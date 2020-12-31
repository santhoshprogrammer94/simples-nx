import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../inheritance.component';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDlgApiComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
