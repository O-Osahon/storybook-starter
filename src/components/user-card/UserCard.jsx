import styles from './UserCard.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as ErrorIcon } from './ErrorIcon.svg';
import { ReactComponent as VerifiedIcon } from './VerifiedIcon.svg';
import { ReactComponent as UnverifiedIcon } from './UnverifiedIcon.svg';

/**
  DIFFERENT STATES OF THIS COMPONENT:
  - loading
  - error
  - success:
    - user has not verified email
    - user has verified email
    - user without avatar
    - user with avatar
    - user without bio
 */

const LoadingState = () => {
  return <div>Loading...</div>;
};

const ErrorState = () => {
  return <div>An error has occurred</div>;
};

const Avatar = ({ imageUrl }) => {
  const defaultImageUrl = 'https://via.placeholder.com/50';
  return <img src={imageUrl || defaultImageUrl} alt="user avatar" />;
};

const Bio = ({ bio }) => {
  const noBio = 'No bio provided';
  return <p>{bio || noBio}</p>;
};

export const UserCard = ({ isLoading, user }) => {
  if (isLoading) return <LoadingState />;

  if (!user) return <ErrorState />;

  return (
    <div className={styles.card}>
      <Avatar imageUrl={user.avatar} />
      <div>
        <h4>Some card title</h4>
        <Bio bio={user.bio} />
        {user.verified ? (
          <VerifiedIcon className={styles.verified} />
        ) : (
          <UnverifiedIcon className={styles.unverified} />
        )}
      </div>
    </div>
  );
};

UserCard.propTypes = {
  isLoading: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    verified: PropTypes.bool,
    bio: PropTypes.string,
  }),
};

UserCard.defaultProps = {
  isLoading: false,
  user: undefined,
};
