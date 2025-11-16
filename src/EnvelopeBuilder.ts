import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class EnvelopeBuilder implements GeometryVisitor {
    private xmin = Infinity;
    private ymin = Infinity;
    private xmax = -Infinity; 
    private ymax = -Infinity;

    public insert(coordinate: Coordinate): void {
        this.xmin = Math.min(this.xmin, coordinate[0]);
        this.ymin = Math.min(this.ymin, coordinate[1]);
        this.xmax = Math.max(this.xmax, coordinate[0]);
        this.ymax = Math.max(this.ymax, coordinate[1]);
    };

    public build(): Envelope {
            let bottomLeft = [this.xmin, this.ymin];
            let topRight = [this.xmax, this.ymax];
            //code pas très beau
            if (bottomLeft[0] == Infinity){
                const envelope = new Envelope();
                return envelope;
            }
            else{
                const envelope = new Envelope(bottomLeft, topRight);
                return envelope;
            }

    };

    public visitPoint(point: Point) {
        this.insert(point.getCoordinate());
    };

    public visitLineString(lineString: LineString) {
        for (let i = 0; i < lineString.getNumPoints(); i++){
            const point = lineString.getPointN(i);
            this.insert(point.getCoordinate());
        };
    };

    public visitGeometryCollection(g: GeometryCollection) {
        for (let i = 0; i < g.getNumGeometries(); i++){
            const geom = g.getGeometryN(i);
            geom.accept(this);
        };
    };
};