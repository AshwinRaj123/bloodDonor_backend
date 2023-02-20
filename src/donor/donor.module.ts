import { DonorService } from './donor.service';


import { Module } from '@nestjs/common';
import { DonorController } from './donor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donor } from 'src/typeorm/entities/donor';
import { BloodGroup } from 'src/typeorm/entities/blood_group';

@Module({
  imports: [
    TypeOrmModule.forFeature([Donor,BloodGroup])
  ],
  controllers: [DonorController],
  providers: [DonorService],
})
export class DonorModule {}
