function printNumbers(a, b) {

    let nownumber = a;
  
    let timerId = setInterval (function() {
      console.log(nownumber);
      if (nownumber == b) {
        clearInterval(timerId);
      }
      nownumber++;
    }, 1000);
  }
  
  printNumbers(1, 8);



