import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from 'shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 30000,
  });

  if (isLoading) {
    return (
      <VStack
        max
        gap={'16'}
        className={classNames('', {}, [className])}
      >
        <Skeleton width={'100%'} border={'8'} height={'80px'} />
        <Skeleton width={'100%'} border={'8'} height={'80px'} />
        <Skeleton width={'100%'} border={'8'} height={'80px'} />
      </VStack>
    );
  }

  return (
    <VStack
      max
      gap={'16'}
      className={classNames('', {}, [className])}
    >
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});

NotificationList.displayName = 'NotificationList';
