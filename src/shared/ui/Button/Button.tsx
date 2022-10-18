import { FC, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonForm {
  SQUARE = 'square',
}

export enum ButtonSize {
  SM = 'size_m',
  MD = 'size_md',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: ButtonTheme;
  square?: ButtonForm;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, square, size, ...otherProps } = props;

  const additionals = [className, cls[theme], cls[square], cls[size]];

  return (
    <button className={classNames(cls.Button, {}, additionals)} {...otherProps}>
      {children}
    </button>
  );
};
