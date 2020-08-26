import { Test, TestingModule } from '@nestjs/testing';
import { GivingStoriesOrderStatusController } from './giving-stories-order-status.controller';

describe('GivingStoriesOrderStatusController', () => {
  let controller: GivingStoriesOrderStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GivingStoriesOrderStatusController],
    }).compile();

    controller = module.get<GivingStoriesOrderStatusController>(GivingStoriesOrderStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
