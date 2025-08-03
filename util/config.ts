import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, anvil, zksync } from "wagmi/chains";
const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, anvil, zksync],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default config;
