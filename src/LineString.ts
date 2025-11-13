import Point from "./Point"
import Geometry from "./Geometry";

export default class LineString implements Geometry{
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
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

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point{
        return this.points[n];
    }
}