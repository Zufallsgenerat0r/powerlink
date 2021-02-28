export interface Point {
  x: number;
  y: number;
}

export interface Station {
  location: Point;
  reach: number;
}

export interface Device {
  location: Point;
}
