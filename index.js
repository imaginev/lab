
// PROBLEM 1
let celsius = 23, fahrenheit = 120;

function celsiusToFahrenheit(number) {
  return (number * 9/5) + 32;
}

function fahrenheitToCelsius(number) {
  return (fahrenheit - 32) * 5/9;
}

console.log(celsius + ' по Цельсию равно ' + celsiusToFahrenheit(celsius) + ' по Фаренгейту');
console.log(fahrenheit + ' по Фаренгейту равно ' + Math.trunc(fahrenheitToCelsius(fahrenheit)) + ' по Цельсию');


//PROBLEM 2
let a = 3, b = 5, c = 7, h;

h = 0;

if (a + b > c) 
{
  console.log('треугольник существует');
  console.log('периметр ' + (a + b + c));
  console.log('Площадь ' + (a*h)/2);
  console.log('Соотношение ' + '');
} else { console.log('треугольник не существует')}
