import { Action } from '@ngrx/store';
import { EntityAction, DefaultPersistenceResultHandler } from '@ngrx/data';
export class AdditionalPersistenceResultHandler extends DefaultPersistenceResultHandler {
  handleSuccess(originalAction: EntityAction): (data: any) => Action {
    const actionHandler = super.handleSuccess(originalAction);
    return (data: any) => {
      const action = actionHandler.call(this, data);
      console.log('response', data);
      if (action && data) {
        // (action as any).payload.pageInfo.count = data.count;
        // (action as any).payload.pageInfo.page = data.page;
        // (action as any).payload.pageInfo.pageCount = data.pageCount;
        // (action as any).payload.pageInfo.total = data.total;
        (action as any).payload.data = data.data;
      }
      return action;
    };
  }
}
// import { Injectable } from '@angular/core';
// import { DefaultPersistenceResultHandler, EntityAction } from '@ngrx/data';
// import { Action } from '@ngrx/store';

// // @Injectable()
// export class AdditionalPersistenceResultHandler extends DefaultPersistenceResultHandler {
//   handleSuccess(originalAction: EntityAction): (data: any) => Action {
//     const actionHandler = super.handleSuccess(originalAction);
//     // return a factory to get a data handler to
//     // parse data from DataService and save to action.payload
//     return function (data: any) {

//       const action = actionHandler.call(this, data);

//       console.log(action);
//       if (action && data && data.foo) {
//         // save the data.foo to action.payload.foo
//         (action as any).payload.foo = data.foo;
//       } else {
//         console.log('não contem foo 2');
//       }

//       if (action && data && data.data) {
//         // save the data.foo to action.payload.foo
//         (action as any).payload.data = data.data;
//       } else {
//         console.log('não contem data 2');
//       }

//       (action as any).payload.page = data.page;
//       (action as any).payload.pageCount = data.pageCount;
//       (action as any).payload.total = data.total;
//       (action as any).payload.foo = 'goiabinha';

//       console.log(action);

//       return action;
//     };
//   }
// }

/*
export class AdditionalPersistenceResultHandler extends DefaultPersistenceResultHandler {
  handleSuccess(originalAction: EntityAction): (data: any) => Action {
    const actionHandler = super.handleSuccess(originalAction);
    // return a factory to get a data handler to
    // parse data from DataService and save to action.payload
    return function (data: any) {
      console.log('AdditionalPersistenceResultHandler', data);
      const action = actionHandler.call(this, data.data);
 
      // save the data.foo to action.payload.foo
      (action as any).payload.count = data.count;
      (action as any).payload.page = data.page;
      (action as any).payload.pageCount = data.pageCount;
      (action as any).payload.total = data.total;


      if (action && data && data.total) {
        // save the data.total to action.payload.total
        (action as any).payload.total = data.total;
        
        console.log('setando total', (action as any).payload.total );
      }
      (action as any).payload.foo = 'goiabinha';

      return action;
    };
  }
}
*/


/*

 // ----------------------------------------------------
  // DISPONIBILIDADE DOS TÉCNICOS
  // ----------------------------------------------------
  findAllWorkOrdersWithOfferSchedule(query: WorkOrderQueryDto): Promise<IResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const limit = (query.limit) ? query.limit : 10;
        const offset = (query.offset) ? query.offset : 0;
        const searchBy = (query.searchBy) ? query.searchBy : '';
        const search = (query.search) ? query.search : '';
        const orderBy = (query.orderBy) ? query.orderBy : 'id';
        const orderType = (query.orderType) ? query.orderType : 'DESC';
        const ordenation = {};
        const dtScheduleStart = moment.utc(query.date).format('YYYY-MM-DD') || moment().utc().format('YYYY-MM-DD');
        const dtScheduleEnd = moment.utc(query.date).format('YYYY-MM-DD') || moment().utc().format('YYYY-MM-DD');

      // ATENÇÃO : data colocada para trás para poder trazer sempre todos agendamentos
        // HH:mm:ss
        const now = moment
          .tz(new Date("1968-11-16T00:00:00"), process.env.TIMEZONE)
          .format("YYYY-MM-DD HH:00:00"); // CERTO
        // ATENÇÃO : data colocada para trás para poder trazer sempre todos agendamentos
        
        ordenation[orderBy] = orderType.toUpperCase();
        // workOrder = await this.offerScheduleRepository.createQueryBuilder('offerSchedule')
        const result =  this.workOrderRepository.createQueryBuilder('workOrder')
          .leftJoinAndSelect('workOrder.orderService', 'orderService')
          .leftJoinAndSelect('workOrder.kindService', 'kindService')
          .innerJoinAndSelect('workOrder.offerSchedule', 'offerSchedule')
          .where(`LOWER(orderService.clientName) LIKE LOWER(:search)`, { search: `%${search}%` })
          .skip((offset * limit))
          .take(limit)
          .orderBy(`workOrder.${orderBy}`);


        if (query.date) {
          result.andWhere(`to_char(offerSchedule.dtSchedule, 'YYYY-MM-DD') >= :dtScheduleStart AND to_char(offerSchedule.dtSchedule, 'YYYY-MM-DD') <= :dtScheduleEnd`, { dtScheduleStart, dtScheduleEnd });
        }

        if (process.env.ENVIRONMENT === "Development") {
          const sql = result.getSql();
          Logger.debug(`WorkOrderController findAllWorkOrdersWithOfferSchedule [BUSCANDO OSs não concluídas]`, '[INICIO]');
          console.log(sql);
          Logger.debug(`WorkOrderController findAllWorkOrdersWithOfferSchedule [BUSCANDO OSs não concluídas]`, '[FIM]');
        }

        const data = await result.getManyAndCount();

        resolve(new SuccessResponse({ data: data[0], size: data[1] }, HttpStatus.OK));
      } catch (err) {
        reject(new ErrorResponse({ message: err.message }, HttpStatus.INTERNAL_SERVER_ERROR));
      }
    });
  }

*/