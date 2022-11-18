import { ethers } from "ethers";
import { FC, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";
import { ContractContext } from "../../context/ContractContext";

export const PrizePool: FC = () => {

  const [currentPrize, setCurrentPrize] = useState<string>("");
  const { contractProvider } = useContext(ContractContext);
  const { setShowTicketModal } = useContext(AppContext);

  async function getPrizePool() {
    try {
      const pool = await contractProvider.prizePool();
      setCurrentPrize(ethers.utils.formatEther(pool._hex))
    } catch (error) {
      toast.error("Fetching prize pool went wrong", { theme: "colored" });
    }
  };

  useEffect(() => {
    getPrizePool();
  }, []);

  contractProvider.on("UpdatedPrizePool", () => {
    getPrizePool();
  });

  return (
    <>
      <div className="w-1/2 flex flex-col justify-between">

        <div className="">
          <h2 className="text-white text-4xl font-bold text-center">
            Current prize pool: 
          </h2>

          {currentPrize ? (
            <div className="flex items-end justify-center ">
              <h2 className="text-main-purple text-6xl font-bold text-center">
                {currentPrize}
              </h2>
              <h2 className="pl-2 text-main-purple text-4xl font-bold text-center">
                MATIC
              </h2>
            </div>
          ) : (
            <>loader</>
          )}
        </div>

        <div className="flex justify-center pt-20">
          <button 
            className="rounded-full mr-3 p-2 px-6 uppercase border-[1px] border-main-purple font-bold text-main-purple"
            disabled
          >
            claim reward
          </button>

          <button 
            className="rounded-full ml-3 p-2 px-6 uppercase font-bold bg-main-purple"
            onClick={() => setShowTicketModal(true)}
          >
            Buy ticket
          </button>
        </div>

      </div>
    </>
  )
}