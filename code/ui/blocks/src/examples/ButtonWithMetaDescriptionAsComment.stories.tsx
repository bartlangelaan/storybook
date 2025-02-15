import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * These are the stories for the Button component
 *
 * _this description was written as a comment above the default export_
 */
const meta = {
  title: 'Blocks/Description/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMetaDescriptionAsComment: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
