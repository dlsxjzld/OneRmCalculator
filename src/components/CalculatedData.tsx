import { Fragment } from 'react/jsx-runtime';

interface CalculatedDataProp {
  result: string[];
  weight: string;
  repeat: number;
}

const CalculatedData = ({ result, weight, repeat }: CalculatedDataProp) => {
  return (
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
  );
};

export default CalculatedData;
