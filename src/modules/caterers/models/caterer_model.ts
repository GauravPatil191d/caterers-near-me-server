export interface CatereresModelProp {
  id?: string;
  name: string;
  location?: string;
  price_per_plate: number;
  cuisiness: string[];
  rating: number;
  created_at?: Date;
  updated_at?: Date;
}

export class CaterersModel implements Required<CatereresModelProp> {
  id: string;
  name: string;
  location: string;
  price_per_plate: number;
  cuisiness: string[];
  rating: number;
  created_at: Date;
  updated_at: Date;

  constructor(_prop: CatereresModelProp) {
    this.id = _prop.id ?? "";
    this.name = _prop.name;
    this.location = _prop.location ?? "";
    this.price_per_plate = _prop.price_per_plate;
    this.cuisiness = _prop.cuisiness;
    this.rating = _prop.rating;
    this.created_at = _prop.created_at ?? new Date();
    this.updated_at = _prop.updated_at ?? new Date();
  }
}
export default CaterersModel;
