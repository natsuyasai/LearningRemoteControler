import type { Meta, StoryObj } from "@storybook/react";

import { RemoteControlerButton } from "./RemoteControlerButton";

const meta = {
  title: "components/remote-controler/RemoteControlerButton",
  component: RemoteControlerButton,
  parameters: {
    layout: "centered",
  },
  args: {
    buttonText: "test text",
  },
  argTypes: {},
} satisfies Meta<typeof RemoteControlerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
