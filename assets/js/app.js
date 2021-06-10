
let year = +prompt('Введите год');

if(year % 100 != 0 && year % 4 == 0){
    console.log('Год - високосный');
} else if(year % 100 == 0 && year % 400 == 0){
    console.log('Год - високосный');
} else{
    console.log('Год - невисокосный');
}