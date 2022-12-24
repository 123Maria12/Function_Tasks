var summev = 0;
var summnotev = 0;
var nulls = 0;

function countEvOrNot(){
    for ( i = 0; i < arr.length ; i++ ){

if ( arr[i] == 0) {
    nulls = nulls + 1;
}
else if ( arr[i] % 2 == 1) {
    summnotev = summnotev + arr[i];
}
else if ( arr[i] % 2 == 0) {
    summev = summev + arr[i];
}
}

console.log('Amount of even elements = ' + summev);
console.log('Amount of not even elements = ' + summnotev);
console.log('Amount of null elements: ' + nulls);

}

var arr = [4, 56, 87, "str", null, 0, 456, 23, 0];

console.log(countEvOrNot(arr));


