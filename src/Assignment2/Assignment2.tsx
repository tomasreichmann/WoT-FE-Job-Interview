import vehicles from "../vehicles";
import VehicleList from "./VehicleList";

export default function Assignment2({ controls }: { controls: JSX.Element }) {
  return (
    <div className="App">
      <div className="cols">
        <div>
          <h3 className="fileLabel">/src/Assignment2/VehicleList.tsx</h3>
          <VehicleList />
        </div>
        <div className="assignment">
          <h1>Assignment 2</h1>
          <h2>⬅ Generate this {`<VehicleList />`} from ../vehicles.ts</h2>
          <img src="/design2.png" alt="" />
          <h2>Bonus points:</h2>
          <ul>
            <li>sort the list by tier.</li>
          </ul>
          {controls}
        </div>
      </div>
    </div>
  );
}
