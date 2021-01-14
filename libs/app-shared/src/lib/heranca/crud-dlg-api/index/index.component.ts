import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  params: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  // @ViewChild(ToolbarCrudSimplesComponent)
  // tbCrud: ToolbarCrudSimplesComponent;
  // @ViewChild(ToolbarInteracoesComponent)
  // tbInteracao: ToolbarInteracoesComponent;

  // dataSource = new MatTableDataSource([]);


  constructor(injector: Injector, @Inject('environment') env?: any) {
    super(injector, env);

    this.dialog = this.injectorObj.get(DialogService);

    if (!this.isDev) {
    }
  }

  
  // ngOnInit(): void {
  //   this.
  // }

  // onPagamentoForm(data): void {
  //   if (this.isDev) {
  //   }
  // }

  // onCallNewForm(data): void {
  //   if (this.isDev) {
  //   }
  // }

  // onCallDate(data): void {}

  onPaginateAPI() {
    // this.setParams();
    if (this.paginator) {
      this.paginator.pageIndex = this.params.page;
      this.paginator.pageSize = this.params.limit;
    } else {
      
    }
  }

}
