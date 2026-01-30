import DisplayCard from "./Components/DisplayCard/DisplayCard";
import Logo from "./Components/Logo/Logo";
import fireIcon from "./assets/fireIcon.svg";

function App() {
  return (
    <main className="container--default">
      <header className="flex">
        <Logo />
        <a href="#">Fitness Tracker</a>
      </header>
      <DisplayCard
        title="Today's workouts"
        details="Keep going!"
        icon_src={fireIcon}
      />
    </main>
  );
}

export default App;
