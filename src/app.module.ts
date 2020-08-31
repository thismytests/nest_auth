import { Module } from '@nestjs/common';

// config
import { ConfigModule } from 'src/commons/config';

import { AppLogger } from 'src/commons/logger';

// routes
import { LoginModule } from './routes/login';


@Module({
  imports: [
    //config
    ConfigModule,

    // routes
    LoginModule,
  ],
  providers: [AppLogger],
})
export class AppModule {
  constructor(public appLogger: AppLogger) {
    this.appLogger.log(process.env);
  }
}
