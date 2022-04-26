import { asyncGetQuotes, getQoutes} from "./services/promise-me";


export default function App() {
const handleClick = (callback) => {
  const result = callback();
  console.log(result);
}


  return <>
  <button onClick={() => handleClick(asyncGetQuotes)}>Async Get Quotes</button>
<button onClick={()=> handleClick(getQoutes)}>Get Quotes
  </button>
  </>;
}
