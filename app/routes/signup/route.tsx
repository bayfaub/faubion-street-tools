import { Form } from '@remix-run/react';

export default function SignUp() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col">
        <Form method="post" action="/signup">
          <input name="firstName" placeholder="First Name"></input>
          <button></button>
        </Form>
      </div>
    </div>
  );
}
