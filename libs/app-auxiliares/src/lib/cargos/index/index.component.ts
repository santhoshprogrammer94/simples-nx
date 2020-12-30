import { Component, OnInit } from '@angular/core';
import { Cargo } from '@simples/shared/interfaces';
import { Observable } from 'rxjs';

import { CargosCollectionService } from '../cargos.service';

@Component({
  selector: 'simples-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  data$: Observable<Cargo[]>;

  constructor(private dataService: CargosCollectionService) {
    this.data$ = this.dataService.filteredEntities$;
  }

  ngOnInit() {}

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
