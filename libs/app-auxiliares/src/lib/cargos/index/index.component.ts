import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { IndexDlgApiComponent } from '@simples/app-shared';
import { Cargo } from '@simples/shared/interfaces';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CargosCollectionService } from '../cargos.service';
import { FormComponent } from '../form/form.component';
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
  titulo = 'Cargos';
  localParams: any;
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

    this.operation = 'edit';

    const dialogRef = this.dialog.open(FormComponent, {
      closeButton: false,
      draggable: true,
      data: {
        id: registro.id,
        payload: registro,
        operation: this.operation
      }
    });

    dialogRef.afterClosed$.subscribe(result => {
      console.log(`After dialog has been closed ${result}`);
    });        
  }

  onRefresh() {}

  onAdd() {
    console.log('abrindo dialogo');
    const dialogRef = this.dialog.open(FormComponent, {
      closeButton: false,
      data: {
        teste: 'Testando passar dados'
      }
    });

    dialogRef.afterClosed$.subscribe(result => {
      console.log(`After dialog has been closed ${result}`);
    });    
  }

  onClickSearch() {}

  onCancelSearch() {}

  onFilter(param) {}
}
