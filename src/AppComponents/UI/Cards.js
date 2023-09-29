import "./Cards.css";
function Card(props) {
  // props ==>here we cannot give the props explicitly but it takes the props internally
  let style = "card " + props.className; //we have combine the style which is different in their component and common style in this component ,follow the syntax properly
  return <div className={style}>{props.children}</div>; //children is the reserved word to wrap the all jsx code inside this div,where we use this card component.
}

export default Card;
