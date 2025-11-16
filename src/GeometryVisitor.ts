import GeometryCollection from "./GeometryCollection";
import LineString from "./LineString";
import Point from "./Point";


export default interface GeometryVisitor{
    visitPoint(point: Point);
    visitLineString(lineString: LineString);
    visitGeometryCollection(g:GeometryCollection)
}