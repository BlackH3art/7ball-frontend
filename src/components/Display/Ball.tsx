import { FC } from "react";

export const Ball: FC = () => {

  return (
    <>
      <div className="w-[13vmin] h-[13vmin] relative">

        <div className="shadow w-[8vmin] h-[1vmin] bg-gray-400 absolute rounded-full"></div>

        <div className="w-[13vmin] h-[13vmin] absolute rounded-full shadow-3xl bg-gradient-to-b from-[#ffff7c] to-[#ffff22] ">
          <p className="absolute text-4xl top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] font-bold">
            36
          </p>
        </div>

      </div>
    </>
  )
}