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
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';

import { BaseComponent } from '../../inheritance.component';
import { CrudDlgApiState } from '../crud-dialogo-api-state';

// import {
//   Organizacao,
//   OrganizacaoStoreFacade
// } from '@solsig/sig-stores';

@Component({
  selector: 'lib-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexDlgApiComponent
  extends BaseComponent
  implements OnInit {
  protected cdRef: ChangeDetectorRef;
  protected dialog: MatDialog;
  protected store$: Store<CrudDlgApiState>;
  protected url: string;
  protected id: number;
  protected router: Router;

  mySub: Subscription;
  protected subscription: Subscription;

  constructor(injector: Injector, @Inject('environment') env?: any) {
    super(injector, env);
    if (!this.isDev) {
    }
  }

  ngOnInit(): void {}

  onCallForm(data): void {
    if (this.isDev) {
    }
  }

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
