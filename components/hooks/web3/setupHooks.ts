

import { useHooks } from "@components/providers";
import { SWRResponse } from "swr";
import Web3 from "web3";
import { HttpProvider, IpcProvider, WebsocketProvider, AbstractProvider } from "web3-core";
import { createAccountHook } from "./useAccount";
import { createNetworkHook } from "./useNetwork";

export const enhanceHook = (swrResponse: SWRResponse) => {
  return {
    ...swrResponse,
    hasInitialResponse: swrResponse.data || swrResponse.error,
  };
};

export const useNetwork = () =>
({ network: enhanceHook(useHooks(hooks => hooks?.useNetwork)()) });

export const useAccount = () => 
({account: enhanceHook(useHooks(hooks => hooks?.useAccount)()) });

export const setupHooks = (web3: Web3 | null, provider: any) => {
  return {
    useAccount: createAccountHook(web3, provider),
    useNetwork: createNetworkHook(web3, provider)
  };
};