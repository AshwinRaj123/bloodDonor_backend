import { Body, Controller, Get,HttpStatus,Param,Post, Query, Req, Res } from '@nestjs/common';

import { Donor } from 'src/typeorm/entities/donor';
import { DonorService } from './donor.service';

@Controller('donor')
export class DonorController {
    constructor(private donorService: DonorService){}

    @Post()
    async createDonor(@Res() response, @Body() donor: Donor){
        const newDonor = await this.donorService.createDonor(donor)

        return response.status(HttpStatus.CREATED).json({
            newDonor
        })

    }

    @Get()
    async getAllDonorDetails(){
       return this.donorService.getAll();
    }

    @Get(':id')
    async getDonorByID(@Param() param:Donor){
        return this.donorService.getDonorByID(param)
    }

    @Get('/group')
    async getDonorByGroup(@Query() query:{name:string}){
        const donorByGroup = await this.donorService.getDonorByGroup('donor');
        if(query.name){
            donorByGroup.where('donor.blood_group LIKE :query', {query:query.name})
            
        }
        return await donorByGroup.getMany();
    }
    
}
