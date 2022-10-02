import { FC } from "react";
import { Ticket } from "./Ticket";

export const TicketSection: FC = () => {

  return (
    <section className="w-full flex justify-center">
      <Ticket />
    </section>
  )
}