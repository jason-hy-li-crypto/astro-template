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
import {
  $chaidIdNanoPersist,
  useChainIdZustandPersist,
} from "~/store/persistStore";
import { useStore } from "@nanostores/react";
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
      <p className="alert alert-warning">
        refresh the page, and the initial state is 25, then update to 324
      </p>
      <ZustandPersistDemo />
      <NanoPersistDemo />
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
const NanoPersistDemo = () => {
  const chainId = useStore($chaidIdNanoPersist);
  return (
    <>
      <div className="flex p-4 flex-col">
        <p className="text-xl">Nano persist </p>
        <div className="text-lg">current: {chainId.chainId}</div>
        <div className="flex gap-4">
          <button
            className="btn btn-outline"
            onClick={() => {
              $chaidIdNanoPersist.set({ chainId: 25 });
            }}
          >
            to cronos
          </button>
          <button
            className="btn btn-outline"
            onClick={() => {
              $chaidIdNanoPersist.set({ chainId: 324 });
            }}
          >
            to zkSync
          </button>
        </div>
      </div>
    </>
  );
};
