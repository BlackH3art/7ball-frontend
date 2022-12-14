import { FC, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ContractContext } from "../../context/ContractContext";
import { CountdownTimer } from "./CountdownTimer";
import { DrawingMachine } from "./DrawingMachine";
import { PrizePool } from "./PrizePool";
import { SelectedBalls } from "./SelectedBalls";

interface Props {
  text: string;
}

const TimerTitle: FC<Props> = ({ text }) => (
  <h2 className="text-white text-5xl font-bold text-center pb-5">
    {text}
  </h2>
);

export const GameSection: FC = () => {

  const [timestamp, setTimestamp] = useState<number>(0);
  const { contractProvider, gameIsOn } = useContext(ContractContext);

  async function getTimestamp() {
    try {
      const interval = await contractProvider.interval();
      const last = await contractProvider.lastTimeStamp();
  
      let time = parseInt(last._hex) + parseInt(interval._hex);
  
      setTimestamp(time);
    } catch (error) {
      toast.error("Fetching timestamp went wrong", { theme: "colored" });
    }
  }

  useEffect(() => {
    getTimestamp();
  }, []);

  contractProvider.on("UpdatedInterval", () => {
    getTimestamp();
  });

  return (
    <>
      <section className="w-full min-h-[100vh]">
        <div className="w-3/5 flex flex-col items-center mx-auto">

          <div className="">
            {gameIsOn ? (
              <TimerTitle text="Numbers will be drawn in:"/>
            ) : (
              <TimerTitle text="Next lottery will start in:"/>
            )}
            <CountdownTimer timestamp={timestamp} />
          </div>

          <SelectedBalls />

          <div className="w-full flex pt-24">
            <DrawingMachine />
            <PrizePool />
          </div>

        </div>
      </section>
    </>
  )
}

