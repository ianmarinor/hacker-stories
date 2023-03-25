
export const Button = (props) =>{
    
    

    return <button onClick={props.onClick}  >{props.text}</button>


}
// se props.text for undefined, passara esse abaixo
Button.defaultProps = {text:'err'}