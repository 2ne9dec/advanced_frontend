import { StoryFn, Meta } from '@storybook/react';
import { NotificationSchema } from '../../model/types/NotificationSchema';
import { StoreDecorator } from '@/shared/config/storybook';
import { NotificationList } from './NotificationList';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotificationList>;

const Template: StoryFn<typeof NotificationList> = (args) => <NotificationList {...args} />;

const notification: NotificationSchema = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        { ...notification, id: '1', title: 'Уведомление 1' },
        { ...notification, id: '2', title: 'Уведомление 2' },
        { ...notification, id: '3', title: 'Уведомление 3' },
      ],
    },
  ],
};
