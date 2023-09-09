import { UserCard } from './UserCard';

const userAvatar =
  'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&uid=R23171892&ga=GA1.2.744839809.1694260955&semt=sph';

export default {
  title: 'Components/User/UserCard',
  component: UserCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const LoadingState = {
  args: {
    isLoading: true,
    user: {},
  },
};

export const WithoutUserAvatar = {
  args: {
    isLoading: false,
    user: {
      name: 'John Doe',
      bio: 'This is a bio',
      verified: true,
    },
  },
};

export const WithoutBio = {
  args: {
    isLoading: false,
    user: {
      name: 'John Doe',
      avatar: userAvatar,
      verified: true,
    },
  },
};

export const Unverified = {
  args: {
    isLoading: false,
    user: {
      name: 'John Doe',
      avatar: userAvatar,
      bio: 'This is a bio',
      verified: false,
    },
  },
};

export const ErrorState = {
  args: {
    isLoading: false,
  },
  render: () => <UserCard isLoading={false} user={false} />,
};
