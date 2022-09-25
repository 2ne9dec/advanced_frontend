import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = (props: NavBarProps) => {
  const { className } = props;

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      
      <div className={cls.links}>
        <AppLink className={AppLinkTheme.DARK} to='/about'>
          Go to about Page
        </AppLink>
        <AppLink className={AppLinkTheme.DARK} to='/'>
          Go to main Page
        </AppLink>
      </div>
    </nav>
  );
};
