// eslint-disable-next-line 2ne9dec-plugin/layer-imports
import '@/app/styles/app.scss';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (story: () => StoryFn) => story();
