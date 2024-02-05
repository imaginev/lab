let month = [1, 6, 7, 11];

function quorter(n) {
  switch (n) {
    case 1:
    case 2:
    case 3:
      return 1;
    case 4:
    case 5:
    case 6:
      return 2
    case 7:
    case 8:
    case 9:
      return 3;
    case 10:
    case 11:
    case 12:
      return 4;
  }
}

for (let i = 0; i < month.length; i++) {

  console.log("месяц " + String(month[i]).padStart(3) + " => " + quorter(month[i]) + " квартал")
}
