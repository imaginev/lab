
let elka = "", n = 20;
for (let i = 0; i <= n; i++) {
  let count;

  if (i % 2 === 0) {
    count = "*".repeat(i);
    elka += count;
  }

  else if (i % 2 === 1) {
    elka += "#".repeat(i);
  }

  elka += "\n";

  if (i === n) {
    elka += "||";
  }
}

console.log(elka);