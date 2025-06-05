// SnackBar.stories.tsx
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SnackBar from "./SnackBar";
import type { SnackBarProps } from "./SnackbarTypes";

const meta: Meta<typeof SnackBar> = {
  title: "Components/SnackBar",
  component: SnackBar,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["plain", "soft", "solid", "outlined"],
    },
    color: {
      control: { type: "select" },
      options: ["blue", "gray", "red", "green", "yellow", "white"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    onClose: { action: "closed" },
    autoHideDuration: {
      control: { type: "number" },
      description:
        "Duration in milliseconds before the snackbar automatically hides.",
    },
  },
};

export default meta;

type Story = StoryObj<SnackBarProps>;

const createSnackBarStory = (args: SnackBarProps) => {
  return () => {
    const [visible, setVisible] = useState(true);

    return (
      <>
        {visible && (
          <SnackBar
            {...args}
            onClose={() => {
              setVisible(false);
              args.onClose();
            }}
          />
        )}
      </>
    );
  };
};

export const Default: Story = {
  render: createSnackBarStory({
    variant: "outlined",
    color: "blue",
    size: "md",
    onClose: () => {},
    autoHideDuration: 3000,
  }),
};

export const Variants: Story = {
  render: createSnackBarStory({
    variant: "solid",
    color: "green",
    size: "md",
    onClose: () => {},
    autoHideDuration: 3000,
  }),
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {["plain", "soft", "solid", "outlined"].map((variant) => (
        <SnackBar
          key={variant}
          {...args}
          variant={variant as SnackBarProps["variant"]}
          onClose={() => alert(`Closed ${variant} snackbar`)}
          autoHideDuration={3000}
        />
      ))}
    </div>
  ),
  args: {
    color: "red",
    size: "md",
    autoHideDuration: 3000,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {["sm", "md", "lg"].map((size) => (
        <SnackBar
          key={size}
          {...args}
          size={size as SnackBarProps["size"]}
          onClose={() => alert(`Closed ${size} snackbar`)}
          autoHideDuration={3000}
        />
      ))}
    </div>
  ),
  args: {
    variant: "soft",
    color: "blue",
    autoHideDuration: 3000,
  },
};
