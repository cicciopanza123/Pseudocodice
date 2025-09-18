// ES. 3 - Saluti
let n = prompt("Premi 1 per 'CIAO', 2 per 'BUONGIORNO', 3 per 'BUONANOTTE':");

switch (n) {
    case "1":
        console.log("CIAO");
        break;
    case "2":
        console.log("BUONGIORNO");
        break;
    case "3":
        console.log("BUONANOTTE");
        break;
    default:
        console.log("Scelta non valida");
}
