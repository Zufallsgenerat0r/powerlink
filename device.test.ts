import { assertEquals } from "https://deno.land/std@0.85.0/testing/asserts.ts";
import Device from "./device.ts";
import Station from "./station.ts";
import Point from "./point.ts";

Deno.test("that nearest station is returned", () => {
  const stations = [
    new Station(new Point(0, 0), 10),
    new Station(new Point(20, 20), 5),
    new Station(new Point(10, 0), 12),
  ];
  const device = new Device(new Point(0, 0));
  assertEquals(
    device.getMaxPowerStation(stations)!.location,
    stations[0].location,
  );
});

Deno.test("that no station is returned if none in reach", () => {
  const stations = [
    new Station(new Point(0, 0), 10),
    new Station(new Point(20, 20), 5),
    new Station(new Point(10, 0), 12),
  ];
  const device = new Device(new Point(100, 100));
  assertEquals(device.getMaxPowerStation(stations), undefined);
});
