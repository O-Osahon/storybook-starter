import styles from './UserCard.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as VerifiedIcon } from './VerifiedIcon.svg';
import { ReactComponent as UnverifiedIcon } from './UnverifiedIcon.svg';

export const defaultImageUrl = 'https://via.placeholder.com/50';

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
  return <div data-testid="user-card-loading">Loading...</div>;
};

const ErrorState = () => {
  return <div data-testid="user-card-error">An error has occurred</div>;
};

const Avatar = ({ imageUrl }) => {
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
    <div className={styles.card} data-testid="user-card">
      <Avatar imageUrl={user.avatar} />
      <div>
        <h4>{user.name}</h4>
        <Bio bio={user.bio} />
        {user.verified ? (
          <VerifiedIcon className={styles.verified} data-testid="verified-icon" />
        ) : (
          <UnverifiedIcon className={styles.unverified} data-testid="unverified-icon" />
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
