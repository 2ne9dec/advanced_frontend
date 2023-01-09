import { memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option
        className={cls.option}
        key={opt.value}
        value={opt.value}
      >
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {};

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && (
        <span className={classNames(cls.label)}>
          {`${label}: `}
        </span>
      )}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
});

Select.displayName = 'Select';
