"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsModel = exports.usersModel = exports.credentialModel = void 0;
const Appointment_1 = __importDefault(require("../entities/Appointment"));
const Credential_1 = __importDefault(require("../entities/Credential"));
const User_1 = __importDefault(require("../entities/User"));
const data_source_1 = require("./data-source");
exports.credentialModel = data_source_1.AppDataSource.getRepository(Credential_1.default);
exports.usersModel = data_source_1.AppDataSource.getRepository(User_1.default);
exports.appointmentsModel = data_source_1.AppDataSource.getRepository(Appointment_1.default);
