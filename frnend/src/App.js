import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as link from "./links.js";
import { useAccount, useConnect, useDisconnect, WagmiConfig } from 'wagmi'

import "./App.css";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient } from "wagmi";
//   import {  configureChains, createClient, WagmiConfig } from "wagmi";

import { polygonMumbai } from 'wagmi/chains'

// const chains = [ chain.polygon, chain.optimism, chain.arbitrum];

// Wagmi client

const { chains, provider } = configureChains([polygonMumbai], [
  walletConnectProvider({ projectId: "d15eb86d73c6637da9fc023d24c7ffcd" }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
function App() {

  return (
    <>
      <WagmiConfig client={wagmiClient}>

        <Router>
          <Routes>
            <Route exact path='/' element={link.first()}></Route>
            <Route exact path='/form' element={link.form()}></Route>
            <Route exact path='/test' element={link.test()}></Route>
          </Routes>
          {/* <Connect/> */}
          {/* <Buy/> */}
        </Router>
      </WagmiConfig>
      <Web3Modal
        projectId="d15eb86d73c6637da9fc023d24c7ffcd"
        ethereumClient={ethereumClient}
      />
    </>
  );
}

export default App;
