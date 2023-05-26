import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { NotificationSchema } from '../../model/types/NotificationSchema';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: NotificationSchema;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const {
    className,
    item,
  } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, {}, [className])}
    >
      <Text
        title={item.title}
        text={item.description}
      />
    </Card>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target={'_blank'}
        rel={'noreferrer'}
        className={cls.link}
      >
        {content}
      </a>
    );
  }

  return content;
});

NotificationItem.displayName = 'NotificationItem';
