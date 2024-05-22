import { ChangeEvent, Fragment, useState } from 'react';
import DarkModeIcon from './DarkModeIcon';
import {
  validateRepeatExist,
  validateWeightDecimalPointLength,
  validateWeightExist,
  validateWeightRange,
} from './util/validation';

const REPS = 12;
const REPEAT_SELECT_LIST = Array.from(
  { length: REPS },
  (_, index) => index + 1
);

const calculate1RM = (weight: number, repeat: number): number => {
  return weight * (36 / (37 - repeat));
};

const calculateWeight1RMtoREPS = (weight: string, repeat: number): string[] => {
  const _1RM = calculate1RM(Number(weight), repeat);

  const _1RMtoREPS = [];
  for (let i = 1; i <= REPS; i++) {
    const rm = (_1RM / (36 / (37 - i))).toFixed(2);
    _1RMtoREPS.push(rm);
  }
  return _1RMtoREPS;
};

const App = () => {
  const [weight, setWeight] = useState('');
  const [repeat, setRepeat] = useState(0);
  const [result, setResult] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleWeight = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !validateWeightRange(e.target.value) ||
      !validateWeightDecimalPointLength(e.target.value)
    ) {
      return;
    }
    setWeight(e.target.value);
  };

  const handleRepeat = (e: ChangeEvent<HTMLSelectElement>) => {
    setRepeat(Number(e.target.value));
  };

  const handleCalculate = () => {
    const isWeightExist = validateWeightExist(weight);
    const isRepeatExist = validateRepeatExist(repeat);

    if (!isWeightExist && !isRepeatExist) {
      alert('무게와 횟수를 입력해주세요!');
      return;
    }
    if (!isWeightExist) {
      alert('무게를 입력해주세요');
      return;
    }
    if (!isRepeatExist) {
      alert('횟수를 입력해주세요!');
      return;
    }

    const weightForRmList = calculateWeight1RMtoREPS(weight, repeat);
    setResult([...weightForRmList]);
  };

  const handleReset = () => {
    setWeight('');
    setRepeat(0);
    setResult([]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div
      className={`w-screen h-screen bg-blue-500 py-[1.6rem] overflow-auto scroll-smooth dark:bg-black/70 transition-all duration-300`}>
      <div className='max-w-[33.6rem] min-h-[32rem] mx-auto bg-white rounded-[0.5rem] shadow-md p-[2rem_1.6rem] dark:bg-black'>
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
        <main className='flex flex-col items-center justify-center gap-[0.8rem]'>
          <input
            placeholder='무게'
            type='number'
            name='무게'
            onChange={handleWeight}
            value={weight}
            className='w-full p-[0.8rem_0.6rem] placeholder:text-black dark:text-white bg-customWhite-100 border rounded-[0.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <article className='w-full flex items-center justify-between '>
            <label
              htmlFor='reps'
              className='dark:text-white'>
              반복 횟수 :
            </label>
            <select
              id='reps'
              name='횟수'
              className='w-[75%] p-[0.8rem_0.6rem] bg-customWhite-100 border rounded-[0.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleRepeat}
              value={repeat}>
              <option
                value='0'
                disabled>
                반복 횟수를 선택해주세요.
              </option>
              {REPEAT_SELECT_LIST.map((value) => (
                <option
                  key={`${value}reps`}
                  value={value}>
                  {value}
                </option>
              ))}
            </select>
          </article>
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
          <article className='w-full flex flex-col items-center pt-[1rem] text-[1.8rem] text-center gap-[0.5rem] dark:text-white'>
            <div className='w-full flex justify-evenly font-semibold '>
              <p>{`무게: ${weight || 0}kg`}</p>
              <p>{`횟수: ${repeat}번`}</p>
            </div>
            <Fragment>
              {result.map((weight, rep) => (
                <span
                  key={`${weight + rep}rep`}
                  className='w-full text-[1.6rem]'>{`${rep + 1}RM : ${weight}kg`}</span>
              ))}
            </Fragment>
          </article>
        </main>
      </div>
    </div>
  );
};

export default App;
