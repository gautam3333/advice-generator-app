export default function Quote({ advice }) {
  return (
    <div>
      <h1 className='uppercase tracking-[5px] text-[10px] text-neon-green font-bold text-center font-sans'>
        Advice #{advice?.slip?.id}
      </h1>
      <p className='text-[22px] text-center font-bold font-sans text-light-cyan py-6 sm:text-2xl sm:py-8'>
        &ldquo;{advice?.slip?.advice}&rdquo;
      </p>
      <img
        src='/images/pattern-divider-mobile.svg'
        alt='pattern-divider-mobile'
        className='mb-8 object-cover sm:hidden'
      />
      <img
        src='/images/pattern-divider-desktop.svg'
        alt='pattern-divider-mobile'
        className='mb-14 object-cover hidden sm:block'
      />
    </div>
  );
}
