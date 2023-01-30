import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ScrollRestoration.module.scss';
import { memo } from 'react';

interface ScrollRestorationProps {
  className?: string;
}

export const ScrollRestoration = memo((props: ScrollRestorationProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return <div className={classNames(cls.ScrollRestoration, {}, [className])}></div>;
});

ScrollRestoration.displayName = 'ScrollRestoration';
