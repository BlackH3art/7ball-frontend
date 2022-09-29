import { FC } from "react"
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Navigation: FC = () => {

  return (
    <>
      <nav className="w-full h-20 bg-red-200">
        <div className="flex items-center justify-between w-4/5 mx-auto h-full">

          <p>dLotto</p>
          <ConnectButton />

        </div>
      </nav>
    </>
  )
}