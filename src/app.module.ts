import { BloodServiceService } from './bloodGroup/bloodservice.service';
import { BloodGroupController } from './bloodGroup/bloodgroup.controller';
import { BloodGroupModule } from './bloodGroup/bloodgroup.module';
import { DonorController } from './donor/donor.controller';
import { DonorModule } from './donor/donor.module';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donor } from './typeorm/entities/donor';
import { BloodGroup } from './typeorm/entities/blood_group';
@Module({
  imports: [
    BloodGroupModule,
    DonorModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ashwin@$0322',
      database: 'blood_donor',
      entities: [Donor, BloodGroup],
      synchronize: true, 
    }),
    DonorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
