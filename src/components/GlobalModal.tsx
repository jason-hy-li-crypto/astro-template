import { useChainId } from "~/store/chainIdStore";

export const GlobalModal = () => {
  const { chainId, setChainId } = useChainId();

  console.log("%c%s", "color: #e57373", chainId);
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className="text-lg">{chainId}</div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            setChainId(25);
          }}
        >
          cronos
        </button>
        <button
          onClick={() => {
            setChainId(324);
          }}
        >
          zkSync
        </button>
      </div>
      {
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1")?.showModal()}
        >
          open modal {chainId}
        </button>
      }
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
  );
};
