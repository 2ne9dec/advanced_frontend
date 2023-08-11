import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const sidebarItemList = useMemo(
    () => sidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />),
    [collapsed, sidebarItemsList],
  );

  return (
    <aside data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack gap={'16'} className={cls.items}>
        {sidebarItemList}
      </VStack>
      {collapsed ? (
        <VStack role={'navigation'} gap={'8'} align={'center'} className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher short={collapsed} />
        </VStack>
      ) : (
        <HStack justify={'center'} gap={'16'} className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher short={collapsed} />
        </HStack>
      )}
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';
