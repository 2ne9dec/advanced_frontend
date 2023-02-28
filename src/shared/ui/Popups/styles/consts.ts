import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': cls.menuTopLeft,
  'top right': cls.menuTopRight,
  'bottom left': cls.menuBottomLeft,
  'bottom right': cls.menuBottomRight,
};
