import interfaceCredential from "../interfaces/InterfaceCredential";
import interfaceCredentialDto from "../interfaces/InterfaceCredentialDto";

const credentials:interfaceCredential[] = [];
let credentialId: number = 1
export const createCredential = async (createCredentialDto: interfaceCredentialDto):Promise<interfaceCredential> => {
    const newCredential: interfaceCredential = {
        id:credentialId++,
        username:createCredentialDto.username,
        password:createCredentialDto.password

    };
    credentials.push(newCredential);
    return newCredential
}
export const validateCredential = async (validateCredentialDto: interfaceCredentialDto):Promise<interfaceCredential> => {
    const {username, password} = validateCredentialDto;
    const foundCredential = credentials.find(
        credential => credential.username === username
    );
    if(!foundCredential) throw Error ("Usuario no encontrado")
    if(password !== foundCredential?.password) throw Error ("Contrasela incorrrecta")
    return foundCredential
}