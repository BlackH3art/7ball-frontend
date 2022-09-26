import { FC } from "react";
import { ethers } from 'ethers';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { Navigation } from "./components/Navigation/Navigation";

import '@rainbow-me/rainbowkit/styles.css';

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

          <Navigation />

        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App
