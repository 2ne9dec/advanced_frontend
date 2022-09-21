import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/app.scss';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/about'>Go to about Page</Link>
      <Link to='/'>Go to main Page</Link>

      <button onClick={toggleTheme}>
        {theme === 'light' ? <IoMoonOutline size='18px' /> : <IoMoon size='18px' />}
      </button>

      <AppRouter />
    </div>
  );
};

export default App;
