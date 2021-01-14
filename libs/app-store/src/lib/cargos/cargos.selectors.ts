import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import { Cargo } from '@simples/shared/interfaces';

import * as fromRouter from '../router/router.selectors';

export const {
  selectEntities,
  selectEntityMap,
} = new EntitySelectorsFactory().create<Cargo>('cargos');

export interface CargosStats {
  error: any;
  total: number;
  resolved: number;
  data: [],
  count: number;
  page: number;
}



// export const selectPackage = createSelector(
//   selectEntities,
//   (data): CargosStats => {
//     const resolved = data.filter((data) => data.resolved);
//     return {
//       total: data.length,
//       resolved: resolved.length,
//     };
//   }
// );

export const selectActiveId = fromRouter.selectRouteParam('id');
export const selectTotal = fromRouter.selectRouteParam('total');

export const selectActive = createSelector(
  selectEntityMap,
  selectActiveId,
  (entities, id) => entities[id]
);
// export const getCurrentPageDataState = createSelector(getDataState, state => state.keys.map(key => state.data[key]);
