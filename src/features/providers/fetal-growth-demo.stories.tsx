import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MotionProvider } from "@/components/motion-provider";
import styles from "@/components/provider/provider.module.css";
import "@/app/globals.css";
import { FetalGrowthDemo } from "./fetal-growth-demo";

const meta = {
  title: "Provider/Fetal growth demonstration",
  component: FetalGrowthDemo,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <MotionProvider>
        <div className={styles.site}>
          <Story />
        </div>
      </MotionProvider>
    ),
  ],
} satisfies Meta<typeof FetalGrowthDemo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Homepage: Story = {};
export const FullCase: Story = { args: { detailed: true } };
