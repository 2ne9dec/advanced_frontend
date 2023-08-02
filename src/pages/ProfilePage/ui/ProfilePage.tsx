import { classNames } from '@/shared/lib/classNames/classNames';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <Page
      data-testid={'ProfilePage'}
      className={classNames('', {}, [className])}
    >
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
