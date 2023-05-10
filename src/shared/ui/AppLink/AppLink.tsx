import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  LIGHT = 'light',
  DARK = 'dark',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = forwardRef((props: AppLinkProps, ref:ForwardedRef<HTMLAnchorElement>) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.LIGHT,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      ref={ref}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

AppLink.displayName = 'AppLink';
