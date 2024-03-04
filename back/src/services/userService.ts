import interfaceCredential from "../interfaces/InterfaceCredential";
import interfaceUsers from "../interfaces/InterfaceUsers";
import interfaceUsersDto from "../interfaces/interfaceUsersDto";
import { createCredential } from "./credentialService";

const users:interfaceUsers[] = [
    {
        id:1,
        name:"Julian",
        email:"julian@gmail.com",
        birthdate:"9/10/1994",
        nDni:'38416351',
        credentialId:1
    }
];
let userId:number = 2
export const getAllUsersService = async () =>{
    const allUsers: interfaceUsers[] = users;
    return allUsers;
}

export const getUsersService = async(id: number): Promise <interfaceUsers | null> =>{
    const foundUser: interfaceUsers | undefined= users.find(
        user => user.id === id
    )
    if(!foundUser) throw Error ("Usuario no encontrado");
    return foundUser
}
export const  createUserService = async ( createUserDto: interfaceUsersDto): Promise <interfaceUsers> => {
    const newCredential:interfaceCredential = await createCredential ({
        username:createUserDto.username,
        password: createUserDto.password,
    });
    const newUser: interfaceUsers = {
        id: userId++,
        name:createUserDto.name,
        email:createUserDto.email,
        birthdate:createUserDto.birthdate,
        nDni:createUserDto.nDni,
        credentialId:newCredential.id
    };
    users.push(newUser);
    return newUser;
}