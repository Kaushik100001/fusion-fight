import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CreateBattle, JoinBattle, Battleground, Battle, Home , Leaderboard } from "./page";
import { OnboardModal } from "./components";
import { GlobalContextProvider } from "./context";
import "./index.css";

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  scrollSepolia,
  sepolia,
  polygonZkEvmTestnet,
  arbitrumSepolia,
  mantleTestnet,
  polygonMumbai,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, publicClient } = configureChains(
  [
    polygonMumbai,
    mainnet,
    scrollSepolia,
    sepolia,
    polygonZkEvmTestnet,
    arbitrumSepolia,
    mantleTestnet,
  ],
  [alchemyProvider({ apiKey:"alcht_av3nbEp0j9eKSL8pPllaqaNELd9mfi" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: 'cca2a5aa4e9b8b23ce3079d90b59ffef',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig config={wagmiConfig}>
    <BrowserRouter>
      <GlobalContextProvider>
        <RainbowKitProvider
          chains={chains}
          modalSize={{
            smallScreen: "compact",
            largeScreen: "wide",
          }}
          theme={darkTheme({
            accentColor: "#ec4899",
            accentColorForeground: "white",
            overlayBlur: "large",
            borderRadius: "large",
          })}
        >
          <OnboardModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/battleground" element={<Battleground />} />
            <Route path="/create-battle" element={<CreateBattle />} />
            <Route path="/join-battle" element={<JoinBattle />} />
            <Route path="/battle/:battleName" element={<Battle />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </RainbowKitProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </WagmiConfig>
);
