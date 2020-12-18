import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { UsuariosEntity } from './usuarios.entity';

describe('UsuariosController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([UsuariosEntity])],
      controllers: [UsuariosController],
      providers: [UsuariosService],
    }).compile();
  });

  afterAll(async () => {
    app.close();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const usuariosController = app.get<UsuariosController>(UsuariosController);
      expect(usuariosController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
