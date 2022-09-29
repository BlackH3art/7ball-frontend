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
      <section className="w-full flex justify-center">
        <div className="flex flex-col mx-auto h-full w-[95%] overflow-hidden lg:w-4/5 xl:w-3/5 items-center py-10">

          <h2 className="font-bold text-3xl pt-12 pb-8">
            This weeks lucky numbers are:
          </h2>

          <div className="flex">
            {luckyNumbers.map((item, index) => (
              <Ball 
                key={index}
                number={item}
                idx={index}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}