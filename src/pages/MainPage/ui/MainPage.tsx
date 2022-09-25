import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <div className='page-wrapper'>{t('Main Page')}</div>;
};

export default MainPage;
