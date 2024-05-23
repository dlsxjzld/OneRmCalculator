import { ChangeEvent, useState } from 'react';
import CalculatedData from './components/CalculatedData';
import Header from './components/Header';
import MainFormButton from './components/MainFormButton';
import MainFormInput from './components/MainFormInput';
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
        <Header toggleDarkMode={toggleDarkMode} />
        <main className='flex flex-col items-center justify-center gap-[0.8rem]'>
          <MainFormInput
            handleWeight={handleWeight}
            weight={weight}
            handleRepeat={handleRepeat}
            repeat={repeat}
            REPEAT_SELECT_LIST={REPEAT_SELECT_LIST}
          />
          <MainFormButton
            handleCalculate={handleCalculate}
            handleReset={handleReset}
          />
          <CalculatedData
            result={result}
            weight={weight}
            repeat={repeat}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
