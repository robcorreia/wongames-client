import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
} as Meta


type Story = StoryObj<typeof Button>

export const Default: Story = (args) => (
  <Button {...args}/>
)

Default.args = {
  children: 'Buy now'
}


export const withIcon: Story = (args) => (
  <Button {...args}/>
)

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}