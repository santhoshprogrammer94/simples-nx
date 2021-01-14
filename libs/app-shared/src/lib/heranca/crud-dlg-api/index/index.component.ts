import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
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
  protected activeRoute: ActivatedRoute;
  protected dialog: DialogService;

  operation = 'index';
  params: any;
  localParams = '';

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
    this.activeRoute = this.injectorObj.get(ActivatedRoute);

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

  // onRefresh(params?) {
  //   if (params) {
  //     this.params = params;
  //   } else {
  //   }
  //   this.hasData = false;
  //   this.refresh.emit(this.params);
  // }

  initParams() {
    this.params = JSON.parse(localStorage.getItem(this.localParams));

    if (!this.params) {
      this.params = {};
      this.params.page = 0;
      this.params.limit = 10;
    }

    this.activeRoute.queryParams.subscribe((params: any) => {
      this.params = { ...this.params, ...params };
    });

    localStorage.setItem(this.localParams, JSON.stringify(this.params));
  }

  setParams() {
    this.params = JSON.parse(localStorage.getItem(this.localParams));
    console.log(!this.params);

    if (!this.params) {
      this.params = {};
      this.params.page = 0;
      this.params.limit = 10;
    } else {
      if (this.paginator) {
        this.params.page = this.paginator.pageIndex;
        this.params.limit = this.paginator.pageSize;
      } else {
        console.log('sem paginator');
      }
    }

    localStorage.setItem(this.localParams, JSON.stringify(this.params));
    // this.setPaginationQueryParameters();
  }

  onPaginate() {
    // this.setParams();
    this.paginator.pageIndex = Number(this.params.page);
    this.paginator.pageSize = Number(this.params.limit);
  }

  onPaginateAPI() {
    this.setParams();
    console.log('onPaginateAPI :', this.params)
    if (this.paginator) {
      this.paginator.pageIndex = this.params.page;
      this.paginator.pageSize = this.params.limit;
    } else {
    }
    // if (!this.isInitializating) {
    //   this.onRefresh();
    // }
  }
}
