import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';
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
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
