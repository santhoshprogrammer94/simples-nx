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
  selectedId = 0;

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
    this.onRefresh();
  }

  onRefresh() {
    console.log('refresh da index');
    this.dataService.load();
  }

  onDblClick(registro: Cargo) {
    this.operation = 'edit';
    this.selectedId = registro.id;
    this.onCallForm(registro);
  }

  onAdd() {
    this.operation = 'new';
    this.onCallForm();
  }

  onCallForm(registro?: Cargo): void {
    const dialogRef = this.dialog.open(FormComponent, {
      closeButton: false,
      enableClose: false,
      draggable: true,
      height: '280',
      backdrop: true,
      data: {
        id: this.selectedId,
        payload: registro,
        operation: this.operation,
      },
    });

    dialogRef.afterClosed$.subscribe((result) => {
      if (this.isDev) {
        console.log(this.operation, 'dados', registro);
      }

      if (result.operation === 'new') {
        this.dataService.add(result.payload);
      }

      if (result.operation === 'edit') {
        result.payload.id = this.selectedId;
        this.dataService.update(result.payload);
      }
    });
  }

  onClickSearch() {}

  onCancelSearch() {}

  onFilter(param) {}

  onPaginateAPI() {}
}
