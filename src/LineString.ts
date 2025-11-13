import Point from "./Point"
import Geometry from "./Geometry";

export default class LineString implements Geometry{
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
        //if the user pass only one point, create an empty array
        if (points && points.length != 1 && points.length != 0){
            this.points = points;
        }

    }

    getType(): string {
        return "LineString";
    }

    getNumPoints(): number {
        return this.points ? this.points.length : 0;
    }

    getPointN(n: number): Point{
        return this.points ? this.points[n] : undefined;
    }
}