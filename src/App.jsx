import DisplayCard from "./Components/DisplayCard/DisplayCard";
import Logo from "./Components/Logo/Logo";
import fireIcon from "./assets/fireIcon.svg";
import zigArrowIcon from "./assets/zigArrowIcon.svg";
import bullseyeIcon from "./assets/bullseyeIcon.svg";

function App() {
  return (
    <div className="container--default">
      <header className="flex">
        <Logo color="#b3cfb3;" />
      </header>
      <main>
        <section className="flex--overview">
          <DisplayCard
            title="Today's workouts"
            details="Keep going!"
            variant="fire"
            icon_src={fireIcon}
          />
          <DisplayCard
            title="Weekly streak"
            details="TODO: Keep going!"
            variant="zigArrow"
            icon_src={zigArrowIcon}
          />
          <DisplayCard
            title="Weekly goal"
            details="TODO: days in a row"
            variant="bullseye"
            icon_src={bullseyeIcon}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
