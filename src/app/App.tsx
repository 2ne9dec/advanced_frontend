import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage/';
import { AboutPage } from 'pages/AboutPage/';
import './styles/app.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/about'>Go to about Page</Link>
      <Link to='/'>Go to main Page</Link>

      <button onClick={toggleTheme}>
        {theme === 'light' ? <IoMoonOutline size='18px' /> : <IoMoon size='18px' />}
      </button>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
