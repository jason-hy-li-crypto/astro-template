import { currentWallet } from "@cronos-app/wallet";
import { useQuery } from "@tanstack/react-query";

const { autoConnect } = currentWallet;

export const useInitializeWallet = () => {
  const { data } = useQuery({
    queryKey: ["wallet-auto-connect"],

    queryFn: async () => {
      const connected = await autoConnect();
      if (!connected) {
        throw new Error("auto wallet connect failed");
      }

      return connected;
    },
    // retry: isMobile ? 1 : 0,
    // retryDelay: 1000,
    refetchOnWindowFocus: false,
  });

  console.log("%c⧭", "color: #807160", data);
};
