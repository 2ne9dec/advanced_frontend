import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import Notifications from 'shared/assets/icons/notification-20-20.svg';
import cls from './NotificationButton.module.scss';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
      <Icon Svg={Notifications} inverted className={cls.notification} />
    </Button>
  );

  if (useDevice()) {
    return (
      <>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </>
    );
  } else {
    return (
      <Popover
        className={classNames(cls.NotificationButton, {}, [className])}
        direction={'bottom left'}
        trigger={trigger}
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    );
  }
});

NotificationButton.displayName = 'NotificationButton';
