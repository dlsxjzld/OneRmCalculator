import { ChangeEvent, Fragment, useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [repeat, setRepeat] = useState(1);
  const [result, setResult] = useState<string[]>([]);

  // 선택값 : 횟수
  // 입력값 : 무게
  const REPEAT_SELECT_LIST = Array.from(
    { length: 12 },
    (_, index) => index + 1
  );

  const calculate1RM = (weight: number, repeat: number) => {
    return weight * (36 / (37 - repeat));
  };

  const getWeight = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setRepeat(Number(e.target.value));
  };

  const handleCalculate = () => {
    const oneRm = calculate1RM(Number(weight), repeat);

    const temp = [];

    for (let i = 1; i <= 12; i++) {
      const rm = (oneRm / (36 / (37 - i))).toFixed(2);
      temp.push(rm);
    }
    setResult([...temp]);
  };

  const handleReset = () => {
    setWeight('');
    setRepeat(1);
    setResult([]);
  };

  return (
    <div className='w-[37.5rem] min-h-[66.7rem] mx-auto p-[2rem_1.6rem]'>
      <header className='flex flex-row flex-wrap justify-center mb-[1rem]'>
        <h1 className='font-bold text-[2rem]'>1RM 계산기</h1>
      </header>
      <main className='flex flex-col items-center justify-center gap-[0.8rem]'>
        <input
          placeholder='무게'
          type='number'
          name='무게'
          onChange={getWeight}
          value={weight}
          className='w-full p-[0.8rem_0.6rem] border-[0.2rem]'
        />
        <select
          name='횟수'
          className='w-full p-[0.8rem_0.6rem] border-[0.2rem]'
          onChange={handleSelect}>
          {REPEAT_SELECT_LIST.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
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
