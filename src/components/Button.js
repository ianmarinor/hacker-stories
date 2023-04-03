import { useEffect, useState } from "react";



let i = -1;
export const Button = (props) => {
  const [text, setText] = useState(1);

  useEffect(
    ()=>{
      let timer = () => setInterval(
        ()=>{
          setText(
            (prev)=>prev+1
          )
        },1000
      )

    }, []
  )

  

  return (
    <div>
      <h1>{text.toString()[0]}</h1>
    </div>
  );
};

// se props.text for undefined, passara esse abaixo
Button.defaultProps = { text: "err" };
