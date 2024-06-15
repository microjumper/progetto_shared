import { FileMetadata } from "./fileMetadata.type";
import { User } from "./user.type";

export interface Appointment {
  id?: string
  legalServiceId?: string;
  legalServiceTitle?: string;
  eventId?: string;
  eventDate?: string;
  fileMetadata?: FileMetadata[];
  user?: User;
}
