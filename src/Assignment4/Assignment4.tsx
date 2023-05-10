import vehicles from "../vehicles";
import VehicleLoader from "./VehicleLoader";

export default function Assignment4({ controls }: { controls: JSX.Element }) {
  return (
    <div className="App">
      <div className="cols">
        <div>
          <h3 className="fileLabel">/src/Assignment4/VehicleLoader.tsx</h3>
          <VehicleLoader />
        </div>
        <div className="assignment">
          <h1>Assignment 4</h1>
          <h2>
            Retreive the list of filtered vehicles by calling asynchroneous
            'getFilteredVehicles(queryText)' without directly accessing
            vehicles.ts as if it is on a server.
          </h2>
          <h2>Bonus points:</h2>
          <ul>
            <li>Handle errors</li>
            <li>Handle pending requests</li>
            <li>
              What optimization do you recommend to lower the performance load,
              if getFilteredVehicles is an expensive operation?
            </li>
            <li>
              What do you need to take into account if the response latency is
              unpredictable? (10ms..2000ms)
            </li>
          </ul>
          {controls}
        </div>
      </div>
    </div>
  );
}
