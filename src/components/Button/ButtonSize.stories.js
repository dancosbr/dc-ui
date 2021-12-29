import DcButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'DC/Button/Size',
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

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  label: 'Button',
  type: 'button',
  size: 'xs',
  color: 'default'
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  type: 'button',
  size: 'sm',
  color: 'default'
};

export const Base = Template.bind({});
Base.args = {
  label: 'Button',
  type: 'button',
  size: 'base',
  color: 'default'
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  type: 'button',
  size: 'lg',
  color: 'default'
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  label: 'Button',
  type: 'button',
  size: 'xl',
  color: 'default'
};
