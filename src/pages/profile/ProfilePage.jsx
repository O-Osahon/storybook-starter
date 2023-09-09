import { useContext } from 'react';
import { UserCard } from '../../components/user-card/UserCard';
import styles from './ProfilePage.module.css';
import { authContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const { setIsAuthenticated } = useContext(authContext);
  const navigate = useNavigate();

  const user = {
    avatar:
      'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&uid=R23171892&ga=GA1.2.744839809.1694260955&semt=sph',
    bio: 'This is a bio',
    verified: false,
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className={styles.root}>
      <h1>Profile Page</h1>
      <UserCard user={user} isLoading={false} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
