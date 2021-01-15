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
  isInitializating = true;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(injector: Injector, @Inject('environment') env?: any) {
    super(injector, env);

    this.dialog = this.injectorObj.get(DialogService);
    this.activeRoute = this.injectorObj.get(ActivatedRoute);


    this.activeRoute.queryParams.subscribe((params: any) => {
      console.log('ROUTER', '=> => => recriando parametros', this.params);

      this.params = { ...this.params, ...params };

      if (!this.params) {
        this.params = JSON.parse(localStorage.getItem(this.localParams));
      }
    });



    if (!this.isDev) {
    }
  }

  ngOnInit(): void {
    // this.params = JSON.parse(localStorage.getItem(this.localParams));

    // if (this.params) {
    //   localStorage.setItem(this.localParams, JSON.stringify(this.params));
    //   console.log('parametros encontrados', this.localParams, this.params);
    // }
  }

  ngAfterViewInit() {
    // this.appStoreFacade.setTitle(this.titulo);
    if (this.params.page) {
      this.paginator.pageIndex = Number(this.params.offset);
    }

    if (this.params.limit) {
      this.paginator.pageSize = Number(this.params.limit);
    }
    this.ngDoCheck();
  }

  onRefresh(): void {
    if (this.isDev) {
      console.log('onRefresh', 'IndexDlgApiComponent', this.params);
    }
  }

  setParams() {

    if (!this.params) {
      this.params = {};
      this.params.offset = 0;
      this.params.limit = 10;
      if (this.isDev) {
        console.log(
          'setParams initing',
          '=> => => recriando parametros',
          this.params
        );
      }
    } else {
      if (this.paginator && !this.isInitializating) {
        this.params.offset = this.paginator.pageIndex;
        this.params.limit = this.paginator.pageSize;
      } else {
        console.log('setParams', 'sem paginator');
      }
    }

    this.setPaginationQueryParameters();
    localStorage.setItem(this.localParams, JSON.stringify(this.params));
  }

  onPaginateAPI() {
    if (this.isDev) {
      console.log('onPaginateAPI', 'setando parametros', this.params, this.paginator.pageIndex);
    }
    this.setParams();

    this.onRefresh();

    if (this.paginator) {
      if (this.isDev) {
        console.log(
          'onPaginateAPI',
          'setando posição do paginator',
          this.params
        );
      }
      console.log('irá mudar');
      this.paginator.pageIndex = this.params.offset;
      this.paginator.pageSize = this.params.limit;
    } else {
      console.log('onPaginateAPI', 'sem paginator');
      // console.log('onPaginateAPI :', this.params);
    }
    this.setPaginationQueryParameters();
  }

  setPaginationQueryParameters() {
    this.router.navigate([], {
      replaceUrl: true,
      relativeTo: this.activeRoute,
      queryParams: this.params,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }
}
