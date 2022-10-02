import { FC } from "react";
import NumbersForm from "./NumbersForm";

export const Ticket: FC = () => {

  return (
    <div className="ticket w-[1000px] flex flex-col items-center bg-[#ffffff15] backdrop-blur-xl">
      <NumbersForm />
    </div>
  )
}