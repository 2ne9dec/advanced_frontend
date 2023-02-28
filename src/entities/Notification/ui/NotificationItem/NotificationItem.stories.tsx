import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationSchema } from '../../model/types/NotificationSchema';
import { StoreDecorator } from 'shared/config/storybook';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

const notification: NotificationSchema = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
};

export const Normal = Template.bind({});
Normal.args = { item: notification };
Normal.decorators = [StoreDecorator({})];
