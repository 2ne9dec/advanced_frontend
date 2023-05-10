import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleEditPage.module.scss';
import { memo } from 'react';
import { Page } from '@/widgets/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details');
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit
        ? t('Edit article with ID = ') + id
        : t('Create new article')}
    </Page>
  );
};

ArticleEditPage.displayName = 'ArticleEditPage';

export default memo(ArticleEditPage);
