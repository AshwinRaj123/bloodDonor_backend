import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BloodGroup{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    group_name:string

    @Column({unique:true})
    short_name:string

    @Column()
    created_at: Date
}