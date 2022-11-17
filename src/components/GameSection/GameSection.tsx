import { FC, useContext, useEffect, useState } from "react";
import { ContractContext } from "../../context/ContractContext";
import { CountdownTimer } from "./CountdownTimer";

export const GameSection: FC = () => {

  const [timestamp, setTimestamp] = useState<number>(0)
  const { contractProvider } = useContext(ContractContext);

  useEffect(() => {

    async function getTimestamp() {
      const interval = await contractProvider.interval();
      const last = await contractProvider.lastTimeStamp();

      let time = parseInt(last._hex) + parseInt(interval._hex);

      setTimestamp(time);
    }

    getTimestamp();

  }, []);


  return (
    <>
      <section className="w-full min-h-[100vh]">

        <CountdownTimer timestamp={timestamp} />
      </section>
    </>
  )
}

