import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('Main Page')}
    </Page>
  );
};

export default MainPage;
