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


 const targhe = studenti.map((targheEL)=>{
    return targheEL.name.toUpperCase();
 })
 console.log(targhe);


const studMag70 = studenti.filter((studentiEl)=>{
    return studentiEl.grades > 70 ;
})

console.log(studMag70);

const studMag120 = studenti.filter((studentiEl)=>{
    return studentiEl.grades > 70 && studentiEl.id > 120;
})

console.log(studMag120);

// SNACK3
// creazione lista bici da corsa 
 const raicingBike = 
 [  
    {
        name : 'bici0',
        weight : 150
    },
    {
        name : 'bici1',
        weight : 15
    },
    {
        name : 'bici2',
        weight : 30
    },
    {
        name : 'bici3',
        weight : 45
    },
    {
        name : 'bici4',
        weight : 60
    },
    {
        name : 'bici5',
        weight : 75
    },
    {
        name : 'bici6',
        weight : 90
    }
 ]

let pesoforCalc = 500;
let biciLegg;

 raicingBike.forEach((element) => {
 const { weight } = element 
 
  if ( pesoforCalc > weight ) {
        pesoforCalc = weight
       biciLegg = element.name;
  }
 });


const template = `ciao la bici bici più leggera è la ${biciLegg} con un peso di ${pesoforCalc}`
 
 console.log(template);

//  SNACK4
// creare un array con le squadre di calcio
const soccerTeam = 
[
    {
        nome : 'JUVE',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome : 'BARCELLONA',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome : 'CAGLIARI',
        puntiFatti: 0,
        falliSubiti: 0
    }
]

soccerTeam.forEach((element) => {
   
    element.puntiFatti = getRndInteger(1,100)
    element.falliSubiti = getRndInteger(1,100)
    let punti = element.puntiFatti
    let falli =  element.falliSubiti
    console.log(punti,falli);
    
});

const newArray = soccerTeam.filter((element)=>{
    let {nome,falliSubiti} = element
     let template =`${nome}, ${falliSubiti}`
     console.log(template);
    })
