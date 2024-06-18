import type { MetaFunction } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';
import LoginForm from '~/components/LoginForm';

export const meta: MetaFunction = () => {
  return [
    { title: 'Faubion Street Tools' },
    { name: 'description', content: 'Welcome to Faubion Street.' },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col p-16 items-center">
      <h1 className="mb-20">
        The property analysis and portfolio overview tool for real estate
        investors.
      </h1>
      <LoginForm
        formLabel="Login"
        action="/login"
        method="post"
        navigate={false}
      ></LoginForm>
      <Link to="/signup">Don't have an account? Sign up!</Link>
    </div>
  );
}
