import AbstractGeometry from "./AbstractGeometry";
import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class Point extends AbstractGeometry{
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
    this.coordinate = coordinate ? coordinate : [];
  }

  getType(): string {
    return "Point";
  }

  isEmpty(): boolean {
    return this.coordinate.length == 0;
  }

  clone(): Point {
    const clone = new Point([this.x(), this.y()]);
    return clone;
  }

  translate(dx: number, dy: number) {
    this.coordinate[0] += dx;
    this.coordinate[1] += dy;
  }

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    builder.insert(this.getCoordinate());
    const result = builder.build();
    return result;
  }

  accept(visitor: GeometryVisitor){
    return visitor.visitPoint(this);
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate[0];
  }

  y(): number {
    return this.coordinate[1];
  }

}
