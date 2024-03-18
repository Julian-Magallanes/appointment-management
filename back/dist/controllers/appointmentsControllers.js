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
exports.cancel = exports.schedule = exports.getAppointments = exports.getAllAppointments = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentsService_1.getAllAppointmentsService)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getAllAppointments = getAllAppointments;
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const foundAppointment = yield (0, appointmentsService_1.getAppointmentService)(Number(id));
        res.status(200).json(foundAppointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAppointments = getAppointments;
const schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId, description, place } = req.body;
    try {
        const newAppointment = yield (0, appointmentsService_1.createAppointmentService)({
            date, time, userId, description, place
        });
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.schedule = schedule;
const cancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, appointmentsService_1.putAppointmentService)(Number(id));
        res.status(200).json({ message: "Turno cancelado" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.cancel = cancel;
