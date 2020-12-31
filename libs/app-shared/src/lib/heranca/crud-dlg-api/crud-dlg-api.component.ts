import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { BaseComponent } from '../inheritance.component';

@Component({
  selector: 'solsig-crud-dlg-api',
  templateUrl: './crud-dlg-api.component.html',
  styleUrls: ['./crud-dlg-api.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudDlgApiComponent
  extends BaseComponent
  implements OnInit {

  constructor(injector: Injector, @Inject('environment') env?: any) {
    super(injector, env);
    if (!this.isDev) {
    }
  }

  ngOnInit(): void {}

  // onRefresh(params?) {}

  onDblClick(rec): void {}

  onAdd(): void {}

  onClickSearch(): void {}


}
