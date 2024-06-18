import { Form } from '@remix-run/react';

type CardFormProps = {
  formLabel: string;
  action: string;
  method: string;
  navigate?: boolean;
};

export default function LoginForm(props: CardFormProps) {
  return (
    <div className="w-96 h-96 bg-pigeon-post rounded-2xl border-san-juan border-2">
      <h1 className="flex justify-center mt-2 text-xl">{props.formLabel}</h1>
      <Form
        className="flex flex-col items-center justify-center h-80"
        action={props.action}
        method="POST"
        navigate={props.navigate ? props.navigate : true}
      >
        <input
          className="text-pigeon-post bg-san-juan placeholder:text-pigeon-post p-1 rounded-lg w-3/4 mb-4 focus:outline-none"
          name="email"
          type="email"
          placeholder="Email"
          required
        ></input>

        <input
          className="text-pigeon-post bg-san-juan placeholder:text-pigeon-post p-1 rounded-lg w-3/4 mb-4 focus:outline-none"
          placeholder="Password"
          type="password"
          name="password"
          required
        ></input>
        <button className="bg-san-juan rounded-lg pl-4 pr-4 hover:opacity-65">
          {' '}
          Login
        </button>
      </Form>
    </div>
  );
}
