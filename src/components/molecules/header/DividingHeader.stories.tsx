import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0.d';
import DividingHeader from './DividingHeader';

export default {
  title: 'dividingHeader',
  component: DividingHeader,
};

const Tenplate: Story<ComponentProps<typeof DividingHeader>> = () => {
  return <DividingHeader>おあおああおあお</DividingHeader>;
};

export const DividingHeaderMock = Tenplate.bind({});
