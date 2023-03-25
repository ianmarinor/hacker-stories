import * as React from "react";


let human = {
  head: false,
  armas: true,
  nails: [1,2,3,5],
  person: {
    name: 'Ian',
    surname: 'Marino'
  }
}

const App = () => (
  <div>
    <Ian />

 {/* here I pass an object to Maria component */}
 {/* Maria component will then use this object to populate its HTML elements */}
    <Maria human={human} />
  </div>
);



class Ian extends React.Component {
  nome = "maria";
  site = (<h1>cruzes</h1>);

  faz() {
    alert("cu");
  }

  random() {
    return Math.random() * 10;
  }

  render = () => {
    return (
      <div onClick={this.faz}>
        <h2>O numero também nao é </h2>
      </div>
    );
  };
}


let Maria = (props) => {

  let _props = props

  console.log(_props)

  return (
    <div>

      <h2>Name: {props.human.person.name}</h2>
      <h2>Surname: {props.human.person.surname}</h2>
      <h3>Number of nails: {props.human.nails[3]}</h3>
      <h3> {props.human.head ? 'ALIVE' : 'HEADLESS'}</h3>

      
    </div>
  );


}

export default App;
