import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import * as fromCargos from '@simples/app-store';
import { Cargo } from '@simples/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CargosCollectionService extends EntityCollectionServiceBase<
  Cargo
> {
  active$: Observable<Cargo>;

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Cargos', elementsFactory);
    this.active$ = this.store.select(fromCargos.selectActive);
  }

  // resolve(data: Cargo): Observable<Cargo> {
  //   return this.update({ ...data, resolved: true });
  // }
}
