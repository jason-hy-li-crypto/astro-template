import { m } from "@cronos-app/i18n/m";
import { Ticket } from "@cronos-app/icons/src";
import { currentWallet } from "@cronos-app/wallet";
import { useState } from "react";

export const Home = () => {
  const isConnected = currentWallet.useIsConnected();
  const [isOpenMenu, setMenuOpen] = useState(false);
  return (
    <div className="p-4 flex gap-4 flex-col">
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
          className="btn btn-primary"
          onClick={() => currentWallet.connect()}
        >
          Connect
          <Ticket className="border-warning border rounded-sm" />
        </button>
      )}

      <h1>{m.test()}</h1>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>

      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div role="alert" className="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>New software update available.</span>
      </div>
      <input className="input " type="date" />
    </div>
  );
};
