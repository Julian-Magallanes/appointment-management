import { Request, Response } from "express"
import interfaceUsers from "../interfaces/InterfaceUsers";
import { createUserService, getAllUsersService, getUsersService } from "../services/userService";
export const getAllUsers = async (req: Request, res:Response) => {
    const users: interfaceUsers[] = await getAllUsersService();
    res.status(200).json (users);
};
export const getUsers = async (req: Request, res:Response) => {
    const {id} = req.params;
    try{
        const foundUser = await getUsersService(Number(id));
        res.status(200).json(foundUser);
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};
export const register = async (req: Request, res:Response) => {
    try{
        const {name, email, birthdate, nDni, username, password} = req.body;
        const newUser: interfaceUsers = await createUserService({
            name, email, birthdate, nDni, username, password
        })
        res.status(200).json (newUser)
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};

export const login = async (req: Request, res:Response) => {
    res.status(200).json ({message: "POST /users/login"})
};