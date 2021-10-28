import DcButton from '../components/Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'DC/Button',
  component: DcButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // onClick: {},
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
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

export const Submit = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Submit.args = {
  type: 'submit',
  label: 'Submit',
};

export const Reset = Template.bind({});
Reset.args = {
  label: 'Reset',
  type: 'reset',
};

export const Button = Template.bind({});
Button.args = {
  label: 'Button',
  type: 'button'
};
