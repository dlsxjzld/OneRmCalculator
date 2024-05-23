interface MainFormButtonProp {
  handleCalculate: () => void;
  handleReset: () => void;
}

const MainFormButton = ({
  handleCalculate,
  handleReset,
}: MainFormButtonProp) => {
  return (
    <article className='w-full flex flex-row gap-[1.6rem]'>
      <button
        type='button'
        className='w-1/2 p-[0.8rem_0.7rem] border bg-blue-500 dark:bg-gray-400 dark:text-black dark:border-black dark:hover:bg-gray-500 text-white rounded-[0.5rem] hover:bg-light-customBlue-550 transition-all duration-300'
        onClick={handleCalculate}>
        계산
      </button>
      <button
        type='button'
        className='w-1/2 p-[0.8rem_0.7rem] border bg-customWhite-100  rounded-[0.5rem] dark:hover:bg-gray-500 dark:border-black hover:bg-light-customBlue-550 hover:text-white transition-all duration-300 '
        onClick={handleReset}>
        초기화
      </button>
    </article>
  );
};

export default MainFormButton;
