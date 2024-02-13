import { getAdvice } from '../getAdvice';

export default function Dice({ setAdvice, setIsLoading }) {
  async function handleAdvice() {
    setIsLoading(true);
    const data = await getAdvice();
    setIsLoading(false);
    setAdvice(data);
  }
  return (
    <button
      onClick={handleAdvice}
      className='absolute bg-neon-green p-5 rounded-full left-1/2 -translate-x-1/2 hover:cursor-pointer transition-all'
    >
      <img src='/images/icon-dice.svg' alt='icon dice' />
    </button>
  );
}
