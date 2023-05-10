import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article/model/consts/articleConsts';
import { SortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    order,
    sort,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation('articles');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('Ascending')
    },
    {
      value: 'desk',
      content: t('Descending')
    }
  ], [t]);

  const orderFilterOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('Created')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('Title')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('Views')
    }
  ], [t]);


  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={orderFilterOptions}
        label={t('Sort')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        options={orderOptions}
        label={t('By')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
