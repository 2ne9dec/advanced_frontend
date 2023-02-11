import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;

  return (
    <VStack gap={'4'} className={classNames('', {}, [className])}>
      {block.title && <Text title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          text={paragraph}
        />
      ))}
    </VStack>
  );
});

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
