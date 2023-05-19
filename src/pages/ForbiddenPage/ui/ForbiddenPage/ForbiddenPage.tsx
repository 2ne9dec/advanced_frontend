import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';

export const ForbiddenPage = () => {
  const { t } = useTranslation('forbidden');

  return (
    <Page>
      {t('Forbiden Page')}
    </Page>
  );
};

ForbiddenPage.displayName = 'ForbiddenPage';

export default memo(ForbiddenPage);
