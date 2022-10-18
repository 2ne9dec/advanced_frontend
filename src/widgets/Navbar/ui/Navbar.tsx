import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const Navbar = (props: NavBarProps) => {
  const { className } = props;

  return <nav className={classNames(cls.Navbar, {}, [className])}></nav>;
};
