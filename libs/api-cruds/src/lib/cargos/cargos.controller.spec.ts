import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibApiCoreModule } from '@simples-org/lib-api-core';

import { CargosController } from './cargos.controller';
import { CargoEntity } from './cargos.entity';
import { CargosService } from './cargos.service';

describe('CargosController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [LibApiCoreModule, TypeOrmModule.forFeature([CargoEntity])],
      controllers: [CargosController],
      providers: [CargosService],
    }).compile();
  });

  afterAll(async () => {
    app.close();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const cargosController = app.get<CargosController>(CargosController);
      expect(cargosController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
