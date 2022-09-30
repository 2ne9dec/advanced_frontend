import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <IoMoonOutline size='18px' /> : <IoMoon size='18px' />}
    </Button>
  );
};
