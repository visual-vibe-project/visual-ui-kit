import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './text-area'

const meta: Meta<typeof TextArea> = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea and applies disabled styles.',
    },
    error: {
      description: 'String describing the error message to display below the textarea.',
    },
    label: {
      description: 'Label text to display above the textarea.',
    },
  },
  component: TextArea,
  tags: ['autodocs'],
  title: 'UI/TextArea',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Text Area',
  },
}

export const WithError: Story = {
  args: {
    error: 'This field is required',
    label: 'Text Area',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Text Area',
  },
}
