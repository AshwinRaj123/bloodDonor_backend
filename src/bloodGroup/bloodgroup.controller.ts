
import { Controller,Res,Body, Post, HttpStatus,Get, Delete, Param, Req, HttpException} from '@nestjs/common';
import { BloodGroup } from 'src/typeorm/entities/blood_group';
import { BloodServiceService } from './bloodservice.service';

@Controller('groups')
export class BloodGroupController {
    constructor(private groupServices: BloodServiceService ){}

    @Post()
    async createBloodGroup(@Res() res,@Body()  group: BloodGroup){
        try{
            const newGroup = await this.groupServices.createBloodGroup(group);

            return res.status(HttpStatus.CREATED).json({
                newGroup
            })
        }catch(err){
            if(err.code == 'ER_DUP_ENTRY'){
               throw new HttpException('Duplicate Blood Group',HttpStatus.FORBIDDEN)
            }
            else{
                throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
            }
            
        }
    }
    
  @Get()
    async getGroup(){
        return this.groupServices.getAllGroup();
    }

  @Delete(':id')
  async removeGroup(@Res() res, @Param() param:BloodGroup){
        await this.groupServices.removeGroupID(param);

        return res.status(HttpStatus.CREATED).json({
            message:"Deleted Successfully"
        })
  }

}
