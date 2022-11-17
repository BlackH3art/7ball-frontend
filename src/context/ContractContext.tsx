import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { ethers } from "ethers";

import { useContract } from "wagmi";
import { contract, lotteryABI } from "../constants/constants";

import { ContractContextInterface } from "../interfaces/ContractContextInterface";


export const ContractContext = createContext<ContractContextInterface>({
  contractProvider: new ethers.Contract(contract, lotteryABI),
  gameIsOn: false, 
  prizePool: "",
})

interface Props {
  children: ReactNode;
}

export const ContractContexProvider: FC<Props> = ({ children }) => {

  const [gameIsOn, setGameIsOn] = useState<boolean>(false);
  const [prizePool, setPrizePool] = useState<string>("");

  const contractProvider = useContract({
    addressOrName: contract,
    contractInterface: lotteryABI,
    signerOrProvider: new ethers.providers.InfuraProvider("maticmum")
  });

  useEffect(() => {

    async function getContractState() {

      const isGameOn = await contractProvider.gameIsOn();
      setGameIsOn(isGameOn);

      const pool = await contractProvider.prizePool();
      setPrizePool(ethers.utils.formatEther(pool._hex));
      
      

      

    }

    getContractState();
  }, []);


  return(
    <ContractContext.Provider value={{
      contractProvider,
      gameIsOn,
      prizePool
    }}>
      {children}
    </ContractContext.Provider>
  )
}