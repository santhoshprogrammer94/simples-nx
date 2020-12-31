import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  OnInit,
} from '@angular/core';
import { IndexDlgApiComponent } from '@simples/app-shared';
import { Cargo } from '@simples/shared/interfaces';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { keys } from 'ts-transformer-keys';

import { CargosCollectionService } from '../cargos.service';
import { Configs } from './configs';

@Component({
  selector: 'simples-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent
  extends IndexDlgApiComponent
  implements OnInit, AfterViewInit {
  data$: Observable<Cargo[]>;
  configuration = new Configs().configuration;
  time: any;

  displayedColumns: string[] = [
    'id',
    // 'created_at',
    // 'updated_at',
    // 'deleted_at',
    // 'is_deleted',
    // 'is_active',
    'description',
  ];

  constructor(
    private injector: Injector,
    @Inject('env') public env,
    private dataService: CargosCollectionService
  ) {
    super(injector, env);

    this.data$ = this.dataService.filteredEntities$;
  }

  ngOnInit() {
    interval(1000)
      .pipe(
        tap((e) => console.log('Decorator', e)),
        // @ts-ignore  <- If i add this the warning will gone but i dont want to add this every rxjs later.
        this.unsubsribeOnDestroy
      )
      .subscribe();
  }
  onDblClick(registro: Cargo) {
    console.log(registro)
  }
}
