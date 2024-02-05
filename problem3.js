

for (let i = 0; i < 30; i++) {
  
  if (i % 5 === 0 && i >0) {
    console.log(i + '  fizz buzz');
  }

  if (i % 2 === 0) {
    console.log(i + '  buzz');
  }

  else if (i % 2 === 1) {
    console.log(i + '  fizz');
  }
}