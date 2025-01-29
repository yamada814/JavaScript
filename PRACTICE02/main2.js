import  ReservationService  from "./reservation-service.js";
const service = new ReservationService();
const id1 = service.reserve("Tanaka");
const id2 = service.reserve("Yamamoto");

const ids = [id1, id2, 100];
for (const id of ids) {
    const reservation = service.search(id);
    if (reservation) {
        console.log(reservation.toString());
    } else {
        console.log(`${id}の情報はありません`)
    }
}
service.delete(id1);
console.log(service.search(id1));
