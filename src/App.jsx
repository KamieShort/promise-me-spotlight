import {
  asyncGetQuotes,
  getQoutes,
  asyncTryGetQuotes,
  asyncThenTryGetQuotes,
} from './services/promise-me';

export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  };

  return (
    <>
      <button onClick={() => handleClick(asyncGetQuotes)}>
        Async Get Quotes
      </button>
      <button onClick={() => handleClick(getQoutes)}>Get Quotes</button>

      <button onClick={async () => console.log(await asyncTryGetQuotes())}>
        {' '}
        asyncTryGetQuotes
      </button>
      <button onClick={async () => console.log(await asyncThenTryGetQuotes())}>
        {' '}
        asyncThenTryGetQuotes
      </button>
    </>
  );
}
