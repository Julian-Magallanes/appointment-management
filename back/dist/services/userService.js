"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsersService = exports.createUserService = exports.getUsersService = exports.getAllUsersService = void 0;
const repositories_1 = require("../config/repositories");
const credentialService_1 = require("./credentialService");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield repositories_1.usersModel.find({
        relations: { appointments: true }
    });
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getUsersService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield repositories_1.usersModel.findOne({
        where: { id }, relations: { appointments: true }
    });
    if (!foundUser)
        throw Error("Usuario no encontrado");
    return foundUser;
});
exports.getUsersService = getUsersService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = repositories_1.usersModel.create(createUserDto);
    const newCredential = yield (0, credentialService_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    yield repositories_1.usersModel.save(newUser);
    newUser.credential = newCredential;
    repositories_1.usersModel.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
const loginUsersService = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield repositories_1.usersModel.findOneBy({
        credential: { id: credentialId }
    });
    return foundUser;
});
exports.loginUsersService = loginUsersService;
