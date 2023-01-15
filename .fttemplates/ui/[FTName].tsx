import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './[FTName].module.scss';
import { memo } from 'react';

interface [FTName]Props {
  className?: string;
}

export const [FTName] = memo((props: [FTName]Props) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.[FTName], {}, [className])}>
      
    </div>
  );
});

[FTName].displayName = '[FTName]';
