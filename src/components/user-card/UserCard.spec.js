import { composeStories } from '@storybook/react';
import * as stories from './UserCard.stories';
import { render, screen } from '@testing-library/react';

const { LoadingState, ErrorState, WithoutBio, WithoutUserAvatar, Verified, Unverified } =
  composeStories(stories);

it('Renders the loading state', () => {
  render(<LoadingState />);
  const errorPage = screen.getByTestId('user-card-loading');
  expect(errorPage).toBeInTheDocument();
  expect(errorPage).toHaveTextContent('Loading...');
});

it('Renders the error state', () => {
  render(<ErrorState />);
  const errorPage = screen.getByTestId('user-card-error');
  expect(errorPage).toBeInTheDocument();
  expect(errorPage).toHaveTextContent('An error has occurred');
});

it('Renders the user card without bio', () => {
  render(<WithoutBio />);
  const userCard = screen.getByTestId('user-card');
  expect(userCard).toBeInTheDocument();
  expect(userCard).toHaveTextContent('John Doe');
  expect(userCard).toHaveTextContent('No bio provided');
});

it('Renders the user card with a placeholder avatar', () => {
  render(<WithoutUserAvatar />);
  const userCard = screen.getByTestId('user-card');
  expect(userCard).toBeInTheDocument();
  expect(userCard).toHaveTextContent('John Doe');
  expect(userCard).toHaveTextContent('This is a bio');
  const image = screen.getByAltText('user avatar');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'https://via.placeholder.com/50');
});

it('Renders the user card with a verified user', () => {
  render(<Verified />);
  const userCard = screen.getByTestId('user-card');
  expect(userCard).toBeInTheDocument();
  expect(userCard).toHaveTextContent('John Doe');
  expect(userCard).toHaveTextContent('This is a bio');
  const verifiedIcon = screen.getByTestId('verified-icon');
  expect(verifiedIcon).toBeInTheDocument();
  const unverifiedIcon = screen.queryByTestId('unverified-icon');
  expect(unverifiedIcon).not.toBeInTheDocument();
});

it('Renders the user card with an unverified user', () => {
  render(<Unverified />);
  const userCard = screen.getByTestId('user-card');
  expect(userCard).toBeInTheDocument();
  expect(userCard).toHaveTextContent('John Doe');
  expect(userCard).toHaveTextContent('This is a bio');

  const verifiedIcon = screen.queryByTestId('verified-icon');
  expect(verifiedIcon).not.toBeInTheDocument();
  const unverifiedIcon = screen.getByTestId('unverified-icon');
  expect(unverifiedIcon).toBeInTheDocument();
});
