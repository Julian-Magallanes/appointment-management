import { usersModel } from "../config/repositories";
import Credential from "../entities/Credential";
import User from "../entities/User";
import interfaceUsersDto from "../interfaces/interfaceUsersDto";
import { createCredential } from "./credentialService";

export const getAllUsersService = async () =>{
    const allUsers: User[] = await usersModel.find({
        relations:{appointments:true}
    });
    return allUsers;
}

export const getUsersService = async(id: number): Promise <User> =>{
    const foundUser: User | null = await usersModel.findOne({
        where: {id}, relations: {appointments:true}
    })
    if(!foundUser) throw Error ("Usuario no encontrado");
    return foundUser
}
export const  createUserService = async ( createUserDto: interfaceUsersDto): Promise <User> => {
    const newUser: User = usersModel.create(createUserDto)
    const newCredential:Credential = await createCredential ({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    await usersModel.save(newUser)
    newUser.credential = newCredential
    usersModel.save(newUser)

    return newUser;
}
export const loginUsersService = async( credentialId: number): Promise < User | null> => {
    const foundUser: User | null = await usersModel.findOneBy({
        credential: {id: credentialId}
    })
    return foundUser
}
    
