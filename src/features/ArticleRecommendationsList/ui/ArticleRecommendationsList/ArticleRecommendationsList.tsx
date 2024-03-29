import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  //!
  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap={'8'} className={classNames('', {}, [className])} data-testid={'ArticleRecommendationsList'}>
      <Text size={TextSize.L} title={t('Recommends')} />
      <ArticleList articles={articles} target='_blank' />
    </VStack>
  );
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
