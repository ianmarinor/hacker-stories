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


  constructor(props){
    super(props)
    this.state = {isValid: 'true.',parente: 'Selecione um Parente'}
    this.toggleState = this.toggleState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    console.log(this);
    
  }

  toggleState(){
    
    let newValue = this.state.isValid == 'true' ? this.state.isValid = 'false ' : this.state.isValid = 'true'
    this.setState({isValid:newValue})
    console.log('aaaaaaaaa');
  }

  handleChange(e){
     this.setState({parente: e.target.value}) 
    
  }

  render() {

    return (

      <div>

        <h1>{this.state.parente}</h1>
        <Button  onChange={this.handleChange} text={this.state.isValid} />
      </div>

    )

    
  }
}

export default App;
