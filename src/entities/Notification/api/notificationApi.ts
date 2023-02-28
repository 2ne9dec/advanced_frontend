import { rtkApi } from 'shared/api/rtkApi';
import { NotificationSchema } from '../model/types/NotificationSchema';

const notificationApiApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<NotificationSchema[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotifications = notificationApiApi.useGetNotificationsQuery;
