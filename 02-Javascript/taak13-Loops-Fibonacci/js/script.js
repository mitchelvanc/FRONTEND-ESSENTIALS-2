var fibonacci = [0,1];
for (i=2; i<12; i++){
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    console.log(fibonacci[i]);
}