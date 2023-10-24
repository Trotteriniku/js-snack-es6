'use strict'


// SNACK1
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


// SNACK2

// creazione lista studenti (oggetti)
const studenti = 
[
    {
        id : 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id : 110,
        name: 'Paola melassa',
        grades: 96
    },
    {
        id : 250,
        name: 'Andrea mantecatura',
        grades: 48
    },
    {
        id : 145,
        name: 'Giula baratella',
        grades: 74
    },
    {
        id : 196,
        name: 'luigi pirandello',
        grades: 100
    },
    {
        id : 102,
        name: 'Piero della francesca',
        grades: 68
    },
    {
        id : 120,
        name: 'Francesca totti',
        grades: 84
    }
] 