export const Button = (props) => {


  return (
    <select onChange={props.onChange}>
      <option>Mae</option>
      <option>Pai</option>
      <option>Tio</option>
    </select>
  );
};
// se props.text for undefined, passara esse abaixo
Button.defaultProps = { text: "err" };
