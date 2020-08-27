import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


import { AuthService } from 'src/auth';
import { AuthTokenLogin } from 'src/auth/auth.decorator';

@UseGuards(JwtAuthGuard)
@Controller()
export class GivingStoriesOrderStatusController {
  constructor(private authService: AuthService) {
  }

  @Get('giving-stories/order/status/:id')
  getOrderStatus(@Param() id: string, @AuthTokenLogin() loginToken: any): string {
    const result = this.authService.parseToken(loginToken);

    result.then((data) => {
      console.log(' :', loginToken);
    });
    return id;
  }
}
