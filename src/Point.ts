import AbstractGeometry from "./AbstractGeometry";
import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class Point extends AbstractGeometry{
  private coordinate?: Coordinate;

  public constructor(coordinate?: Coordinate) {
    super();
    this.coordinate = coordinate ? coordinate : [];
  }

  public getType(): string {
    return "Point";
  }

  public isEmpty(): boolean {
    return this.coordinate.length == 0;
  }

  public clone(): Point {
    const clone = new Point([this.x(), this.y()]);
    return clone;
  }

  public translate(dx: number, dy: number) {
    this.coordinate[0] += dx;
    this.coordinate[1] += dy;
  }

  public accept(visitor: GeometryVisitor){
    return visitor.visitPoint(this);
  }

  public getCoordinate(): Coordinate {
    return this.coordinate;
  }

  public x(): number {
    return this.coordinate[0];
  }

  public y(): number {
    return this.coordinate[1];
  }

}
