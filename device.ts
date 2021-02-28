import Point from "./point.ts";
import Station from "./station.ts";

class Device {
  location: Point;

  constructor(location: Point) {
    this.location = location;
  }

  getMaxPowerStation(stations: Array<Station>) {
    const stationsPowerLevel = stations
      .map((station) => {
        return {
          location: station.location,
          reach: station.reach,
          power: station.getPowerLevelFrom(this.location),
        };
      });

    const stationsWithConnectivity = stationsPowerLevel
      .filter((station) => {
        return station.power > 0;
      });

    const stationsInPowerlevelOrder = stationsWithConnectivity.sort(
      (stationA, stationB) => {
        return stationA.power - stationB.power;
      },
    );

    return stationsInPowerlevelOrder.pop();
  }
}

export default Device;
