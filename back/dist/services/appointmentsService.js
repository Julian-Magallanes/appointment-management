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
exports.putAppointmentService = exports.createAppointmentService = exports.getAppointmentService = exports.getAllAppointmentsService = void 0;
const repositories_1 = require("../config/repositories");
let appointmentId = 2;
const getAllAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield repositories_1.appointmentsModel.find();
    return allAppointments;
});
exports.getAllAppointmentsService = getAllAppointmentsService;
const getAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield repositories_1.appointmentsModel.findOneBy({
        id: id
    });
    if (!foundAppointment)
        throw Error("Turno no encontrado");
    return foundAppointment;
});
exports.getAppointmentService = getAppointmentService;
const createAppointmentService = (createAppointmentDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = repositories_1.appointmentsModel.create(createAppointmentDto);
    yield repositories_1.appointmentsModel.save(newAppointment);
    const user = yield repositories_1.usersModel.findOneBy({
        id: createAppointmentDto.userId
    });
    if (!user)
        throw Error('Usuario no encontrado');
    newAppointment.user = user;
    yield repositories_1.appointmentsModel.save(newAppointment);
    return newAppointment;
});
exports.createAppointmentService = createAppointmentService;
const putAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield repositories_1.appointmentsModel.findOneBy({
        id: id
    });
    if (!appointments)
        throw Error("Turno no encontrado");
    appointments.status = "canceled";
    yield repositories_1.appointmentsModel.save(appointments);
});
exports.putAppointmentService = putAppointmentService;
