import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonForm, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/Navbar/LangSwitcher';
import { ThemeSwitcher } from 'widgets/Navbar/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation('translation');

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND}
        square={ButtonForm.SQUARE}
        size={ButtonSize.MD}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.DARK} to={RoutePath.main} className={cls.link}>
          <MainIcon className={cls.icon} />
          <span className={cls.text}>{t('Main')}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.DARK} to={RoutePath.about} className={cls.link}>
          <AboutIcon className={cls.icon} />
          <span className={cls.text}>{t('About')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
