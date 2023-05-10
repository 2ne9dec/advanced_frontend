import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';

export const AdminPanelPage = () => {
  const { t } = useTranslation('admin-panel');

  return (
    <Page>
      {t('Admin Panel')}
    </Page>
  );
};

AdminPanelPage.displayName = 'AdminPanelPage';

export default memo(AdminPanelPage);
