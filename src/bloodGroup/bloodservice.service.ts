
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BloodGroup } from 'src/typeorm/entities/blood_group';
import { Repository } from 'typeorm';

@Injectable()
export class BloodServiceService {
    constructor(@InjectRepository(BloodGroup) private bloodGroupRepo : Repository<BloodGroup>){}

    async createBloodGroup(group:BloodGroup):Promise<BloodGroup>{
        return this.bloodGroupRepo.save(group);
    }

    async getAllGroup(): Promise<BloodGroup[]>{
        return this.bloodGroupRepo.find();
    }

    async removeGroupID(id:BloodGroup):Promise<BloodGroup>{
        return this.bloodGroupRepo.remove(id);
    } 
}
