import { ChangeEvent, useState } from 'react';

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
    <div className='min-w-[37.5rem] min-h-full flex flex-col justify-center items-center p-[2rem_1.5rem]'>
      <h1 className='font-bold text-[2rem] pb-[2rem]'>1RM 계산기</h1>
      <input
        placeholder='무게'
        type='number'
        name='무게'
        onChange={getWeight}
        value={weight}
        className='w-full border-[0.2rem]'
      />
      <select
        name='횟수'
        className='w-full border-[0.2rem]'
        onChange={handleSelect}>
        {REPEAT_SELECT_LIST.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      <section className='w-full flex flex-row justify-around'>
        <button
          type='button'
          className='w-1/2 border-[0.2rem]'
          onClick={handleCalculate}>
          계산
        </button>
        <button
          type='button'
          className='w-1/2 border-[0.2rem]'
          onClick={handleReset}>
          초기화
        </button>
      </section>
      <section className='w-full flex flex-col items-center pt-[2rem] text-[1.8rem] text-center gap-[0.5rem]'>
        <span className='w-full font-semibold text-center'>{`무게: ${weight || 0} 횟수: ${repeat}`}</span>
        {result.map((weight, rep) => (
          <span className='w-full text-[1.6rem]'>{`${rep + 1}RM : ${weight}kg`}</span>
        ))}
      </section>
    </div>
  );
}

export default App;
