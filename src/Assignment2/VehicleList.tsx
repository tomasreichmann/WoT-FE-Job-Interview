import Vehicle from "../Assignment1/Vehicle";
import vehicles from "../vehicles";
import "./VehicleList.css";

// const tierOrder = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function VehicleList() {
  return (
    <div className="VehicleList">
      {/* <Vehicle /> */}
      <pre>
        vehicles.ts:&ensp;
        {JSON.stringify(vehicles, null, 2)}
      </pre>
    </div>
  );
}
