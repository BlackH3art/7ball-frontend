import { FC, useContext } from "react";
import { ethers } from 'ethers';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@rainbow-me/rainbowkit/styles.css';

import { Main } from "./components/Main/Main";
import { Navigation } from "./components/Navigation/Navigation";
import { TicketModal } from "./components/TicketModal/TicketModal";
import { AppContext } from "./context/AppContext";
import { GameSection } from "./components/GameSection/GameSection";

const ethersProvider = new ethers.providers.AlchemyProvider("maticmum");
const { chains, provider } = configureChains(
  
  [chain.polygonMumbai],
  [
    // alchemyProvider(ethersProvider),
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
});


const App: FC = () => {

  const { showTicketModal } = useContext(AppContext);

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider 
          chains={chains} 
          theme={darkTheme({
            accentColor: '#b55bff',
            accentColorForeground: '#080614',
            overlayBlur: "large",
            borderRadius: 'large',
          })}
          modalSize="compact"
        >

          <ToastContainer />

          <Navigation />
          <Main />
          {showTicketModal ? <TicketModal /> : null }
          <GameSection />

        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App
