import * as Popover from "@radix-ui/react-popover";

export const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button aria-label="Update dimensions">+</button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content sideOffset={5}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ marginBottom: 10 }}>Dimensions</p>
          <fieldset>
            <label htmlFor="width">Width</label>
            <input id="width" defaultValue="100%" />
          </fieldset>
          <fieldset>
            <label htmlFor="maxWidth">Max. width</label>
            <input id="maxWidth" defaultValue="300px" />
          </fieldset>
          <fieldset>
            <label htmlFor="height">Height</label>
            <input id="height" defaultValue="25px" />
          </fieldset>
          <fieldset>
            <label htmlFor="maxHeight">Max. height</label>
            <input id="maxHeight" defaultValue="none" />
          </fieldset>
        </div>
        <Popover.Close aria-label="Close">-</Popover.Close>
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
