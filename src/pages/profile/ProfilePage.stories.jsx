import { MemoryRouter } from 'react-router-dom';
import { AuthContextProvider } from '../../contexts/AuthContext';
import { ProfilePage } from './ProfilePage';

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const PageContent = {
  args: {},
  render: () => (
    <MemoryRouter>
      <AuthContextProvider>
        <ProfilePage />
      </AuthContextProvider>
    </MemoryRouter>
  ),
};
