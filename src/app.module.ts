import { Module } from '@nestjs/common';

// config
import { ConfigModule } from 'src/commons/config';

import { AppLogger } from 'src/commons/logger';

// routes
import { GivingStoriesModule } from './routes/giving-stories';
import { LoginModule } from './routes/login';


@Module({
  imports: [
    //config
    ConfigModule,

    // routes
    GivingStoriesModule,
    LoginModule,
  ],
  providers: [AppLogger],
})
export class AppModule {
  constructor(public appLogger: AppLogger) {
    this.appLogger.log(process.env);
  }
}
