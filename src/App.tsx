import { useEffect, useState, useRef } from 'react'

function App() {
  const [state, setState] = useState(0);
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0);
  const prevStateRef = useRef(0);

  // Use Effect sem re-renderizar

  useEffect(() => {
    // setNumber(prevNumber => prevNumber + 1);
    numberRef.current = numberRef.current + 1;
  })

  // Persistência de dados em cada re-renderização

  useEffect(() => {
    prevStateRef.current = state;
  }, [state])

  return (
    <>
      <h1>{state}</h1>
      <h1>{numberRef.current}</h1>
      <h1>{prevStateRef.current}</h1>
      <button onClick={() => setState(prevState => prevState + 1)}>Clique</button>
    </>
  );
}

export default App
