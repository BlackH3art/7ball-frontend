import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { ethers } from "ethers";

import { useContract } from "wagmi";
import { contract, lotteryABI } from "../constants/constants";

import { ContractContextInterface } from "../interfaces/ContractContextInterface";
import { toast } from "react-toastify";


export const ContractContext = createContext<ContractContextInterface>({
  contractProvider: new ethers.Contract(contract, lotteryABI),
  gameIsOn: false, 
})

interface Props {
  children: ReactNode;
}

export const ContractContexProvider: FC<Props> = ({ children }) => {

  const [gameIsOn, setGameIsOn] = useState<boolean>(false);

  const contractProvider = useContract({
    addressOrName: contract,
    contractInterface: lotteryABI,
    signerOrProvider: new ethers.providers.InfuraProvider("maticmum")
  });

  async function getContractState() {
    try {
      const isGameOn = await contractProvider.gameIsOn();
      setGameIsOn(isGameOn);
    } catch (error) {
      toast.error("Fetching contract state went wrong", { theme: "colored" });
    }
  }

  useEffect(() => {
    getContractState();
  }, []);

  contractProvider.on("GameIsOn", (isGameOn: boolean) => {
    setGameIsOn(isGameOn);
  });

  return(
    <ContractContext.Provider value={{
      contractProvider,
      gameIsOn,
    }}>
      {children}
    </ContractContext.Provider>
  )
}