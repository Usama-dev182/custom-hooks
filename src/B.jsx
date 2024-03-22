import { useContext } from 'react';
import useCounter from './useCounter';
import useFetch from './utils/useFetch';
import { BioData } from './A';
function B() {
    const {counter, Increment} = useCounter();
    const dataq =  useContext(BioData);

    // another logic
    const data = useFetch("https://api.github.com/users");
  return (
    <div>
        <h1>Testing Counter</h1>
        <h2>Props {dataq}</h2>
        <h2>{counter}</h2>
        <button onClick={Increment}>Counter</button>
    </div>
  )
}

export default B;