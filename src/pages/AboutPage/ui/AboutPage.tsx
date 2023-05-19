import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';


const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <Page>
      {t('About Page')}
    </Page>
  );
};

export default AboutPage;
