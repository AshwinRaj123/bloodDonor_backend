
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloodGroup } from 'src/typeorm/entities/blood_group';
import { BloodGroupController } from './bloodgroup.controller';
import { BloodServiceService } from './bloodservice.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([BloodGroup])
    ],
    controllers: [BloodGroupController],
    providers: [BloodServiceService],
})
export class BloodGroupModule {}
