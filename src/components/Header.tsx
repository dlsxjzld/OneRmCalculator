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
        <div className='flex flex-col p-[0.8rem_1rem] bg-customWhite-100 border rounded-[0.5rem]'>
          <h2 className='font-semibold text-[1.6rem] text-left text-wrap'>
            - Brzycki공식을 바탕으로 무게와 반복 횟수를 입력하면 1RM(최대 1회
            반복 무게) 부터 12RM까지의 무게를 계산해 줍니다.
          </h2>
        </div>
      </header>
    </>
  );
};

export default Header;
