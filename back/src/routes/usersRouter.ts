import { Router } from "express";
import { getAllUsers,getUsers,register,login } from "../controllers/usersControllers";
const usersRouter = Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id',getUsers )
usersRouter.post('/register',register)
usersRouter.post('/login',login)

export default usersRouter;