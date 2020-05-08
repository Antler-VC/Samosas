import React, { useState } from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import MultiSelect from '../src';
import { top100Films } from './data';

export default {
  title: 'MultiSelect',
  component: MultiSelect,
  decorators: [
    withKnobs,
    storyFn => (
      <div style={{ maxWidth: 600, margin: '40px auto' }}>{storyFn()}</div>
    ),
  ],
};

export const Multiple = () => {
  const [value, setValue] = useState<string[]>(['The Godfather']);

  const handleChange = (value, reason) => {
    setValue(value);
    action('Value cahgned')(value, reason);
  };

  return (
    <MultiSelect
      label={text('Label', 'Movie')}
      labelPlural={text('Label plural', 'Movies')}
      options={top100Films}
      value={value}
      onChange={handleChange}
      disabled={boolean('Disabled', false)}
      searchable={boolean('Searchable', true)}
      freeText={boolean('Free text', false)}
      selectAll={boolean('Select all', true)}
      clearable={boolean('Clearable', true)}
      onOpen={action('Opened')}
      onClose={action('Closed')}
    />
  );
};

export const Single = () => {
  const [value, setValue] = useState<string>('The Godfather');

  const handleChange = (value, reason) => {
    setValue(value);
    action('Value cahgned')(value, reason);
  };

  return (
    <MultiSelect
      label={text('Label', 'Movie')}
      labelPlural={text('Label plural', 'Movies')}
      options={top100Films}
      multiple={false}
      value={value}
      onChange={handleChange}
      disabled={boolean('Disabled', false)}
      searchable={boolean('Searchable', true)}
      freeText={boolean('Free text', false)}
      selectAll={boolean('Select all', true)}
      clearable={boolean('Clearable', true)}
      onOpen={action('Opened')}
      onClose={action('Closed')}
    />
  );
};
