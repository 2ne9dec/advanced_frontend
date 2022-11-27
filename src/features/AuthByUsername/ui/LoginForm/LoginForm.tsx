import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <form className={classNames(cls.LoginForm, {}, [className])}>
      <Input type='text' className={cls.input} placeholder='Введите username' autofocus />
      <Input type='password' className={cls.input} placeholder='Введите пароль' />
      <Button className={cls.loginBtn}>
        {t('Log_In')}
      </Button>
    </form>
  );
};
