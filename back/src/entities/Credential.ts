import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "credential"})
export default class Credential {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    username:string;
    @Column()
    password: string;

}