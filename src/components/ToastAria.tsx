import type { AriaToastProps } from "@react-aria/toast";

import { useToastState } from "@react-stately/toast";
import { useToast } from "@react-aria/toast";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { AriaToastRegionProps } from "@react-aria/toast";
import type { ToastState } from "@react-stately/toast";
import { useToastRegion } from "@react-aria/toast";

interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>;
  index: number;
}

function Toast<T extends React.ReactNode>({ state, ...props }: ToastProps<T>) {
  let ref = React.useRef(null);
  let { toastProps, titleProps, closeButtonProps } = useToast(
    props,
    state,
    ref
  );

  console.log(
    "%c⧭",
    "color: #e50000",
    toastProps,
    titleProps,
    closeButtonProps,
    state
  );
  return (
    // <div
    //       key={toast.key}
    //       style={{
    //         top: `${index * 50}px`,
    //       }}
    //       className={`toast toast-top `}
    //     >
    //       <div className="alert alert-info">HI {toast.content}</div>
    //     </div>
    <div
      {...toastProps}
      ref={ref}
      className="toast toast-top"
      style={{
        top: `${props.index * 50}px`,
      }}
    >
      <div className="alert alert-info">
        <div {...titleProps}>{props.toast.content}</div>
        <button
          {...closeButtonProps}
          onClick={(e) => {
            state.close(props.toast.key);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>;
}

function ToastRegion<T extends React.ReactNode>({
  state,
  ...props
}: ToastRegionProps<T>) {
  let ref = React.useRef(null);
  let { regionProps } = useToastRegion(props, state, ref);

  console.log("%c⧭", "color: #733d00", { regionProps });

  return (
    <div {...regionProps} ref={ref}>
      {state.visibleToasts.map((toast, index) => (
        <Toast key={toast.key} index={index} toast={toast} state={state} />
      ))}
    </div>
  );
}
function ToastProvider({
  children,
}: {
  children: (state: ToastState<React.ReactNode>) => React.ReactNode;
}) {
  let state = useToastState<React.ReactNode>({
    maxVisibleToasts: 5,
    hasExitAnimation: true,
  });

  return (
    <>
      {children(state)}
      {state.visibleToasts.length > 0 && <ToastRegion state={state} />}
    </>
  );
}
export const ToastAria = () => {
  return (
    <ToastProvider>
      {(state) => (
        <button
          onClick={() =>
            state.add("Toast is done!", {
              onClose() {
                console.log("%c%s", "color: #00bf00", "close?");
              },
              timeout: 3000,
            })
          }
        >
          Show toast
        </button>
      )}
    </ToastProvider>
  );
};
