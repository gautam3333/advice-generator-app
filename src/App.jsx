import { useEffect, useState } from 'react';

import Quote from './components/Quote';
import Dice from './components/Dice';
import Spinner from './components/Spinner';

import { getAdvice } from './getAdvice';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    setIsLoading(true);
    async function fetchAdvice() {
      const data = await getAdvice();
      setIsLoading(false);
      setAdvice(data);
    }
    fetchAdvice();
  }, []);

  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <section className='bg-dark-grayish-blue max-w-[340px] rounded-lg p-10 relative shadow-md sm:max-w-[490px]'>
            <Quote advice={advice} />
            <Dice setAdvice={setAdvice} setIsLoading={setIsLoading} />
          </section>
        </>
      )}
    </main>
  );
}
