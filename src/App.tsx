import { FC } from "react";
import { ethers } from 'ethers';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ToastContainer } from 'react-toastify';

import { Display } from "./components/Display/Display";
import { Navigation } from "./components/Navigation/Navigation";
import { TicketSection } from "./components/Ticket/TicketSection";

import 'react-toastify/dist/ReactToastify.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Main } from "./components/Main/Main";

const ethersProvider = new ethers.providers.AlchemyProvider("maticmum");
const { chains, provider } = configureChains(
  
  [chain.polygonMumbai],
  [
    alchemyProvider(ethersProvider),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


const App: FC = () => {

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>

        <ToastContainer />

          <Navigation />
            <Main />
            {/* <Display /> */}
            <TicketSection />

        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App
