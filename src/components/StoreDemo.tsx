import { useStore } from "@nanostores/react";
import { useGlobalStore } from "~/store/globalstore";
import { $counter } from "~/store/nano";

export const StoreDemo = () => {
  const hi = useGlobalStore();
  const nano = useStore($counter);
  // const isM = useIsMounted();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button
          className="btn btn-circle"
          onClick={() => hi.increasePopulation()}
        >
          +
        </button>
        {hi.bears}
        <button className="btn btn-circle" onClick={() => hi.removeAllBears()}>
          -
        </button>
      </div>
      <div className="flex gap-2">
        <button
          className="btn btn-circle"
          onClick={() => $counter.set({ number: nano.number + 1 })}
        >
          +
        </button>
        {nano.number}
        <button
          className="btn btn-circle"
          onClick={() => $counter.set({ number: nano.number - 1 })}
        >
          -
        </button>
      </div>
    </div>
  );
};

import { useCallback, useEffect, useRef } from "react";

export function useIsMounted(): () => boolean {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}
