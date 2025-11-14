import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";


export default class LogGeometryVisitor implements GeometryVisitor {
    
    constructor(
        private log = console.log
    ){

    }

    public visitPoint(point: Point): void {
        if (point.isEmpty()){
           this.log("Je suis un point vide.");
        }
        else {
            this.log("Je suis un point avec x="+point.getCoordinate()[0].toFixed(1)+" et y="+point.getCoordinate()[1].toFixed(1)+".");
        }
    }

    public visitLineString(lineString: LineString): void {
        if (lineString.isEmpty()){
            this.log("Je suis une polyligne vide.");
        }
        else {
            this.log("Je suis une polyligne définie par "+lineString.getNumPoints()+" point(s).");
        }
    }
}