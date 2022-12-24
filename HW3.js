function summFunc (x){

    function inside(y) {
        return x + y;
      }
      return inside;
    
}
  
result = summFunc(8)(19); 
console.log(result);