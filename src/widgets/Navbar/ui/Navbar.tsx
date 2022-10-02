import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = (props: NavBarProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={AppLinkTheme.DARK} to='/about'>
          {t('About')}
        </AppLink>
        <AppLink className={AppLinkTheme.DARK} to='/'>
          {t('Main')}
        </AppLink>
      </div>
    </nav>
  );
};
