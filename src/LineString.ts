import Point from "./Point"
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";

export default class LineString extends AbstractGeometry{
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
        super();
        this.points = points || [];
    }

    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.points.length == 0;
    }

    clone(): LineString {
        const pointArray = new Array<Point>;
        for (let point of this.points) {
            const newPoint = point.clone();
            pointArray.push(newPoint);
        }
        const clone = new LineString(pointArray);
        return clone;
    }

    translate(dx: number, dy: number) {
       for (let point of this.points){
            point.translate(dx, dy);
       }     
    }

    // getEnvelope(): Envelope {
    //     const builder = new EnvelopeBuilder();
    //     for (let point of this.points) {
    //         builder.insert(point.getCoordinate());
    //     }
    //     const result = builder.build();
    //     return result;
    // }

    accept(visitor: GeometryVisitor){
        return visitor.visitLineString(this);
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point{
        return this.points[n];
    }
}