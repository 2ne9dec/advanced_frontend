import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly
  } = props;

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);


  const { t } = useTranslation();

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Choose a country')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});

CountrySelect.displayName = 'CountrySelect';
