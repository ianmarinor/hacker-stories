import { useState } from "react";



let i = -1;
export const Button = (props) => {
  const [text, setText] = useState('');


  const eventHandler =({target})=>{
    let texto = target.value
    console.log();
    setTimeout(
      ()=>
      setText(texto)
    ,1000)

  }

  return (
    <div>
      <h1>{text}</h1>
      <input type="text" onChange={eventHandler} />
    </div>
  );
};

// se props.text for undefined, passara esse abaixo
Button.defaultProps = { text: "err" };
