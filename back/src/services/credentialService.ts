import { credentialModel } from "../config/repositories";
import Credential from "../entities/Credential";
import interfaceCredentialDto from "../interfaces/InterfaceCredentialDto";

// Esta funcion es para cuando el usuario se registra
export const createCredential = async (createCredentialDto: interfaceCredentialDto):Promise<Credential> => {
    const newCredential: Credential = credentialModel.create(createCredentialDto)
    await credentialModel.save(newCredential);

    return newCredential
}

// Esta funcion es para cuando el usuario haga un login
export const validateCredential = async (validateCredentialDto: interfaceCredentialDto):Promise<Credential> => {
    const {username, password} = validateCredentialDto;
    const foundCredential: Credential | null= await credentialModel.findOneBy({username});
    if(!foundCredential) throw Error ('Usuario incorrecto')
    if(password !== foundCredential.password) throw Error ('Password incorrecto')
    
    return foundCredential
}