import React, {useState} from 'react';

export default function Hamburger({onClick, className}) {
  const [clicked, setClicked] = useState(false);

  function clickHandler() {
    onClick?.();
    setClicked(!clicked);
  }

  return (
    <button
      className={`flex cursor-pointer flex-col gap-3 h-auto  w-[40px] ${className}`}
      onClick={clickHandler}
    >
      <span className="border-1 border-gray-300"></span>
      <span className="border-1 border-gray-300 w-1/2 ml-auto"></span>
      <span className="border-1 border-gray-300 w-1/3 ml-auto"></span>
    </button>
  );
}
