import { Meta, StoryObj } from '@storybook/react'
import Teste from '.'

export default {
  title: 'Teste',
  component: Teste
} as Meta

export const Default: StoryObj = (args) => <Teste {...args} />
