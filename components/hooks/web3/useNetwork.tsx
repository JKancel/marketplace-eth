import { useEffect } from "react";
import Web3 from "web3";
import { useHooks } from "../../providers/web3";
import useSWR from "swr";

interface Networks {
  [key: number | string]: string;
}

const NETWORKS: Networks = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache"
}

const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID || 1337];

export const createNetworkHook = (web3: Web3, provider: any) => (): { network: any; } => {
  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/network" : null, // trigger the fetcher when web3 is ready
    async () => {
      return NETWORKS[await web3?.eth.getChainId()];
    }
  );

  const providerInstance = provider;

  useEffect(() => {
    providerInstance && providerInstance.on("chainChanged", (chainId: any) => mutate(NETWORKS[parseInt(chainId, 16)] ?? null));
  }, [mutate, providerInstance]);

  return {
    network: {
      data,
      mutate,
      target: targetNetwork,
      isSupported: data === targetNetwork,
      ...rest
    }
  };
};

export const useNetwork = () => {
  return useHooks(hooks => hooks?.useNetwork)();
};