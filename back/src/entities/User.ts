import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({name: "users"})
export default class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    birthdate:string;
    @Column()
    nDni:string;

    @OneToOne(() =>Credential)
    @JoinColumn()
    credential:Credential

    @OneToMany(()=>Appointment, (appointment)=>appointment.user) 
    appointments:Appointment[]

    
}