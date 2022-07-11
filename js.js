const name = prompt('скажите имя:','');
const lastName = prompt('скажите  фамилию:','');
const day =Number(prompt('скажите дату дня дня рождения:',''));
const month = Number(prompt('скажите месяц дня рождения:',''));
const year = Number(prompt('скажите год дня рождения:',''));
let old = 2022 - year;
let zodiacSymbol ;

let leap;
if(year % 400 ==0 || (year % 100 != 0 && year % 4 == 0) ){
    leap = 'years old (leap year)'
}else {
    leap = 'years old'
}


if ( (month == 1 && 19 < day < 32) || (month == 2 && 0 < day < 19) ) {   //1
    zodiacSymbol = 'Aquarius♒'
}
else if((month == 2 && 18 < day < 30) || (month == 3 && 0 < day < 21)) { //2
    zodiacSymbol ='Pisces♓'
}
else if((month == 3 && 20 < day < 32) || (month == 4 && 0 < day < 20)) {//3
    zodiacSymbol ='Aries♈'
}
else if((month == 4 && 19 < day < 31) || (month == 5 && 0 < day < 19)) {//4
    zodiacSymbol ='Taurus♉'
}
else if((month == 5 && 21 < day < 32) || (month == 6 && 0 < day < 19)) {//5
    zodiacSymbol ='Gemini♊'
}
else if ((month == 6 && 22 < day < 31) || (month == 7 && 0 < day < 23)) {//6
    zodiacSymbol ='Cancer♋'
}
else if((month == 7 && 22 < day < 32) || (month == 8 && 0 < day < 23)) {//7
    zodiacSymbol ='Leo♌'
}
else if((month == 8 && 22 < day < 32) || (month == 9 && 0 < day < 23)) {//8
    zodiacSymbol ='Virgo♍'
}
else if((month == 9 && 22 < day < 31) || (month == 10 && 0 < day < 23)) {//9
    zodiacSymbol ='Libra♎'
}
else if((month == 10 && 22 < day < 32) || (month == 11 && 0 < day < 22)) {//10
    zodiacSymbol ='Scorpio♏'
}
else if((month == 11 && 21 < day < 30) || (month == 12 && 0 < day < 21)) {//11
    zodiacSymbol ='Sagittarius♐'
}
else if ( (month == 12 && 21 < day < 30) || (month == 1 && 0 < day < 20) ) {
    zodiacSymbol ='Capricorn♑'
}



console.log(`User Bio: ${name} ${lastName}, ${old} ${leap}, ${zodiacSymbol}`);