import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { memo } from 'react';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.TILE ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.TILE,
  } = props;

  const renderArticles = (article: Article) => {
    return (
      <ArticleListItem
        article={article}
        view={view}
        key={article.id}
        className={cls.card}
      />
    );
  };

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticles)
        : null
      }
      {isLoading && getSkeletons(view)}
    </div>
  );
});

ArticleList.displayName = 'ArticleList';
