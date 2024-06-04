import React, { memo, useEffect, useState } from "react";
import * as Toast from "@radix-ui/react-toast";

export const BasicToast = memo(() => {
  return (
    <Toast.Provider swipeDirection="right">
      <T key={1} />
      <T key={2} />
      <T key={3} />
      <Toast.Viewport className="toast toast-top toast-end" />
    </Toast.Provider>
  );
});

const T = memo(() => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <>
      <button
        className="btn btn-outline"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add to calendar
      </button>

      <Toast.Root
        duration={39000}
        // type="background"
        className="alert alert-info flex flex-col items-end"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="text-lg ">Scheduled: Catch up</Toast.Title>
        <Toast.Description asChild>
          <time
            className="text-sm"
            dateTime={eventDateRef.current.toISOString()}
          >
            {eventDateRef.current.toISOString()}
          </time>
        </Toast.Description>
        <Toast.Action asChild altText="Goto schedule to undo">
          <button className="btn btn-ghost">Undo</button>
        </Toast.Action>
      </Toast.Root>
    </>
  );
});
