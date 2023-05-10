import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { Profile } from '../../model/types/profile';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('An error occurred while loading the profile')}
          text={t('Try to refresh the page')}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap={'8'} max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack max justify={'center'}>
          <Avatar src={data?.avatar} alt='Avatar' />
        </HStack>
      )}
      <Input
        value={data?.firstname}
        placeholder={t('Your firstname')}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid={'ProfileCard.Firstname'}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Your last name')}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid={'ProfileCard.Lastname'}
      />
      <Input
        value={data?.age}
        placeholder={t('Your age')}
        onChange={onChangeAge}
        readonly={readonly}
        data-testid={'ProfileCard.Age'}
      />
      <Input
        value={data?.city}
        placeholder={t('City')}
        onChange={onChangeCity}
        readonly={readonly}
        data-testid={'ProfileCard.City'}
      />
      <Input
        value={data?.username}
        placeholder={t('Enter your user name')}
        onChange={onChangeUsername}
        readonly={readonly}
        data-testid={'ProfileCard.Username'}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Enter the link to the avatar')}
        onChange={onChangeAvatar}
        readonly={readonly}
        data-testid={'ProfileCard.Avatar'}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
        data-testid={'ProfileCard.Currency'}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
        data-testid={'ProfileCard.Country'}
      />
    </VStack>
  );
};
