

import { useHooks } from "@components/providers";
import { SWRResponse } from "swr";
import Web3 from "web3";
import { AccountHookRes, createAccountHook } from "./useAccount";
import { createNetworkHook, NetworkHookRes } from "./useNetwork";

export const enhanceHook = (swrResponse: SWRResponse & any) => {
  return {
    ...swrResponse,
    hasInitialResponse: swrResponse.data || swrResponse.error,
  };
};

export const useNetwork = () =>
({ network: enhanceHook(useHooks(hooks => hooks?.useNetwork)()) as NetworkHookRes });

export const useAccount = () => 
({account: enhanceHook(useHooks(hooks => hooks?.useAccount)()) as AccountHookRes });

export const useWalletInfo = () => {
  const { account } = useAccount()
  const { network } = useNetwork()

  return {
    account,
    network,
    canPurchaseCourse: !!(account.data && network.isSupported)
  }
}

export const setupHooks = (web3: Web3 | null, provider: any) => {
  return {
    useAccount: createAccountHook(web3, provider),
    useNetwork: createNetworkHook(web3, provider)
  };
};

