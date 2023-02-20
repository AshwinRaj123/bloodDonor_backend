
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class  Donor{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    blood_group: string

    @Column()
    phoneNo:string

    @Column()
    email:string

    @Column()
    address:string

    @Column()
    created_at: Date 

    @Column()
    last_donated:Date

    @Column()
    count:number
    
    @Column({default:true})
    isActive: boolean
    
}

