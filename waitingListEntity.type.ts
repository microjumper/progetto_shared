import { Appointment } from "./appointment.type";
import { User } from "./user.type";

export interface WaitingListEntity {
  id?: string;
  appointment: Appointment
  addedOn?: string;
}
