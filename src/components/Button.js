
export const Button = (props) =>{
    
    

    return <button>{props.text}</button>


}
// se props.text for undefined, passara esse abaixo
Button.defaultProps = {text:'err'}