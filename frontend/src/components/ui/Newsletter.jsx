import React from 'react';

export default function Newsletter() {
  function emailHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-gray-800">
        Subscribe now & get 20% off
      </h3>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        className="w-full max-w-3xl flex items-center gap-3 mx-auto my-6 border pl-3"
        onSubmit={emailHandler}
      >
        <input
          className="w-full sm:flex-1 outline-none"
          required
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="bg-black cursor-pointer text-white text-xs px-10 py-4 uppercase"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
