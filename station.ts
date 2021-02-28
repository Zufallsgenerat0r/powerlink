import Point from "./point.ts";

class Station {
  location: Point;
  reach: number;

  constructor(location: Point, reach: number) {
    this.location = location;
    this.reach = reach;
  }

  //Calculate the powerlevel with pythagorean theorem and the reach variable
  public getPowerLevelFrom(somewhere: Point): number {
    const distance = Math.sqrt(
      Math.pow(somewhere.x - this.location.x, 2) +
        Math.pow(somewhere.y - this.location.y, 2),
    );

    if (distance > this.reach) {
      return 0;
    }

    return Math.pow(this.reach - distance, 2);
  }
}

export default Station;
