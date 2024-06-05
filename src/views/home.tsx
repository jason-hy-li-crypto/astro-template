import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { m } from "@cronos-app/i18n/m";
import { useStore } from "@nanostores/react"; // or '@nanostores/preact'

import { Ticket } from "@cronos-app/icons/src";
import { currentWallet } from "@cronos-app/wallet";
import { useState } from "react";
import { BasicToast } from "~/components/Toast";
import { ToastAria } from "~/components/ToastAria";
import { $counter } from "~/store/nano";
import { StoreDemo } from "~/components/StoreDemo";
import { queryClient } from "~/services/tanstackQuery";
import { useDemoQuery } from "~/services/useDemoQuery";

export const HomeComponent = () => {
  const { data, isLoading } = useDemoQuery();

  return (
    <div className="p-4 flex flex-col ">
      <div>
        {data && (
          <pre className="h-[300px] overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        {isLoading && <div className="skeleton w-full h-[300px]"></div>}
      </div>
      <StoreDemo />
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <HomeComponent />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};
