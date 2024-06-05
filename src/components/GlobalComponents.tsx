import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { queryClient } from "~/services/tanstackQuery";
import { GlobalHooks } from "./GlobalHooks";
import { useChainIdZustandPersist } from "~/store/chainIdStore";
export const GlobalComponents = ({}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RealGlobalComponents />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const RealGlobalComponents = () => {
  return (
    <>
      <ZustandPersistDemo />
    </>
  );
};

const ZustandPersistDemo = () => {
  const { chainId, setChainId } = useChainIdZustandPersist();

  return (
    <>
      <div className="flex p-4 flex-col">
        <p className="text-xl">Zustand persist </p>
        <div className="text-lg">current: {chainId}</div>
        <div className="flex gap-4">
          <button
            className="btn btn-outline"
            onClick={() => {
              setChainId(25);
            }}
          >
            to cronos
          </button>
          <button
            className="btn btn-outline"
            onClick={() => {
              setChainId(324);
            }}
          >
            to zkSync
          </button>
        </div>
      </div>
    </>
  );
};
