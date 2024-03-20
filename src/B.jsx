import useCounter from './useCounter';
import useFetch from './utils/useFetch';

function B() {
    const {counter, Increment} = useCounter();

    // another logic
    const data = useFetch("https://api.github.com/users");
  return (
    <div>
        <h1>Testing Counter</h1>
        <h2>{counter}</h2>
        <button onClick={Increment}>Counter</button>
    </div>
  )
}

export default B;