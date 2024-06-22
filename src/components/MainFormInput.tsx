import { ChangeEvent } from 'react';

interface MainFormInputProp {
  handleWeight: (e: ChangeEvent<HTMLInputElement>) => void;
  weight: string;
  handleRepeat: (e: ChangeEvent<HTMLSelectElement>) => void;
  repeat: number;
  REPEAT_SELECT_LIST: number[];
}

const MainFormInput = ({
  handleWeight,
  weight,
  handleRepeat,
  repeat,
  REPEAT_SELECT_LIST,
}: MainFormInputProp) => {
  return (
    <>
      <input
        placeholder='무게'
        type='number'
        name='무게'
        onChange={handleWeight}
        value={weight}
        step={5}
        className='w-full p-[0.8rem_0.6rem] placeholder:text-black bg-customWhite-100 border rounded-[0.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            정확도를 위해 10개 이하 추천
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
    </>
  );
};

export default MainFormInput;
