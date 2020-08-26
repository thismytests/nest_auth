import { Module } from '@nestjs/common';

// auth
import { AuthModule } from 'src/auth/auth.module';

// db
import { MysqlDbModule } from 'src/commons/dbs/mysql-db';
import { GivingStoriesOrderStatusController } from './giving-stories-order-status/giving-stories-order-status.controller';

@Module({
  imports: [
    //auth
    AuthModule,

    // db
    MysqlDbModule,

  ],
  controllers: [GivingStoriesOrderStatusController],
})
export class GivingStoriesModule {
}
