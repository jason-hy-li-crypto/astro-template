import { Ticket } from "@cronos-app/icons/src";
import { currentWallet } from "@cronos-app/wallet";

export function WalletButton() {
  const isConnected = currentWallet.useIsConnected();
  return (
    <>
      {isConnected ? (
        <button
          className="btn btn-error"
          onClick={() => {
            currentWallet.disconnect();
          }}
        >
          Disconnect
        </button>
      ) : (
        <button
          className="btn btn-secondary"
          onClick={() => currentWallet.connect()}
        >
          Connect
          <Ticket className="border-warning border rounded-sm" />
        </button>
      )}
    </>
  );
}
