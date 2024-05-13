import { ChangeEvent, Fragment, useState } from 'react';

const calculate1RM = (weight: number, repeat: number): number => {
  return weight * (36 / (37 - repeat));
};

const calculateWeight1RMto12RM = (weight: string, repeat: number): string[] => {
  const _1RM = calculate1RM(Number(weight), repeat);

  const _1RMto12RM = [];
  for (let i = 1; i <= 12; i++) {
    const rm = (_1RM / (36 / (37 - i))).toFixed(2);
    _1RMto12RM.push(rm);
  }
  return _1RMto12RM;
};

function App() {
  const [weight, setWeight] = useState('');
  const [repeat, setRepeat] = useState(0);
  const [result, setResult] = useState<string[]>([]);

  const REPEAT_SELECT_LIST = Array.from(
    { length: 12 },
    (_, index) => index + 1
  );

  const handleWeight = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleRepeat = (e: ChangeEvent<HTMLSelectElement>) => {
    setRepeat(Number(e.target.value));
  };

  const handleCalculate = () => {
    const weightForRmList = calculateWeight1RMto12RM(weight, repeat);
    setResult([...weightForRmList]);
  };

  const handleReset = () => {
    setWeight('');
    setRepeat(0);
    setResult([]);
  };

  return (
    <div className='w-[37.5rem] min-h-[66.7rem] mx-auto p-[2rem_1.6rem]'>
      <header className='flex flex-row flex-wrap justify-center mb-[1rem]'>
        <h1 className='font-bold text-[2rem]'>1RM 계산기</h1>
        <span className='font-semibold'>
          정확도를 위해 횟수를 10개 이하로 해주세요!
        </span>
      </header>
      <main className='flex flex-col items-center justify-center gap-[0.8rem]'>
        <input
          placeholder='무게'
          type='number'
          name='무게'
          onChange={handleWeight}
          value={weight}
          className='w-full p-[0.8rem_0.6rem] border-[0.2rem]'
        />
        <section className='w-full flex items-center justify-between'>
          <label htmlFor='reps'>반복 횟수 :</label>
          <select
            id='reps'
            name='횟수'
            className=' w-[75%] p-[0.8rem_0.6rem] border-[0.2rem]'
            onChange={handleRepeat}
            value={repeat || 'SELECT'}>
            <option
              value='SELECT'
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
        </section>
        <section className='w-full flex flex-row gap-[1.6rem]'>
          <button
            type='button'
            className='w-1/2 p-[0.8rem_0.7rem] border-[0.2rem] hover:bg-grey-100 transition-all ease-in-out duration-300 cursor-pointer'
            onClick={handleCalculate}>
            계산
          </button>
          <button
            type='button'
            className='w-1/2 p-[0.8rem_0.7rem] border-[0.2rem] hover:bg-grey-100 transition-all ease-in-out duration-300 cursor-pointer'
            onClick={handleReset}>
            초기화
          </button>
        </section>
        <section className='w-full flex flex-col items-center pt-[2rem] text-[1.8rem] text-center gap-[0.5rem]'>
          <span className='w-full font-semibold text-center'>{`무게: ${weight || 0} 횟수: ${repeat}`}</span>
          <Fragment>
            {result.map((weight, rep) => (
              <span
                key={`${weight + rep}rep`}
                className='w-full text-[1.6rem]'>{`${rep + 1}RM : ${weight}kg`}</span>
            ))}
          </Fragment>
        </section>
      </main>
    </div>
  );
}

export default App;
