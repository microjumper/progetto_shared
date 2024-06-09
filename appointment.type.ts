import { FileMetadata } from "./fileMetadata.type";

export interface Appointment {
  id?: string
  legalServiceId?: string;
  legalServiceTitle?: string;
  eventId?: string;
  eventDate?: string;
  accountId?: string;
  accountEmail?: string;
  fileMetadata?: FileMetadata[];
}
