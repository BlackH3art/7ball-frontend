import { FC } from "react"
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Navigation: FC = () => {

  return (
    <>
      <nav className="w-full fixed z-10 h-20 bg-[#11111125] border-b-[1px] border-gray-800 backdrop-blur-md">
        <div className="flex items-center justify-between w-4/5 mx-auto h-full">

          <p>dLotto</p>
          <ConnectButton />

        </div>
      </nav>
    </>
  )
}