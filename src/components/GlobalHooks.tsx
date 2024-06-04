import { useInitializeWallet } from "./useInitializeWallet";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { queryClient } from "~/services/tanstackQuery";

export const GlobalHooks = () => {
  useInitializeWallet();

  return <></>;
};
