import vehicles from "../vehicles";
import VehicleFilter from "./VehicleFilter";

export default function Assignment3({ controls }: { controls: JSX.Element }) {
  return (
    <div className="App">
      <div className="cols">
        <div>
          <h3 className="fileLabel">/src/Assignment3/VehicleFilter.tsx</h3>
          <VehicleFilter />
        </div>
        <div className="assignment">
          <h1>Assignment 3</h1>
          <h2>
            Filter the list of vehicles in {`<VehicleList />`} using an text
            field
          </h2>
          <img src="/design3.png" alt="" />
          <h2>Bonus points:</h2>
          <ul>
            <li>Make filter case-insensitive</li>
            <li>Clear on Escape</li>
            <li>Style the input</li>
          </ul>
          {controls}
        </div>
      </div>
    </div>
  );
}
