import logo from "./logo.svg";
import "./App.css";
import ShapesArray from "./components/ShapesArray";

const colors = [
  "#dele7e",
  "#BADA55",
  "#facade",
  "#00ff00",
  "#0000ff",
  "#bada55",
  "#c0ffee",
];

function App() {
  // set the style
  const style = {
    backgroundColor: "#c0ffee",
    height: "100vh",
    width: "100vw",
    color: "#0000ff",
  };

  const h1Style = {
    color: colors[Math.floor(Math.random() * colors.length)],
    fontSize: `${window.innerHeight / 5}px`,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={style}>
      <ShapesArray colors={colors} amount={8} />
      <ShapesArray colors={colors} amount={8} />
      <h1 style={h1Style}>{"<App />"}</h1>
      <ShapesArray colors={colors} amount={8} />
      <ShapesArray colors={colors} amount={8} />
    </div>
  );
}

export default App;
