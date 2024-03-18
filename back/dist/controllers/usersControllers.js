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
exports.login = exports.register = exports.getUsers = exports.getAllUsers = void 0;
const userService_1 = require("../services/userService");
const credentialService_1 = require("../services/credentialService");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAllUsers = getAllUsers;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const foundUser = yield (0, userService_1.getUsersService)(Number(id));
        res.status(200).json(foundUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getUsers = getUsers;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, nDni, username, password } = req.body;
        const newUser = yield (0, userService_1.createUserService)({
            name, email, phone, nDni, username, password
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const credential = yield (0, credentialService_1.validateCredential)({
            username, password
        });
        const user = yield (0, userService_1.loginUsersService)(credential.id);
        res.status(200).json({ login: true, user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.login = login;
