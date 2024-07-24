import { QueryClient } from '@tanstack/react-query';
import { http, createConfig } from 'wagmi'
import { base, mainnet } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = 'WALLETCONNECT_PROJECT_ID';

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask({
      dappMetadata: {
        name: "My MetaMask App",
        url: "https://mymetamaskdapp.com"
      }
    }),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

export const queryClient = new QueryClient();