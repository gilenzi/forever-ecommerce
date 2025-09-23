import {useState} from 'react';
import Title from '../components/ui/Title';
import {Link} from 'react-router-dom';

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const inputClass = `border border-gray-400 rounded py-1.5 px-3.5 w-full mb-3`;

  const loginHandler = (e) => {
    e.preventDefault();
  };

  const registerHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full sm:w-[450px] m-auto flex justify-center items-center">
      <div>
        <Title type="h1" title={isSignIn ? 'Login' : 'Sign up'} />
        <form onSubmit={isSignIn ? loginHandler : registerHandler}>
          {!isSignIn && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={inputClass}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className={inputClass}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={inputClass}
          />
          <BottomSection setIsSignIn={setIsSignIn} isSignIn={isSignIn} />
        </form>
      </div>
    </div>
  );
}

function BottomSection({setIsSignIn, isSignIn}) {
  return (
    <>
      <div className="flex flex-wrap justify-between mt-3">
        <Link to="/forgot-password">Forgot your password?</Link>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setIsSignIn((prev) => (prev === true ? false : true))}
        >
          {isSignIn ? 'Create account' : 'Login here'}
        </button>
      </div>
      <button
        type="submit"
        className="capitalize w-fit m-auto block bg-black text-white text-sm my-8 px-8 py-3"
      >
        {isSignIn ? 'Sign up' : 'Sign in'}
      </button>
    </>
  );
}
