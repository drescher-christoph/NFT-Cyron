import { useState } from "react";
import NavBar from "./components/NavBar";
import MintSection from "./sections/MintSection";
import Footer from "./sections/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {

  const config = getDefaultConfig({
    appName: "NFT-CYRON",
    projectId: "4b5ff405d930c52c6df39e49c97c6099",
    chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
    ssr: true,
  });

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <header>
            <NavBar />
          </header>
          <main>
            <MintSection />
          </main>
          <Footer />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
