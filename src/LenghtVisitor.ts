import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";


export default class LengthVisitor implements GeometryVisitor<number> {
    
    public visitPoint(point: Point): number {
        return 0.0;
    };

    public visitLineString(lineString: LineString): number  {
        return lineString.getNumPoints();
    };

    public visitGeometryCollection(g: GeometryCollection): number {
        let length = 0.0;
        for (let i =0; i < g.getNumGeometries(); i++){
            //Si c'est un simple point, on augmente pas la longueur
            let geom = g.getGeometryN(i); 
            if (geom instanceof LineString){
                length += geom.getNumPoints();
            }
        }
    return length;
    };

}