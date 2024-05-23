import DarkModeIcon from '../DarkModeIcon';

interface HeaderProps {
  toggleDarkMode: () => void;
}

const Header = ({ toggleDarkMode }: HeaderProps) => {
  return (
    <>
      <header className='text-center mb-[1rem] relative'>
        <button
          onClick={toggleDarkMode}
          className='absolute top-0 right-0 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300 text-gray-800'>
          <DarkModeIcon />
        </button>
        <h1 className='font-bold text-[2rem] dark:text-white'>1RM 계산기</h1>
        <h2 className='font-medium dark:text-white'>
          정확도를 위해 횟수를 10개 이하로 해주세요!
        </h2>
      </header>
    </>
  );
};

export default Header;
