import Header from "../app/components/Header";

export default {
  title: 'Header',
  component: Header
}

const Template = (args) => <Header {...args} />;

export const HeaderStory = Template.bind({});
HeaderStory.args = {

}