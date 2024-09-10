import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../app/providers/router';
import { Router } from '@tanstack/react-router';

describe('Router tests', () => {
  const testRouter = new Router({
    routeTree,
    defaultPreload: 'intent',
  });

  it('should render the Home page by default', () => {
    render(<RouterProvider router={testRouter} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should navigate to the Login page', async () => {
    render(<RouterProvider router={testRouter} />);

    const loginLink = screen.getByText('Login');

    loginLink.click();

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('should highlight the active link', () => {
    render(<RouterProvider router={testRouter} />);

    const homeLink = screen.getByText('Home');

    expect(homeLink).toHaveClass('active');

    const loginLink = screen.getByText('Login');

    expect(loginLink).not.toHaveClass('active');
  });
});
