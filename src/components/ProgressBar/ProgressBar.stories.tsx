import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";
import { type ProgressBarProps } from "./ProgressBarType";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["blue", "gray", "red", "green", "yellow", "white"],
    },
    height: {
      control: {
        type: "select",
      },
      options: [4, 6, 8, 10, 12],
    },
    domSelector: {
      control: { type: "text" },
      description: "The ID of the DOM element to track scrolling.",
    },
    top: {
      control: { type: "number" },
      description: "The top position of the progress bar.",
    },
    left: {
      control: { type: "number" },
      description: "The left position of the progress bar.",
    },
    onBottom: {
      action: "reached bottom",
      description:
        "Callback when the bottom of the scrollable element is reached.",
    },
  },
};
export default meta;

type Story = StoryObj<ProgressBarProps>;

export const Default: Story = {
  args: {
    domSelector: "scrollableElement",
    height: 6,
    color: "blue",
    top: 0,
    left: 0,
  },
  render: (args) => (
    <div
      id="scrollableElement"
      style={{ height: "200px", overflowY: "scroll" }}
    >
      <div style={{ height: "600px" }}>
        <ProgressBar {...args} />
      </div>
    </div>
  ),
};
export const RedBar: Story = {
  args: {
    domSelector: "scrollableElement",
    height: 8,
    color: "red",
    top: 10,
    left: 0,
  },
  render: (args) => (
    <div
      id="scrollableElement"
      style={{ height: "200px", overflowY: "scroll" }}
    >
      <div style={{ height: "600px" }}>
        <ProgressBar {...args} />
      </div>
    </div>
  ),
};

export const GreenBar: Story = {
  args: {
    domSelector: "scrollableElement",
    height: 10,
    color: "green",
    top: 20,
    left: 0,
  },
  render: (args) => (
    <div
      id="scrollableElement"
      style={{ height: "200px", overflowY: "scroll" }}
    >
      <div style={{ height: "600px" }}>
        <ProgressBar {...args} />
      </div>
    </div>
  ),
};

export const CustomHeight: Story = {
  args: {
    domSelector: "scrollableElement",
    height: 12,
    color: "gray",
    top: 30,
    left: 0,
  },
  render: (args) => (
    <div
      id="scrollableElement"
      style={{ height: "200px", overflowY: "scroll" }}
    >
      <div style={{ height: "600px" }}>
        <ProgressBar {...args} />
      </div>
    </div>
  ),
};
