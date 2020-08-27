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

  @Column({
    nullable: true,
    type: 'datetime',
    // default: 'CURRENT_TIMESTAMP()'
  })
  last_visit: string;

  @Column({})
  username: string;
}