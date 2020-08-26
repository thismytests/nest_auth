import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { LoginController } from './login/login.controller';

// db
import { UserModule } from 'src/commons/dbs/mysql-db/users';

@Module({
  imports: [
    // db
    UserModule,
    AuthModule,
  ],
  controllers: [LoginController],
})
export class LoginModule {
}
