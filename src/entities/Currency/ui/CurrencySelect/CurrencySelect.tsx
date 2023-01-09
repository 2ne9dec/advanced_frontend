import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.BYN, content: Currency.BYN },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly
  } = props;

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);


  const { t } = useTranslation();

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите валюту')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});

CurrencySelect.displayName = 'CurrencySelect';
