import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
  };

  const onCommentTextChange = useCallback((value: string) => {
      dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Enter comment text')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          onClick={onSendHandler}
        >
          {t('Send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(AddCommentForm);
