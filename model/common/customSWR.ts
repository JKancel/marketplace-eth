import { SWRResponse } from "swr/dist/types";

export type EnhanceSWRResponse<D = any, E = any> = SWRResponse<D, E> & {
  hasInitialResponse?: boolean;
};