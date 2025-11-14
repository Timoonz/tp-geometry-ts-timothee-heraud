import Geometry from "./Geometry";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry{
        abstract getType(): string;
        abstract isEmpty(): boolean;
        abstract translate(dx:number, dy:number);
        abstract clone(): Geometry;
        abstract getEnvelope(): Envelope;
        abstract accept(visitor: GeometryVisitor): void;

        public asText(): string{
            const wktVisitor = new WktVisitor();
            this.accept(wktVisitor);
            return wktVisitor.getResult();
        };
}