import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";
import Coordinate from "./Coordinate";


export default class WktWriter{
    public write(geometry: Geometry): string {
        if (geometry instanceof Point ){
            return this.writePoint(geometry);
        }
        else if (geometry instanceof LineString ){
            return this.writeLineString(geometry);
        }else{
            throw new TypeError("geometry type not supported");
        }
    }

    private writePoint(p: Point){
        if (p.isEmpty()){
            return "POINT EMPTY";
        }
        else {
            let result = "POINT(";
            result += this.writeCoordinates(p.getCoordinate());
            result += ")";
            return result;
        }
        
    }

    private writeLineString(l: LineString){
        if (l.isEmpty()){
            return "LINESTRING EMPTY";
        }
        else {
            let result = "LINESTRING(";
            for (let i = 0; i < l.getNumPoints(); i++){
                result += this.writeCoordinates(l.getPointN(i).getCoordinate())
                if (i != l.getNumPoints() - 1){
                    result += ",";
                }
            }
            result += ")";
            return result;
        }
    };

    private writeCoordinates(c: Coordinate) {
        return c[0].toFixed(1)+" "+c[1].toFixed(1);
    };
}