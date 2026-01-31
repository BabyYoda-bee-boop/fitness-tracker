import DisplayCard from "./Components/DisplayCard/DisplayCard";
import fireIcon from "./assets/fireIcon.svg";
import zigArrowIcon from "./assets/zigArrowIcon.svg";
import bullseyeIcon from "./assets/bullseyeIcon.svg";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";

function App() {
  return (
    <div className="container--default">
      <Header />
      <main>
        <Section variant="overview">
          <DisplayCard
            title="Today's workouts"
            details="Keep going!"
            variant="fire"
            icon_src={fireIcon}
            output="TODO 3"
          />
          <DisplayCard
            title="Weekly streak"
            details="TODO: days in a row!"
            variant="zigArrow"
            icon_src={zigArrowIcon}
            output="TODO 4"
          />
          <DisplayCard
            title="Weekly goal"
            details="TODO: days in a row"
            variant="bullseye"
            icon_src={bullseyeIcon}
            output="TODO 75%"
          />
        </Section>
      </main>
    </div>
  );
}

export default App;
