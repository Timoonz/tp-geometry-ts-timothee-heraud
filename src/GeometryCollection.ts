import AbstractGeometry from "./AbstractGeometry";
import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";


export default class GeometryCollection extends AbstractGeometry{

    private geometries: Array<Geometry>

    public constructor(geometries ?: Array<Geometry>){
        super();
        this.geometries = geometries || [];
    }

    public getType(): string {
        return "GeometryCollection";
    }

    public isEmpty(): boolean {
        return this.geometries.length == 0;
    }

    public translate(dx: number, dy: number) {
        for (let geometry of this.geometries) {
            geometry.translate(dx, dy);
        }
    }

    public clone(): Geometry {
        const geometryArray = new Array<Geometry>;
        for (let geometry of this.geometries) {
            const newGeom = geometry.clone();
            geometryArray.push(newGeom);
        }
        const clone = new GeometryCollection(geometryArray);
        return clone;
    }


    public accept(visitor: GeometryVisitor): void {
        visitor.visitGeometryCollection(this);
    }


    //Fonctions spécifiques à GeometryCollection
    public getNumGeometries(): number {
        return this.geometries.length;
    }

    public getGeometryN(n: number): Geometry {
        return this.geometries[n];
    }
}