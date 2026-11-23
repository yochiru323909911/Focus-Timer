import { useContext } from "react";
import { ThemeContext } from "../App";

function ThemeButton() {
  console.log('render: ThemeButton')

  const { light, toggleLight } = useContext(ThemeContext);

  return <button className="theme-button" onClick={toggleLight}>{light ? "Dark mode" : "Light mode"}</button>
}

export default ThemeButton
