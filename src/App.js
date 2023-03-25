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

let event = (e) => console.log(e.target);


const App = () => (
  <div>
    <Ian />

 {/* here I pass an object to Maria component */}
 {/* Maria component will then use this object to populate its HTML elements */}
    <Maria array={event} />
  </div>
);



class Ian extends React.Component {
  nome = "maria";
  site = (<h1>cruzes</h1>);

  faz() {
    console.log(this.props);
  }

  random() {
    return Math.random() * 10;
  }

  render = () => {

    console.log(this.props);

    return (
      <div onClick={() => this.faz()}>
        <h2>O numero também nao é </h2>
      </div>
    );
  };
}


let Maria = (props) => {

  let _props = props

  console.log(props)

  return (
    <div>


      <h2 onClick={_props.array}> aaaaaaaaaa </h2>
      

      
    </div>
  );


}

export default App;
