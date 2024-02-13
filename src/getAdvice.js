export async function getAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  return data;
}
