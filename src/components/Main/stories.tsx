import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'some test',
    description: 'some description'
  },
  argTypes: {
    title: { control: { type: 'text' } }
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

// For each and individual components
// and override global args on Meta
// Basic.args = {
//   title: 'teste',
//   description: 'teste'
// }
