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
import { GlobalModal } from "./GlobalModal";
export const GlobalComponents = ({}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalHooks />
      <GlobalModal />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
