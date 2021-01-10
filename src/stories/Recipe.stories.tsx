import * as React from 'react'
import { Story } from '@storybook/react/types-6-0';

import Recipe from '@components/Recipe';

// This default export determines where your story goes in the story list

const RecipeStory = {
  title: 'Recipe',
  component: Recipe,
};

export default RecipeStory

const Template: Story<React.ComponentProps<typeof Recipe>> = (args) => (
  <Recipe {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /* the args you need here will depend on your component */
};
