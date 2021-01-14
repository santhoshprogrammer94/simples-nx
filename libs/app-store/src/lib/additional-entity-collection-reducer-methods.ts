import { EntityAction, EntityCollection, EntityDefinition, EntityCollectionReducerMethods } from '@ngrx/data';

export class AdditionalEntityCollectionReducerMethods<T> extends EntityCollectionReducerMethods<T> {
  constructor(public entityName: string, public definition: EntityDefinition<T>) {
    super(entityName, definition);
  }
   protected queryManySuccess(
    collection: EntityCollection<T>,
    action: EntityAction<T[]>
   ): EntityCollection<T> {
     console.log('queryManySuccess', action);
    const ec = super.queryManySuccess(collection, action);
    if ((action.payload as any).total) {
      (ec as any).total = (action.payload as any).total;
    }
    return ec;
  }
}

// import { Injectable } from '@angular/core';
// import {
//   EntityCollectionReducerMethods,
//   EntityCollection,
//   EntityAction,
//   EntityDefinition,
// } from '@ngrx/data';

// // @Injectable()
// export class AdditionalEntityCollectionReducerMethods<T> extends EntityCollectionReducerMethods<T> {
//   constructor(public entityName: string, public definition: EntityDefinition<T>) {
//     super(entityName, definition);
//   }
//    protected queryManySuccess(
//     collection: EntityCollection<T>,
//     action: EntityAction<T[]>
//   ): EntityCollection<T> {
//     const ec = super.queryManySuccess(collection, action);
//     if ((action.payload as any).foo) {
//       // save the foo property from action.payload to entityCollection instance
//       (ec as any).foo = (action.payload as any).foo;
//     }
//     return ec;
//   }
// }