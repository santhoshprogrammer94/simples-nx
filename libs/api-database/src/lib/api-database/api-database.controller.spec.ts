import { Test, TestingModule } from '@nestjs/testing';
import { ApiDatabaseController } from './api-database.controller';

describe('ApiDatabase Controller', () => {
  let controller: ApiDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiDatabaseController],
    }).compile();

    controller = module.get<ApiDatabaseController>(ApiDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
