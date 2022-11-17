import { ethers } from "ethers";

export interface ContractContextInterface {
  contractProvider: ethers.Contract;
  gameIsOn: boolean;
  prizePool: string;
}