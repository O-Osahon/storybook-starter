import { useContext, useState } from 'react';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useContext(authContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAuthenticated(true);
    navigate('/profile');
  };

  const disabledSubmit = !email || !password;
  return (
    <div className={styles.root} data-testid="login-page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            id="username"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" disabled={disabledSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};
