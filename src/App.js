import * as React from "react";
import { Button } from "./components/Button";
import { Button2 } from "./components/Button2";
import { Interval } from "./components/interval";



class App extends React.Component {


  constructor(props){
    super(props)
    this.state = {isValid: 'true.',parente: 'Selecione um Parente'}
    this.toggleState = this.toggleState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // console.log(this);
    
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

       
        <Button2 />
        <Button />
        <Interval/>
      </div>

    )

    
  }
}

export default App;
