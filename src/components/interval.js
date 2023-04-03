import { useEffect, useState } from "react";

export const Interval = (props) => {
  const [intervalId, setIntervalId] = useState(null);

  //Id to setInterval abstraido para que seja possivel para-lo fora de seu bloco
  const [crono, setCrono] = useState(0);

  //funçao que começa o setInterval e abstrai seu Id
  const startInterval = () => {
    console.log(888888888888888);

    let timer = setInterval(() => {
      setCrono((prev) => prev + 1);
    }, 1);

    setIntervalId(timer);
  };

  // intervalo comça com o mount do componente
  useEffect(() => startInterval(), []);

  // intervalo para quando crono for >= 100
  useEffect(() => {
    if (crono >= 100) {
      stopInterval();
    }
  }, [crono]);

  // funçao que usa o setInterval abstraido para para-lo
  const stopInterval = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <h1>INTERVAL</h1>
      <h3>{crono}</h3>
      {/* <button  onClick={ intervalId == null ? startInterval : stopInterval}>COMECAR INTERVAL</button> */}
      <button onClick={stopInterval}>COMECAR INTERVAL</button>
    </div>
  );
};
