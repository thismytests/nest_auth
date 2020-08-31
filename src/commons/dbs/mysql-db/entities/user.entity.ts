import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// swagger
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  synchronize: true,
})
export class Users {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({})
  username: string;
}
