import GeometryVisitor from "./GeometryVisitor";
import Coordinate from "./Coordinate";
import LineString from "./LineString";
import Point from "./Point";
import WktWriter from "../src/WktWriter";
import GeometryCollection from "./GeometryCollection";



export default class WktVisitor implements GeometryVisitor<string> {
    
    private buffer: string;

    public visitPoint(point: Point) {
        if (point.isEmpty()){
            this.buffer = "POINT EMPTY";
        }
        else {
            let result = "POINT(";
            result += this.writeCoordinates(point.getCoordinate());
            result += ")";
            this.buffer = result;
        }
    };

    public visitLineString(lineString: LineString) {
        if (lineString.isEmpty()){
            this.buffer = "LINESTRING EMPTY";
        }
        else {
            let result = "LINESTRING(";
            for (let i = 0; i < lineString.getNumPoints(); i++){
                result += this.writeCoordinates(lineString.getPointN(i).getCoordinate());
                if (i != lineString.getNumPoints() - 1){
                    result += ",";
                }
            }
            result += ")";
            this.buffer = result;
        }
    };

    public getResult(): string {
        return this.buffer;
    };

    private writeCoordinates(c: Coordinate) {
        return c[0].toFixed(1)+" "+c[1].toFixed(1);
    };

    public visitGeometryCollection(g: GeometryCollection) {
        if (g.isEmpty()){
            this.buffer = "GEOMETRYCOLLECTION EMPTY";
        }
        else {
            let result = "GEOMETRYCOLLECTION(";
            for (let i = 0; i < g.getNumGeometries(); i++){
                const geom = g.getGeometryN(i);
                    result += geom.asText();
                if(i < g.getNumGeometries() - 1){
                    result += ",";
                }
            }
            result += ")";
            this.buffer = result;
        }
    };

};