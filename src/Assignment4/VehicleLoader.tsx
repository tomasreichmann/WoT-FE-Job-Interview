import VehicleList from "../Assignment2/VehicleList";
import getFilteredVehicles from "./getFilteredVehicles";
import "./VehicleLoader.css";

export default function VehicleLoader() {
  // getFilteredVehicles();
  const filteredVehicles = [];
  return (
    <div className="VehicleLoader">
      <input type="text" placeholder="Filter by vehicle name" />
      <VehicleList vehicles={filteredVehicles} />
      <pre>{JSON.stringify(filteredVehicles, null, 2)}</pre>
    </div>
  );
}
