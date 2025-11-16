import Geometry from "./Geometry";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryWithCachedEnvelope  implements Geometry{
    private original: Geometry;
    private cachedEnvelope: Envelope;


    public constructor (original: Geometry){
        this.original = original;
        this.cachedEnvelope = new Envelope();
    }

    public getType(): string {
        return this.original.getType();
    }

    public isEmpty(): boolean {
        return this.original.isEmpty();
    }

    // INVALIDATE THE CACHED ENVELOPE
    public translate(dx: number, dy: number) {
        this.original.translate(dx, dy);
        this.cachedEnvelope = new Envelope();
    }

    public clone(): Geometry {
        const clone = new GeometryWithCachedEnvelope(this.original.clone());
        // Si l'original de GeometryWithCachedEnvelope avait déjà un cache de calculé, on le recalcule
        if (!this.cachedEnvelope.isEmpty()) {
            clone.getEnvelope();
        }
        return clone;
    }

    public getEnvelope(): Envelope {
        if (this.cachedEnvelope.isEmpty()){
            const envelope = this.original.getEnvelope();
            this.cachedEnvelope = envelope;
        }
        return this.cachedEnvelope;
    }

    public accept<T>(visitor: GeometryVisitor<T>): T{
        return this.original.accept(visitor);
    }

    public asText(): string {
        return this.original.asText();
    }
}