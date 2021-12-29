import DcButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'DC/Button/Color',
  component: DcButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // onClick: {},
    color: {
      control: { type: 'select' },
      options: ['default', 'alternative', 'dark', 'light', 'success', 'danger', 'warning', 'purple'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
    },
    type: {
      control: { type: 'select' },
      options: ['submit', 'button', 'reset'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DcButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dc-button v-bind="args">' + args.label + '</dc-button>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  type: 'button',
  size: 'base',
  color: 'default'
};

export const Alternative = Template.bind({});
Alternative.args = {
  label: 'Default',
  type: 'button',
  size: 'base',
  color: 'alternative'
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Default',
  type: 'button',
  size: 'base',
  color: 'dark'
};

export const Light = Template.bind({});
Light.args = {
  label: 'Default',
  type: 'button',
  size: 'base',
  color: 'light'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  type: 'button',
  size: 'base',
  color: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  type: 'button',
  size: 'base',
  color: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning',
  type: 'button',
  size: 'base',
  color: 'warning'
};

export const Purple = Template.bind({});
Purple.args = {
  label: 'Purple',
  type: 'button',
  size: 'base',
  color: 'purple'
};
