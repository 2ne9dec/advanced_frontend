import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from '../../types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': cls.menuTopLeft,
  'top right': cls.menuTopRight,
  'bottom left': cls.menuBottomLeft,
  'bottom right': cls.menuBottomRight,
};

export function Dropdown(props: DropdownProps) {
  const {
    className,
    items,
    direction = 'bottom right',
    trigger,
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as='div' className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, id) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type='button'
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item key={item.href} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={id} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
