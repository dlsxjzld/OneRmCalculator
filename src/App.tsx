import { ChangeEvent, useState } from 'react';

function App() {
  const [oneRm, setOneRm] = useState(0);
  const [weight, setWeight] = useState(0);
  const [repeat, setRepeat] = useState(0);

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
    setWeight(Number(e.target.value));
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setRepeat(Number(e.target.value));
  };

  const handleCalculate = () => {
    const oneRm = calculate1RM(weight, repeat);
    setOneRm(oneRm);
  };

  return (
    <>
      <input
        placeholder='무게'
        type='number'
        name='무게'
        onChange={getWeight}
      />
      <select
        name='횟수'
        onChange={handleSelect}>
        {REPEAT_SELECT_LIST.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      <button
        type='button'
        onClick={handleCalculate}>
        click!
      </button>
      <div>{`weight: ${weight} repeat: ${repeat}`}</div>
      <div>{`1rm : ${oneRm}`}</div>
    </>
  );
}

export default App;
