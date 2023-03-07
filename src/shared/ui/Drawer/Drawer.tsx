import { Portal } from '@headlessui/react';
import { useTheme } from 'app/providers/ThemeProvider';
import { ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = (props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app-drawer'])}>
        <Overlay onClick={onClose} />
          <div className={cls.content}>
            {children}
          </div>
      </div>
    </Portal>
  );
};