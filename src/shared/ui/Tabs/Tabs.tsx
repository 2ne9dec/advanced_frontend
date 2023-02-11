import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';
import { HStack } from '../Stack';

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
    <HStack gap={'8'} className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          onClick={clickHandler(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
        >
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
});

Tabs.displayName = 'Tabs';
