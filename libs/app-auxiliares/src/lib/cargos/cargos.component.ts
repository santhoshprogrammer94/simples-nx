import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CargosCollectionService } from './cargos.service';

@Component({
  selector: 'simples-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss']
})
export class CargosComponent implements OnInit {
  data$: Observable<any[]>;

  constructor(private dataService: CargosCollectionService) {
    this.data$ = this.dataService.filteredEntities$;
  }


  ngOnInit(): void {
    this.dataService.load();
  }

  onSearch(text: string): void {
    this.dataService.setFilter(text);
  }


  onSubmit(issue: any): void {
    this.dataService.add(issue);
  }

  reload() {
    console.log('Reload from cargos.component.ts');
  }

  onActivate(elementRef) {

    if (!elementRef) {
      console.log('Nothing Here');
      return;
    } else {
      // console.log('elementRef', elementRef);

      if (elementRef.refresh) {

      }
      if (elementRef.dblClick) {

      }

    }
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
