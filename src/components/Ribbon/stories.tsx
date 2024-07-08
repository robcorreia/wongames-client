import { Meta, Story } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => {
  return (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
}

Default.args = {
  children: 'Best Seller'
}
