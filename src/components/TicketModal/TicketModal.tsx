import { FC, FormEvent, FormEventHandler, useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";

import logo from '../../images/logo-rect.svg';
import { ContractContext } from "../../context/ContractContext";
import { useContract, useSigner } from "wagmi";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { contract, lotteryABI } from "../../constants/constants";

export const TicketModal: FC = () => {

  const rangeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const { setShowTicketModal } = useContext(AppContext);

  const { data: signer } = useSigner()
  const contractSigner = useContract({
    addressOrName: contract,
    contractInterface: lotteryABI,
    signerOrProvider: signer
  });


  const handleChange = (e: any) => {
    let val = Number(e.target.value);

    if (selectedNumbers.includes(val)) {
      setSelectedNumbers((prev) => prev.filter((item) => item !== val));
      return;
    }
    if (selectedNumbers.length === 7) return;

    setSelectedNumbers((prev) => [...prev, val]);
  };


  const handleSubmit: FormEventHandler = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {

      if(selectedNumbers.length === 7) {

        const txHash = await contractSigner.buyTicket(
          selectedNumbers[0],
          selectedNumbers[1],
          selectedNumbers[2],
          selectedNumbers[3],
          selectedNumbers[4],
          selectedNumbers[5],
          selectedNumbers[6],
          { value: ethers.utils.parseEther("1")._hex }
        );

        await txHash.wait();

        setSelectedNumbers([]);
        setShowTicketModal(false);
        toast.success("Ticket sent to lottery! You can buy another one", { theme: "colored" });

      } else {
        toast.error("You need to select 7 numbers", { theme: "colored" });
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { theme: "colored" });
    }

  }


  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .3 }}
        className="fixed flex items-center justify-center top-0 z-40 w-full h-screen bg-[#11111125] backdrop-blur-lg"
      >
        <motion.div 
          className="flex flex-col items-center justify-between w-[400px] h-[600px] bg-[#080614] border-[1px] border-sub-purple backdrop-blur-lg drop-shadow-[0_10px_20px_rgba(180,91,255,0.35)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .3, delay: .2 }}
        >
          <div className="pt-5">
            <img src={logo} alt="logo" className="h-10" />
          </div>

          <h2 className="text-slate-300 text-lg font-semibold pt-5">
            Select your seven lucky numbers:
          </h2>

          <div className="flex h-10 text-slate-300 pb-12">
            {selectedNumbers.map((item, idx) => (
              <p key={idx} className="p-2">
                {item}
              </p>
            ))}
          </div>

          <form className="grid grid-cols-7 w-4/5 gap-2 pb-8">
            {rangeArray.map((item, idx) => (
              <input 
                key={idx}
                className={`
                  border-[1px] border-slate-800 text-slate-300 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 duration-75
                  ${selectedNumbers.includes(item) ? "drop-shadow-[0px_0px_5px_rgba(180,91,255)] bg-sub-purple hover:bg-main-purple font-bold" : ""}
                `}
                type="button" 
                name={item.toString()} 
                id={item.toString()} 
                value={item}
                onClick={handleChange}
              />
            ))}
          </form>

          <div className="flex flex-col items-center w-full">
            <button 
              className="rounded-md w-[90%] mb-2 p-2 px-6 uppercase font-bold bg-main-purple"
              onClick={handleSubmit}
            >
              buy ticket
            </button>
            <button 
              className="rounded-md w-[90%] mb-4 p-2 px-6 uppercase border-[1px] border-main-purple font-bold text-main-purple"
              onClick={() => setShowTicketModal(false)}
            >
              cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}