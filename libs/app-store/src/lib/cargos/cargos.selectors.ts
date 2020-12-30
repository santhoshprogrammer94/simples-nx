import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import { Cargo } from '@simples/shared/interfaces';

import * as fromRouter from '../router/router.selectors';

export const {
  selectEntities,
  selectEntityMap,
} = new EntitySelectorsFactory().create<Cargo>('cargos');

export interface CargosStats {
  total: number;
  resolved: number;
}

// export const selectStats = createSelector(
//   selectEntities,
//   (issues): CargosStats => {
//     const resolved = issues.filter((issue) => issue.resolved);
//     return {
//       total: issues.length,
//       resolved: resolved.length,
//     };
//   }
// );

export const selectActiveId = fromRouter.selectRouteParam('id');

export const selectActive = createSelector(
  selectEntityMap,
  selectActiveId,
  (entities, id) => entities[id]
);
