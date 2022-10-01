// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);



function writeCards(names, event){
    const thankyoucards = []
    for (let i = 0; i < names.length; i++){
        thankyoucards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankyoucards
}

function countDown(i){
    while (i >= 0){
        console.log(i)
        i--
    }
}


// console.log(writeCards(['George', 'Anne', 'Suzy'], 'birthday'))
// console.log(writeCards(['June', 'Bob', 'Jack'], 'easter'))

// thankyoucards.push()
// invoking the function