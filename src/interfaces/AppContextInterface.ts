import { Dispatch, SetStateAction } from "react";

export interface AppContextInterface {
  showTicketModal: boolean;
  setShowTicketModal: Dispatch<SetStateAction<boolean>>
}