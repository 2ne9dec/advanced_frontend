import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';


interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction={'bottom left'}
      trigger={<Avatar size={30} src={authData.avatar} />}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('Admin Panel'),
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t('Profile'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('Log_Out'),
          onClick: onLogout,
        },
      ]}
    />
  );
});

AvatarDropdown.displayName = 'AvatarDropdown';
