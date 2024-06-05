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
import { useChainIdPersist } from "~/store/chainIdStore";
export const GlobalComponents = ({ }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RealGlobalComponents />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const RealGlobalComponents = () => {
  const { chainId, setChainId } = useChainIdPersist();

  return <>
    <>
      <div className="flex p-4 flex-col">
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
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1")?.showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  </>

}