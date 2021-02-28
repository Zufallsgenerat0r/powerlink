import { assertEquals } from "https://deno.land/std@0.85.0/testing/asserts.ts";
import Station from "./station.ts";
import Point from "./point.ts";

Deno.test("that the powerlevel is max when we are exactly on the powerstation", () => {
  const station = new Station(new Point(0, 0), 10);
  const point = new Point(0, 0);
  assertEquals(station.getPowerLevelFrom(point), 100);
});

Deno.test("that the powerlevel is correct when we are within reach", () => {
  const station = new Station(new Point(0, 0), 10);
  const point = new Point(9, 0);
  assertEquals(station.getPowerLevelFrom(point), 1);
});

Deno.test("that we have no coverage when out of reach", () => {
  const station = new Station(new Point(0, 0), 10);
  const point = new Point(10, 0);
  assertEquals(station.getPowerLevelFrom(point), 0);
});
