import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { className, feedbackTitle, hasFeedback, onAccept, onCancel, title, rate = 0 } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      hasFeedback ? setIsModalOpen(true) : onAccept?.(selectedStarsCount);
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input data-testid={'RatingCard.Input'} value={feedback} onChange={setFeedback} placeholder={t('Feedback')} />
    </>
  );

  return (
    <Card data-testid={'RatingCard'} max className={classNames('', {}, [className])}>
      <VStack align={'center'} gap={'8'} max>
        <Text title={starsCount ? t('Спасибо за оценку') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      {!useDevice() ? (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap={'32'}>
            {modalContent}
            <HStack max gap={'16'} justify={'end'}>
              <Button data-testid={'RatingCard.Close'} onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                {t('Close')}
              </Button>
              <Button data-testid={'RatingCard.Send'} onClick={acceptHandler}>
                {t('Send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      ) : (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap={'32'}>
            {modalContent}
            <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
              {t('Send')}
            </Button>
          </VStack>
        </Drawer>
      )}
    </Card>
  );
});

RatingCard.displayName = 'RatingCard';
