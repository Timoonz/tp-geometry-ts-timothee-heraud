import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";


export default class LogGeometryVisitor implements GeometryVisitor {
    
    public visitPoint(point: Point): string {
        if (point.isEmpty()){
            //en temps normal: console.log("Je suis un point vide.")
            //pour les tests: return string
            return "Je suis un point vide.";
        }
        else {
            //console.log(...)
            return "Je suis un point avec x="+point.getCoordinate()[0].toFixed(1)+" et y="+point.getCoordinate()[1].toFixed(1)+".";
        }
    }

    public visitLineString(lineString: LineString): string {
        if (lineString.isEmpty()){
            return "Je suis une polyligne vide.";
        }
        else {
            return "Je suis une polyligne définie par "+lineString.getNumPoints()+" point(s)."
        }
    }
}