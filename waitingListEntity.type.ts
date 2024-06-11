import { User } from "./user.type";

export interface WaitingListEntity {
  id?: string;
  legalServiceId: string;
  user: User
  joinedAt?: string;
}
