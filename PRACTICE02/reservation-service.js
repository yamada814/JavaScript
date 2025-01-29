import  Reservation  from "./reservation.js";
export default class ReservationService{
    #nextId;
    #reservations;
    constructor() {
        this.#nextId = 1;
        this.#reservations = new Map();
    };
    reserve(name) {
        if (name === undefined) {
            return false;            
        } else {
            const id = this.#nextId++;
            this.#reservations.set(id, new Reservation(id, new Date(), name));
            return this.#nextId;
        }
    };
    search(id) {
            return this.#reservations.get(id);
    };
    delete(id) {
        return this.#reservations.delete(id);
    }
}