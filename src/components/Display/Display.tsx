import { FC, useEffect, useState } from "react"
import { Ball } from "./Ball"

import { useContractRead, useContract } from "wagmi";
import { contract, lotteryABI } from "../../constants/constants";
import { ethers } from "ethers";

export const Display: FC = () => {

  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([]);

  const contractProvider = useContract({
    addressOrName: contract,
    contractInterface: lotteryABI,
    signerOrProvider: new ethers.providers.AlchemyProvider("maticmum")
  });


  useEffect(() => {

    const getLuckyNumbers = async () => {
      try {
        setLuckyNumbers([
          await contractProvider.winningArray(0),
          await contractProvider.winningArray(1),
          await contractProvider.winningArray(2),
          await contractProvider.winningArray(3),
          await contractProvider.winningArray(4),
          await contractProvider.winningArray(5),
        ]);
      } catch (error) {

      }
    }

    getLuckyNumbers();
  }, []);
  

  return (
    <>
      <section className="w-full h-[20vh] flex justify-center">
        <div className="flex mx-auto h-full w-[95%] lg:w-4/5 xl:w-3/5 justify-center">

          {luckyNumbers.map((item, index) => (
            <Ball 
              key={index}
              number={item}
            />
          ))}

        </div>
      </section>
    </>
  )
}