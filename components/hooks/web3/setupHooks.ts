

import Web3 from "web3";
import { createAccountHook } from "./useAccount";
import { createNetworkHook } from "./useNetwork";

export const setupHooks = (web3: Web3, provider: any) => {
  return {
    useAccount: createAccountHook(web3, provider),
    useNetwork: createNetworkHook(web3, provider)
  }
}
