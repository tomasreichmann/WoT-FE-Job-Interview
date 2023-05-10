import vehicles from "../vehicles";
import Vehicle from "./Vehicle";

export default function Assignment1({ controls }: { controls: JSX.Element }) {
  return (
    <div className="App">
      <div className="cols">
        <div>
          <h3 className="fileLabel">/src/Assignment1/Vehicle.tsx</h3>
          <Vehicle {...vehicles[0]} />
        </div>
        <div className="assignment">
          <h1>Assignment 1</h1>
          <h2>
            ⬅ Make this {`<Vehicle />`}
            <br />
            look like the design ⬇
          </h2>
          <img src="/design.png" alt="" />
          <h2>Bonus points:</h2>
          <ul>
            <li>
              Make the {`<Vehicle />`} look good in sizes other than 160x100
            </li>
            <li>Handle long vehicle names</li>
            <li>Define a VehicleProps type</li>
          </ul>
          {controls}
        </div>
      </div>
    </div>
  );
}
