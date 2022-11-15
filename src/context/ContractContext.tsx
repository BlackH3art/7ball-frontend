import { createContext, FC, ReactNode } from "react";
import { ethers } from "ethers";

import { useContract, useSigner } from "wagmi";
import { contract, lotteryABI } from "../constants/constants";

import { ContractContextInterface } from "../interfaces/ContractContextInterface";


export const ContractContext = createContext<ContractContextInterface>({
  contractProvider: new ethers.Contract(contract, lotteryABI),
  contractSigner: new ethers.Contract(contract, lotteryABI),
})

interface Props {
  children: ReactNode;
}

export const ContractContexProvider: FC<Props> = ({ children }) => {

  // const { data: signer } = useSigner()

  
  const contractProvider = useContract({
    addressOrName: contract,
    contractInterface: lotteryABI,
    signerOrProvider: new ethers.providers.InfuraProvider("maticmum")
  });

  const contractSigner = useContract({
    addressOrName: contract,
    contractInterface: lotteryABI,
    // signerOrProvider: signer
  });


  return(
    <ContractContext.Provider value={{
      contractProvider,
      contractSigner
    }}>
      {children}
    </ContractContext.Provider>
  )
}