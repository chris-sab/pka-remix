import { QueryClient } from '@tanstack/react-query';
import { http, createConfig } from 'wagmi'
import { base, mainnet } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = process.env.WALLET_PROJECT_ID || '1FENE334FXPP23DXAMA';
const metaName = process.env.META_DATA_NAME || 'My MetaMask APP';
const metaUrl = process.env.META_URL || 'https://mymetamaskdapp.com';

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask({
      dappMetadata: {
        name: metaName,
        url: metaUrl
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