import { FC, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Animation } from "./Animation";

export const Main: FC = () => {

  const { setShowTicketModal } = useContext(AppContext);

  return (
    <>
      <main className="flex w-full pt-20 justify-center min-h-[100vh]">

        <section className="flex w-3/5">

          <div className="w-1/2">
            <div className="text-white text-6xl font-bold leading-[1.15] pt-48">
              <h1>Take your </h1>
              <h1>Chance to win</h1>
              <h1>Jackpot</h1>
            </div>

            <div className="text-4xl font-light text-main-purple py-5">
              <p>Experience the first</p>
              <p>decentralized and trustless</p>
              <p>lottery in Web3</p>
            </div>

            <div className="pt-4">
              <button className="rounded-full mr-3 p-2 px-6 uppercase border-[1px] border-main-purple font-bold text-main-purple">
                Learn more
              </button>

              <button 
                className="rounded-full ml-3 p-2 px-6 uppercase font-bold bg-main-purple"
                onClick={() => setShowTicketModal(true)}
              >
                Buy ticket
              </button>
            </div>
          </div>

          <Animation />

        </section>

      </main>
    </>
  )
}