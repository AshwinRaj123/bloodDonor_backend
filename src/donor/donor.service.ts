
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Donor } from 'src/typeorm/entities/donor';
import { Repository } from 'typeorm';
import { BloodGroup } from 'src/typeorm/entities/blood_group';

@Injectable()
export class DonorService {
    constructor(
        @InjectRepository(Donor) private donorRepository: Repository<Donor>,
        @InjectRepository(BloodGroup) private groupRepository: Repository<BloodGroup>){}

    async getAll(): Promise<Donor[]>{
        return this.donorRepository.find();
    }

    async createDonor(donor:Donor): Promise<Donor>{
        //console.log(donor.blood_group)
        const isGroupAvailable = await this.groupRepository.findOne({
            where:{
                short_name:donor.blood_group
            }
        })

        if(isGroupAvailable){
            return this.donorRepository.save(donor)
        }else{
            throw new HttpException('Blood Group selected is not available.',HttpStatus.FORBIDDEN)
        }
       
    }

    async getDonorByGroup(groupname:string){
        return this.donorRepository.createQueryBuilder(groupname)
    }

    async getDonorByID(id: Donor):Promise<Donor>{
        return this.donorRepository.findOneBy(id);
    }
}
