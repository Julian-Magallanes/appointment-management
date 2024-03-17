import { Router } from "express";
import { getAllUsers,getUsers,register,login } from "../controllers/usersControllers";
const usersRouter = Router()
const usersValidator = require ("../middlewares/usersValidator")

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id',getUsers )
usersRouter.post('/register',usersValidator, register)
usersRouter.post('/login',login)

export default usersRouter;