import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../../auth/jwt-auth.guard';

import { JwtService } from '@nestjs/jwt';

import {AuthService} from 'src/auth';
import { checkServerIdentity } from 'tls';
@UseGuards(JwtAuthGuard)
@Controller()
export class GivingStoriesOrderStatusController {
  constructor(private AuthService: AuthService) {
  }
  @Get()
  getOrderStatus(@Param() id: string): string {

    return id;
  }
}
