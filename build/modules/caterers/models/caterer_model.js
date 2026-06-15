export class CaterersModel {
    id;
    name;
    location;
    price_per_plate;
    cuisiness;
    rating;
    created_at;
    updated_at;
    constructor(_prop) {
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
