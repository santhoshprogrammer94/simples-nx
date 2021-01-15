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
      if (params) {
        this.params = {};
        this.params = { ...this.params, ...params };
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
    if (Object.keys(this.params).length == 0) {
      this.params = {};
      this.params = JSON.parse(localStorage.getItem(this.localParams));
      console.log('Recriando via LocalStorage', '[', this.localParams, ']',  this.params);
      
    } else {
      console.log('params encontrados', this.params);
    }

    if (!this.params) {
      console.log('continua null');
      this.params = {};
      this.params.offset = 0;
      this.params.limit = 10;      
    }    
    // this.setPaginationQueryParameters();


  }

  ngAfterViewInit(): void {
    // this.appStoreFacade.setTitle(this.titulo);
    if (this.params.page) {
      this.paginator.pageIndex = Number(this.params.offset);
    }

    if (this.params.limit) {
      this.paginator.pageSize = Number(this.params.limit);
    }
    // this.ngDoCheck();
  }

  onRefresh(): void {
    // if (this.isDev) {
    //   console.log('onRefresh', 'IndexDlgApiComponent', this.params);
    // }
  }

  setParams(): void {
    if (this.params) {
      if (this.paginator && !this.isInitializating) {
        this.params = { ...this.params };

        this.params.offset = 2;
        // console.log('Gravando parametros ');

        this.params.offset = this.paginator.pageIndex;
        this.params.limit = this.paginator.pageSize;
      } else {
        console.log('!!!! setParams', 'sem paginator');
      }
    }

    localStorage.setItem(this.localParams, JSON.stringify(this.params));
    this.setPaginationQueryParameters();
  }

  onPaginateAPI(): void {
    this.setParams();

    this.onRefresh();

    if (this.paginator) {
      this.paginator.pageIndex = this.params.offset;
      this.paginator.pageSize = this.params.limit;
    } else {
      console.log('onPaginateAPI', 'sem paginator');
    }
    this.setPaginationQueryParameters();
  }

  setPaginationQueryParameters(): void {
    console.log('***** setando', this.params);
    this.router.navigate([], {
      replaceUrl: true,
      relativeTo: this.activeRoute,
      queryParams: this.params,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }
}
