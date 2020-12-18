import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LibApiCoreModule } from '@simples-org/lib-api-core';

import { TestesController } from './testes.controller';
import { TestesService } from './testes.service';
import { TesteEntity } from './teste.entity';

describe('TestesController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [LibApiCoreModule, TypeOrmModule.forFeature([TesteEntity])],
      controllers: [TestesController],
      providers: [TestesService],
    }).compile();
  });

  afterAll(async () => {
    app.close();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const testesController = app.get<TestesController>(TestesController);
      expect(testesController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
