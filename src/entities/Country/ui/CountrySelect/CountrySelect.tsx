import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox } from 'shared/ui/ListBox/ListBox';

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
    <ListBox
      className={classNames('', {}, [className])}
      defaultValue={t('Choose a country')}
      label={t('Choose a country')}
      items={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      direction={'top right'}
    />
  );
});

CountrySelect.displayName = 'CountrySelect';
