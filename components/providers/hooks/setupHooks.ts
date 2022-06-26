

import Web3 from "web3";
import { createUseAccount } from "./useAccount";

export const setupHooks = (web3: Web3, provider: any) => {
  return {
    useAccount: createUseAccount(web3, provider)
  }
}