import GeometryCollection from "./GeometryCollection";
import LineString from "./LineString";
import Point from "./Point";


export default interface GeometryVisitor<T>{
    visitPoint(point: Point);
    visitLineString(lineString: LineString);
    visitGeometryCollection(g:GeometryCollection)
}