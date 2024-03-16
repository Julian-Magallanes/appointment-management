import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({name: "users"})
export default class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column({unique:true})
    email:string;
    @Column({unique:true})
    phone:string;
    @Column({unique:true})
    nDni:string;

    @OneToOne(() =>Credential)
    @JoinColumn()
    credential:Credential

    @OneToMany(()=>Appointment, (appointment)=>appointment.user) 
    appointments:Appointment[]

    
}