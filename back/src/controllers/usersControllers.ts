import { Request, Response } from "express"
import { createUserService, getAllUsersService, getUsersService, loginUsersService } from "../services/userService";
import User from "../entities/User";
import { validateCredential } from "../services/credentialService";

// GET /users obtiene todos los usuarios en lista
export const getAllUsers = async (req: Request, res:Response) => {
    try{const users: User[] = await getAllUsersService();
        res.status(200).json (users);
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};
// GET /users/::id obtiene un usuario especifico
export const getUsers = async (req: Request, res:Response) => {
    const {id} = req.params;
    try{
        const foundUser : User = await getUsersService(Number(id));
        res.status(200).json(foundUser);
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};
// POST /users/register registra un nuevo usuario
export const register = async (req: Request, res:Response) => {
    try{
        const {name, email, birthdate, nDni, username, password} = req.body;
        const newUser: User = await createUserService({
            name, email, birthdate, nDni, username, password
        })
        res.status(201).json (newUser)
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};
// POST /users/login login de usuario ya registrado

export const login = async (req: Request, res:Response) => {
    try{const {username, password} = req.body;
    const credential = await validateCredential({
        username, password
    })
    const user = await loginUsersService (credential.id)
    res.status(200).json({login:true, user})
} catch (error:any){
    res.status(400).json({message: error.message})
}
};

