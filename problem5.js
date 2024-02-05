let n = 15, x = 3, y = 5;

function isDiv (n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return "n = " + String(n).padStart(3) + ", x = " + String(x).padStart(2) + ", y = " + String(y).padStart(2) + " => " + "true".padStart(5);
  }
  else return "n = " + String(n).padStart(3) + ", x = " + String(x).padStart(2) + ", y = " + String(y).padStart(2) + " => " + "false".padStart(5);
}

console.log(isDiv(n, x, y))