import * as React from "react";
import { Button } from "./components/Button";

let human = {
  head: false,
  armas: true,
  nails: [1, 2, 3, 5],
  person: {
    name: "Ian",
    surname: "Marino",
  },
};

let handleClick = (e) => {
  e.target.style.width = "500px";
  e.target.style.height = "500px";
};

let Text = () => {
  return <h1>AFDAGDAGDAG</h1>;
};

class App extends React.Component {
  render() {
    return <Button text='CLIQUE AQUI'/>

    
  }
}

export default App;
