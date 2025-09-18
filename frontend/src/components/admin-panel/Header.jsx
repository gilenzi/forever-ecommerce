import Logo from '../ui/Logo';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-5 px-10 border-b border-gray-300">
      <Logo styles={{className: 'w-[max(10%,80px)]'}} isAdmin={true} />
      <button className="bg-gray-600 cursor-pointer text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </header>
  );
}
