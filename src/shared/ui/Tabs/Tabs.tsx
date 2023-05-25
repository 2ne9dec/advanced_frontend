import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  // Без замыкания прокинется event, с замыканием можно прокинуть tab
  const clickHandler = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab);
    };
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          onClick={clickHandler(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});

Tabs.displayName = 'Tabs';
