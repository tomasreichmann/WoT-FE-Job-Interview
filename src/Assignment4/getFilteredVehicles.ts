import vehicles from "../vehicles";

export default function getFilteredVehicles(queryText: string = "") {
  return new Promise((resolve, reject) => {
    const latency = Math.random() * 3000;
    const hasFilter = queryText.length > 0;
    const willFail = hasFilter && Math.random() < 0.1;

    setTimeout(() => {
      if (willFail) {
        return reject(new Error("500 Server Error"));
      }
      return resolve(
        hasFilter
          ? vehicles.filter((vehicle) =>
              vehicle.name.toLowerCase().includes(queryText.toLowerCase())
            )
          : vehicles
      );
    }, latency);
  });
}
