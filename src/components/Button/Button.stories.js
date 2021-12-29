import { ref } from 'vue'
import DcButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'DC/Button',
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
    const counter = ref(0);
    return { args, counter };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<dc-button v-bind="args" v-on:click="counter++">' + args.label + '</dc-button><br>Click counter: {{ counter }}',
});

export const Badge = Template.bind({});
Badge.args = {
  label: 'Messages',
  type: 'button',
  badge: '2',
  size: 'base',
  color: 'default'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled button',
  type: 'button',
  size: 'base',
  color: 'default',
  disabled: true
};
