import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LookupDashboard } from "./lookup-dashboard";
import "@/app/globals.css";
const meta = {
  title: "Provider/Clinical lookup dashboard",
  component: LookupDashboard,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof LookupDashboard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const TwoCases: Story = {};
