import { Appointment } from "./appointment.type";
import { User } from "./user.type";

export interface WaitingListEntity {
  id?: string;
  appointment: Appointment
  user: User
  addedOn?: string;
}
