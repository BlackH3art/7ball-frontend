import { FC, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ContractContext } from "../../context/ContractContext";
import { toast } from "react-toastify";

export const SelectedBalls: FC = () => {

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const { contractProvider } = useContext(ContractContext);

  async function getSelectedNumbers() {
    try {

      if(await contractProvider.gameIsOn()) {
        return
      } else {
        setSelectedNumbers([
          await contractProvider.drawnNumbersArray(0),
          await contractProvider.drawnNumbersArray(1),
          await contractProvider.drawnNumbersArray(2),
          await contractProvider.drawnNumbersArray(3),
          await contractProvider.drawnNumbersArray(4),
          await contractProvider.drawnNumbersArray(5),
          await contractProvider.drawnNumbersArray(6),
        ]);
      }
    } catch (error) {
      toast.error("Fetching drawn numbers went wrong", { theme: "colored" })
    }
  }

  useEffect(() => {
    getSelectedNumbers();
  }, []);

  contractProvider.on("UpdatedNumbersDrawn", () => {
    getSelectedNumbers();
  });

  contractProvider.on("GameReset", () => {
    setSelectedNumbers([]);
  });

  return (
    <>
      <div className="w-full h-32 flex items-center justify-center overflow-hidden">
        {selectedNumbers.map((item, idx) => (
          <motion.div 
            initial={{
              translateY: 60,
              opacity: 0
            }}
            animate={{
              translateY: 0,
              opacity: 1,
              transition: {
                delay: .75 * idx,
                duration: .35
              }
            }}
            key={idx}
            className="selected-ball medium-ball w-[75px] h-[75px] text-gray-300 text-2xl mx-2 flex items-center justify-center font-bold"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </>
  )
}