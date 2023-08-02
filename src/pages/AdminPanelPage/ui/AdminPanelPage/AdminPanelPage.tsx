import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';


export const AdminPanelPage = () => {
  const { t } = useTranslation('admin-panel');

  return (
    <Page data-testid={'AdminPanelPage'}>
      {t('Admin Panel')}
    </Page>
  );
};

AdminPanelPage.displayName = 'AdminPanelPage';

export default memo(AdminPanelPage);
