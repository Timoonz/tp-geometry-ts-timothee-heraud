import Geometry from "./Geometry";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";
import EnvelopeBuilder from "./EnvelopeBuilder";

export default abstract class AbstractGeometry implements Geometry{
        abstract getType(): string;
        abstract isEmpty(): boolean;
        abstract translate(dx:number, dy:number);
        abstract clone(): Geometry;
        abstract accept<T>(visitor: GeometryVisitor<T>): T;

        public asText(): string{
            const wktVisitor = new WktVisitor();
            this.accept(wktVisitor);
            return wktVisitor.getResult();
        };

        public getEnvelope():Envelope {
            const builder = new EnvelopeBuilder();
            this.accept(builder);
            return builder.build();
        };
}