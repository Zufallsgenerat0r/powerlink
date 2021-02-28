import Point from "./point.ts";
import Device from "./device.ts";
import Station from "./station.ts";

const stations = [
  new Station(new Point(0, 0), 10),
  new Station(new Point(20, 20), 5),
  new Station(new Point(10, 0), 12),
];

const devices = [
  new Device(new Point(0, 0)),
  new Device(new Point(100, 100)),
  new Device(new Point(15, 10)),
  new Device(new Point(18, 18)),
];

devices.map((device) => {
  const maxPowerStation = device.getMaxPowerStation(stations);
  if (maxPowerStation) {
    console.log(
      `Best link station for point ${device.location.x},${device.location.y} is ${maxPowerStation.location.x},${maxPowerStation.location.y} with power ${maxPowerStation.power}`,
    );
  } else {
    console.log(
      `No link station within reach for point ${device.location.x},${device.location.y}`,
    );
  }
});
