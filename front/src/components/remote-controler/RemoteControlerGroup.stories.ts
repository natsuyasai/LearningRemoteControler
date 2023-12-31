import type { Meta, StoryObj } from "@storybook/react";

import { RemoteControlerGroup } from "./RemoteControlerGroup";

const meta = {
  title: "components/remote-controler/RemoteControlerGroup",
  component: RemoteControlerGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    buttonProps: [
      {
        buttonText: "test1111111111111111111111111111111111111111111111111111111111111111",
        onClick: () => {},
      },
      {
        buttonText: "test2222222222222222222222222222222222222222222222222222222222222222222222222",
        onClick: () => {},
      },
      {
        buttonText: "test3333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
        onClick: () => {},
      },
    ],
  },
  argTypes: {},
} satisfies Meta<typeof RemoteControlerGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const 空: Story = {
  args: {
    buttonProps: [],
  },
};
