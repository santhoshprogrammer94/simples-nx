import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Injector,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';

import { BaseComponent } from '../../inheritance.component';

@Component({
  selector: ' html 2',
  template: 'Inheritance: See in logs',

  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexDlgApiComponent extends BaseComponent implements OnInit {
  protected cdRef: ChangeDetectorRef;
  protected router: Router;
  protected dialog: DialogService;

  operation = 'index';
  constructor(injector: Injector, @Inject('environment') env?: any) {
    super(injector, env);

    this.dialog = this.injectorObj.get(DialogService);

    if (!this.isDev) {
    }
  }

  ngOnInit(): void {}



  onPagamentoForm(data): void {
    if (this.isDev) {
    }
  }

  onCallNewForm(data): void {
    if (this.isDev) {
    }
  }

  onCallDate(data): void {}
}
