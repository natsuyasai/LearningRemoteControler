import type { StorybookConfig } from "@storybook/react-vite";
import { Options } from "@storybook/types";
import { InlineConfig, mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-onboarding", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal(config: InlineConfig, _options: Options) {
    return mergeConfig(config, {
      assetsInclude: ["/sb-preview/**"],
    });
  },
};
export default config;
