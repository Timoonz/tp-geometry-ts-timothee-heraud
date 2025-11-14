import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";
import WktWriter from "../src/WktWriter";



export default class WktVisitor implements GeometryVisitor {
    
    private buffer: string;

    public visitPoint(point: Point) {
        const writer = new WktWriter();
        const result = writer.write(point);
        this.buffer = result;
    };

    public visitLineString(lineString: LineString) {
        const writer = new WktWriter();
        const result = writer.write(lineString);
        this.buffer = result;
    };

    public getResult(): string {
        return this.buffer;
    };

};