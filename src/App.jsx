import DisplayCard from "./Components/DisplayCard/DisplayCard";
import Logo from "./Components/Logo/Logo";
import fireIcon from "./assets/fireIcon.svg";

function App() {
  return (
    <div className="container--default">
      <header className="flex">
        <Logo color="#b3cfb3;" />
      </header>
      <main>
        <DisplayCard
          title="Today's workouts"
          details="Keep going!"
          icon_src={fireIcon}
        />
      </main>
    </div>
  );
}

export default App;
