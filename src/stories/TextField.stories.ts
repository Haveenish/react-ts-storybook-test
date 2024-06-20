import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TextField from "../components/TextField";

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "Test",
  },
};

export const InputWithLabel: Story = {
  args: {
    value: "Test",
    label: "Input text"
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Input text",
    value: "Test",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Input text",
    value: "Test",
  },
};
