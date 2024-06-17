import { Meta, StoryObj } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

type Story = StoryObj<typeof Footer>

export const Default: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
