// creazione lista invitati in ordine di posto
const invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
const tablename = 'Tavolo Vip';

const segnaposto = invitati.map((invitatiEl,index) =>{
    return {
        tableName : tablename,
        guestName: invitatiEl,
        place : index + 1
    }
});

console.log(segnaposto);