function zodiacTime(year){
    var zodiac;
    switch(year % 12){
        case 0:
           zodiac = 'Monkey'
           break;
        case 1:
            zodiac = 'rooster'
            break;
        case 2:
            zodiac = 'dog'
            break;
        case 3:
            zodiac = 'pig'
            break;
        case 4:
            zodiac = 'rat'
            break;
        case 5:
            zodiac = 'ox'
            break;
        case 6:
            zodiac = 'tiger'
            break;
        case 7:
            zodiac = 'rabbit'
            break;
        case 8:
            zodiac = 'dragon'
            break;
        case 9:
            zodiac = 'snake'
            break;
        case 10:
            zodiac = 'horse'
            break;
        case 11:
            zodiac = 'sheep'
            break;
    }return zodiac;
}

let Chanon = zodiacTime(1900);
console.log(`Zodiac : ${Chanon}`)