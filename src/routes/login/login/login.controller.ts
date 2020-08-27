import { ApiProperty } from '@nestjs/swagger';

import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

// db
import { UserService } from 'src/commons/dbs/mysql-db/users';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { checkServerIdentity } from 'tls';


export class UserDto {
  @ApiProperty()
  login: string;

  @ApiProperty()
  password: string;
}

@Controller('auth/login')
export class LoginController {
  constructor(private authService: AuthService,
              private  userService: UserService) {
  }

  @ApiModelProperty({ required: true, description: 'password' })
  password: string;

  // @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Body() body: UserDto) {
    const { login, password } = body;
    const dbUser = await this.userService.findByUserName(login);
    return this.authService.login(login);
  }
}
